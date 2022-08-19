import {PreviousWordsAndChars} from "./PreviousWordsAndChars";
import {RemainingCharsProps, TypingTestAssertionProps} from "./types";
import _ from "lodash";
import {calcCurrentWordDiff} from "./calcCurrentWordDiff";

export function TypingTestAssertion({
  actualWords,
  expectedWords,
  ...props
}: TypingTestAssertionProps) {
  const {correctChars, incorrectChars, remainingChars} =
      calcCurrentWordDiff(actualWords, expectedWords);

  return (
      <div {...props}>
        <PreviousWordsAndChars
            className="absolute -translate-x-full"
            actualWords={actualWords}
            expectedWords={expectedWords}
            correctChars={correctChars}
            incorrectChars={incorrectChars}
        />
        <RemainingChars
            className="mr-1"
            remainingChars={remainingChars}
        />
        <RemainingWords
            actualWords={actualWords}
            expectedWords={expectedWords}
        />
      </div>
  );
}

export function RemainingChars({remainingChars, ...props}: RemainingCharsProps) {
  return <span {...props}>{remainingChars.join("")}</span>;
}

export function RemainingWords({actualWords, expectedWords}: TypingTestAssertionProps) {
  const remainingWordsToComplete = _
      .slice(expectedWords, actualWords.length, expectedWords.length)
      .join(" ");

  return <span>{remainingWordsToComplete}</span>;
}
