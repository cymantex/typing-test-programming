import _ from "lodash";

export function calcCurrentWordDiff(actualWords: string[], expectedWords: string[]) {
  const actualWord = actualWords[actualWords.length - 1];
  const expectedWord = expectedWords.length > actualWords.length - 1
      ? expectedWords[actualWords.length - 1]
      : "";

  const expectedChars = expectedWord.split("");
  const actualChars = actualWord.split("");

  let firstIncorrectCharIndex = expectedChars
      .findIndex((expectedChar, i) => actualChars[i] !== expectedChar);
  firstIncorrectCharIndex = firstIncorrectCharIndex === -1
      ? expectedChars.length
      : firstIncorrectCharIndex;

  const correctChars = _.slice(expectedChars, 0, firstIncorrectCharIndex);
  const incorrectChars = _.slice(actualChars, firstIncorrectCharIndex, actualChars.length);
  const remainingChars = _.slice(expectedChars, firstIncorrectCharIndex, expectedChars.length);

  return {correctChars, incorrectChars, remainingChars};
}
