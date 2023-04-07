import React from "react";
import { PreviousWordsAndChars } from "./PreviousWordsAndChars";
import { RemainingCharsProps, TypingTestDiffProps, TypingTestWords } from "./types";
import _ from "lodash";
import { calcCurrentWordDiff } from "./calcCurrentWordDiff";

export function TypingTestChars({
  actualWords,
  expectedWords,
  previousWordsAndCharsClassName,
  remainingCharsClassName,
  ...props
}: TypingTestDiffProps) {
  const { correctChars, incorrectChars, remainingChars } = calcCurrentWordDiff(
    actualWords,
    expectedWords
  );

  return (
    <div {...props}>
      <PreviousWordsAndChars
        className={previousWordsAndCharsClassName}
        actualWords={actualWords}
        expectedWords={expectedWords}
        correctChars={correctChars}
        incorrectChars={incorrectChars}
      />
      <RemainingChars className={remainingCharsClassName} remainingChars={remainingChars} />
      <RemainingWords actualWords={actualWords} expectedWords={expectedWords} />
    </div>
  );
}

export function RemainingChars({ remainingChars, ...props }: RemainingCharsProps) {
  return <span {...props}>{remainingChars.join("")}</span>;
}

export function RemainingWords({ actualWords, expectedWords }: TypingTestWords) {
  const remainingWords = _.slice(expectedWords, actualWords.length, expectedWords.length).join(" ");

  return <span>{remainingWords}</span>;
}
