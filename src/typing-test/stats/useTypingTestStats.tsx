import {useTimer} from "react-timer-hook";
import {TypingTestStatsProps} from "./TypingTestStats";
import _ from "lodash";

interface TypingTestStatsEvent extends TypingTestStatsProps {
  startTimer: () => void
}

export function useTypingTestStats(actualWords: string[], expectedWords: string[]): TypingTestStatsEvent {
  const dateOneMinuteInFuture = new Date();
  dateOneMinuteInFuture.setSeconds(dateOneMinuteInFuture.getSeconds() + 60);

  const {start, seconds} = useTimer({
    autoStart: false,
    expiryTimestamp: dateOneMinuteInFuture
  });

  const correctWords = _(expectedWords)
      // Using actualWords.length instead here would mean the CPM/WPM updates immediately when
      // the user reaches the end of the current word rather than when submitting it.
      .slice(0, actualWords.length - 1)
      .intersection(actualWords)
      .toJSON();

  return {
    wpm: correctWords.length,
    cpm: correctWords.join("").length,
    startTimer: start,
    // This is a bit of an ugly hack to display the amount of seconds available for the test.
    // useTimer defaults seconds to 0 before the start function is called.
    remainingSeconds: seconds === 0 ? 60 : seconds,
  };
}
