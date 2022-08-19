import {TypingTestInput} from "./input/TypingTestInput";
import {TypingTestAssertion} from "./assertion/TypingTestAssertion";
import _ from "lodash";
import {loremIpsum} from "../vocabulary/loremIpsum";
import {useTypingTestInput} from "./input/useTypingTestInput";

const vocabulary = _.shuffle(loremIpsum);

export function TypingTest() {
  const {
    currentValue,
    onBackspaceRemoveLastCharForCurrentWord,
    onChangeAppendChar,
    ...props
  } = useTypingTestInput();

  return (
      <div>
        <h1 className="text-3xl lg:text-5xl">Typing speed test - Programming edition</h1>
        <div className="divider"></div>
        <div className="relative overflow-hidden">
          <TypingTestAssertion
              className="-z-10 absolute left-1/2 top-1/2 -translate-y-1/2 whitespace-pre select-none text-2xl"
              actualWords={currentValue.split(" ")}
              expectedWords={vocabulary}
          />
          <TypingTestInput
              className="h-24 w-full text-2xl text-center bg-transparent rounded-none"
              onChangeAppendChar={onChangeAppendChar}
              onBackspaceRemoveLastCharForCurrentWord={onBackspaceRemoveLastCharForCurrentWord}
              onPaste={(event) => {
                console.warn("Copy paste cheating is not allowed, sorry!");
                event.preventDefault();
              }}
              {...props}
          />
        </div>
      </div>
  );
}
