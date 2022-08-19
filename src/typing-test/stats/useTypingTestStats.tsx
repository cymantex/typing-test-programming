import {useTimer} from "react-timer-hook";
import {TypingTestStatsProps} from "./TypingTestStats";
import _ from "lodash";
import {TypingTestWords} from "../diff/types";

interface TypingTestStatsEvent extends TypingTestStatsProps {
  startTimer: () => void
}

interface UseTypingTestStatsProps extends TypingTestWords {
  testDurationSeconds: number
}

export function useTypingTestStats({
  actualWords,
  expectedWords,
  testDurationSeconds
}: UseTypingTestStatsProps): TypingTestStatsEvent {
  const dateOneMinuteInFuture = new Date();
  dateOneMinuteInFuture.setSeconds(dateOneMinuteInFuture.getSeconds() + testDurationSeconds);

  const {start, seconds} = useTimer({
    autoStart: false,
    expiryTimestamp: dateOneMinuteInFuture
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
    startTimer: start,
    // This is a bit of an ugly hack to display the amount of seconds available for the test.
    // useTimer defaults seconds to 0 before the start function is called.
    remainingSeconds: seconds === 0 ? 60 : seconds,
  };
}

function calcCountPerMinute(count: number, testDurationSeconds: number) {
  // Using .ceil here to make the user slightly more happy about their result :-)
  return Math.ceil(count / (testDurationSeconds / 60));
}
