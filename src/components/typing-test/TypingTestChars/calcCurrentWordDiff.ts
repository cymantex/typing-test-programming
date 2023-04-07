import _ from "lodash";
import { actualWordsLengthWithoutCurrentWord } from "@/utils/utils";

export function calcCurrentWordDiff(actualWords: string[], expectedWords: string[]) {
  const actualWord = _.last(actualWords);
  const expectedWord =
    expectedWords.length > actualWordsLengthWithoutCurrentWord(actualWords)
      ? expectedWords[actualWordsLengthWithoutCurrentWord(actualWords)]
      : "";

  const expectedChars = expectedWord.split("");
  const actualChars = actualWord ? actualWord.split("") : [];

  let firstIncorrectCharIndex = expectedChars.findIndex(
    (expectedChar, i) => actualChars[i] !== expectedChar
  );
  firstIncorrectCharIndex =
    firstIncorrectCharIndex === -1 ? expectedChars.length : firstIncorrectCharIndex;

  const correctChars = _.slice(expectedChars, 0, firstIncorrectCharIndex);
  const incorrectChars = _.slice(actualChars, firstIncorrectCharIndex, actualChars.length);
  const remainingChars = _.slice(expectedChars, firstIncorrectCharIndex, expectedChars.length);

  return { correctChars, incorrectChars, remainingChars };
}
