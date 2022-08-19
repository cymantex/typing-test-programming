import {TypingTestInput} from "./input/TypingTestInput";
import {TypingTestDiff} from "./assertion/TypingTestDiff";
import _ from "lodash";
import {loremIpsum} from "../vocabulary/loremIpsum";
import {useTypingTestInput} from "./input/useTypingTestInput";
import {TypingTestStats} from "./stats/TypingTestStats";

const vocabulary = _.shuffle(loremIpsum);

export function TypingTest() {
  const {
    typingTestInputValue,
    ...typingTestInputProps
  } = useTypingTestInput();

  return (
      <div>
        <h1 className="text-3xl lg:text-5xl">Typing speed test - Programming edition</h1>
        <div className="divider"/>
        <TypingTestStats/>
        <div className="relative overflow-hidden">
          <TypingTestDiff
              className="-z-10 absolute left-1/2 top-1/2 -translate-y-1/2 whitespace-pre select-none text-2xl"
              previousWordsAndCharsClassName="absolute -translate-x-full"
              remainingCharsClassName="mr-1"
              actualWords={typingTestInputValue.split(" ")}
              expectedWords={vocabulary}
          />
          <TypingTestInput
              className="h-24 w-full text-2xl text-center bg-transparent input input-bordered rounded-none"
              {...typingTestInputProps}
          />
        </div>
      </div>
  );
}
