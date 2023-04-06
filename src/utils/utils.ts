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

export function repeat(text: string, times: number): string[] {
  const repeats = [];

  for (let i = 0; i < times; i++) {
    repeats.push(text);
  }

  return repeats;
}

export function repeatArray(array: string[], times: number) {
  let repeats: string[] = [];

  for (let i = 0; i < times; i++) {
    repeats = [...repeats, ...array];
  }

  return repeats;
}
