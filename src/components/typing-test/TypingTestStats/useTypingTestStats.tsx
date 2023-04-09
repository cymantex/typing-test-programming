import { useTimer } from "react-timer-hook";
import { TypingTestStatsProps } from "./TypingTestStats";
import _ from "lodash";
import { TypingTestWords } from "../TypingTestChars/types";
import { actualWordsLengthWithoutCurrentWord } from "../../../utils/utils";

interface TypingTestStatsEvent extends TypingTestStatsProps {
  startTimer: () => void;
  resetTimer: (seconds?: number) => void;
}

interface UseTypingTestStatsProps extends TypingTestWords {
  testDurationSeconds: number;
  onTimerExpire: () => void;
}

export function useTypingTestStats({
  actualWords,
  expectedWords,
  onTimerExpire,
  testDurationSeconds,
}: UseTypingTestStatsProps): TypingTestStatsEvent {
  const dateSecondsInFuture = appendSecondsToCurrentDateTime(testDurationSeconds);

  const { start, restart, seconds, minutes } = useTimer({
    autoStart: false,
    expiryTimestamp: dateSecondsInFuture,
    onExpire: onTimerExpire,
  });

  const correctWords = _(expectedWords)
    // Using the full actualWords.length instead would mean the CPM/WPM updates immediately when
    // the user reaches the end of the current word rather than when submitting it.
    .slice(0, actualWordsLengthWithoutCurrentWord(actualWords))
    .filter((expectedWord, i) => expectedWord === actualWords[i])
    .toJSON();

  return {
    wpm: calcCountPerMinute(correctWords.length, testDurationSeconds),
    cpm: calcCountPerMinute(correctWords.join("").length, testDurationSeconds),
    accuracy: calcAccuracy(actualWords, correctWords),
    resetTimer: (seconds = testDurationSeconds) => {
      restart(appendSecondsToCurrentDateTime(seconds), false);
    },
    startTimer: start,
    // This is a bit of an ugly hack to display the amount of seconds available for the test.
    // useTimer defaults seconds to 0 before the start function is called.
    remainingSeconds: seconds === 0 ? testDurationSeconds : toSeconds(seconds, minutes),
  };
}

function toSeconds(seconds: number, minutes: number) {
  return seconds + minutes * 60;
}

function calcCountPerMinute(count: number, testDurationSeconds: number) {
  // Using .ceil here to make the user slightly more happy about their result :-)
  return Math.ceil(count / (testDurationSeconds / 60));
}

function calcAccuracy(actualWords: string[], correctWords: string[]): string {
  const actualWordsLength = actualWordsLengthWithoutCurrentWord(actualWords);

  if (actualWordsLength === 0) {
    return "0%";
  }

  const accuracy = ((correctWords.length / actualWordsLength) * 100).toFixed(0);

  return `${accuracy}%`;
}

function appendSecondsToCurrentDateTime(testDurationSeconds: number) {
  const dateSecondsInFuture = new Date();
  dateSecondsInFuture.setSeconds(dateSecondsInFuture.getSeconds() + testDurationSeconds);
  return dateSecondsInFuture;
}
