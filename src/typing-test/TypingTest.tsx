import {TypingTestInput} from "./input/TypingTestInput";
import {TypingTestDiff} from "./diff/TypingTestDiff";
import _ from "lodash";
import {loremIpsum} from "./vocabulary/loremIpsum";
import {useTypingTestInput} from "./input/useTypingTestInput";
import {TypingTestStats} from "./stats/TypingTestStats";
import {useTypingTestStats} from "./stats/useTypingTestStats";

const vocabulary = _.shuffle(loremIpsum);

export function TypingTest() {
  const {
    typingTestInputValue,
    resetTypingTestInputValue,
    ...typingTestInputProps
  } = useTypingTestInput();

  const actualWords = typingTestInputValue.split(" ");
  const expectedWords = vocabulary;

  const {startTimer, restartTimer, ...typingTestStatsProps} = useTypingTestStats({
    actualWords,
    expectedWords,
    testDurationSeconds: 60,
    onTimerExpire: () => {
      resetTypingTestInputValue();
      restartTimer();
    }
  });

  return (
      <div>
        <h1 className="text-3xl lg:text-5xl">Typing speed test - Programming edition</h1>
        <div className="divider"/>
        <TypingTestStats
            className="max-w-lg ml-auto mr-auto grid grid-flow-col grid-cols-3 justify-center mb-5 text-center stats"
            {...typingTestStatsProps}
        />
        <div className="relative overflow-hidden font-mono">
          <TypingTestDiff
              className="-z-10 absolute left-1/2 top-1/2 -translate-y-1/2 whitespace-pre select-none text-2xl"
              previousWordsAndCharsClassName="absolute -translate-x-full"
              remainingCharsClassName="mr-3"
              actualWords={actualWords}
              expectedWords={expectedWords}
          />
          <TypingTestInput
              typingTestInputValue={typingTestInputValue}
              className="h-24 w-full text-2xl text-center bg-transparent input input-bordered rounded-none"
              onFirstInput={startTimer}
              {...typingTestInputProps}
          />
        </div>
      </div>
  );
}
