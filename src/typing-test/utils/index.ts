/**
 * The actualWords should always include the "currentWord" the user is in the progress of typing.
 * This currentWord can also be an empty string.
 */
export function actualWordsLengthWithoutCurrentWord(actualWords: string[]) {
  if (actualWords.length === 0) {
    throw new Error(`actualWords.length should never be 0`);
  }

  return actualWords.length - 1;
}
