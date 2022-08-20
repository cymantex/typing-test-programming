import {useTimer} from "react-timer-hook";
import {TypingTestStatsProps} from "./TypingTestStats";
import _ from "lodash";
import {TypingTestWords} from "../diff/types";

interface TypingTestStatsEvent extends TypingTestStatsProps {
  startTimer: () => void,
  restartTimer: () => void
}

interface UseTypingTestStatsProps extends TypingTestWords {
  testDurationSeconds: number,
  onTimerExpire: () => void
}

export function useTypingTestStats({
  actualWords,
  expectedWords,
  onTimerExpire,
  testDurationSeconds
}: UseTypingTestStatsProps): TypingTestStatsEvent {
  const dateSecondsInFuture = appendSecondsToCurrentDate(testDurationSeconds);

  const {start, restart, seconds} = useTimer({
    autoStart: false,
    expiryTimestamp: dateSecondsInFuture,
    onExpire: onTimerExpire
  });

  const correctWords = _(expectedWords)
      // Using actualWords.length instead here would mean the CPM/WPM updates immediately when
      // the user reaches the end of the current word rather than when submitting it.
      .slice(0, actualWords.length - 1)
      .filter((expectedWord, i) => expectedWord === actualWords[i])
      .toJSON();

  return {
    wpm: calcCountPerMinute(correctWords.length, testDurationSeconds),
    cpm: calcCountPerMinute(correctWords.join("").length, testDurationSeconds),
    restartTimer: () => {
      console.log("restarting timer");
      restart(appendSecondsToCurrentDate(testDurationSeconds), false);
    },
    startTimer: () => {
      console.log("starting timer");
      start();
    },
    // This is a bit of an ugly hack to display the amount of seconds available for the test.
    // useTimer defaults seconds to 0 before the start function is called.
    remainingSeconds: seconds === 0 ? testDurationSeconds : seconds
  };
}

function calcCountPerMinute(count: number, testDurationSeconds: number) {
  // Using .ceil here to make the user slightly more happy about their result :-)
  return Math.ceil(count / (testDurationSeconds / 60));
}

function appendSecondsToCurrentDate(testDurationSeconds: number) {
  const dateSecondsInFuture = new Date();
  dateSecondsInFuture.setSeconds(dateSecondsInFuture.getSeconds() + testDurationSeconds);
  return dateSecondsInFuture;
}
