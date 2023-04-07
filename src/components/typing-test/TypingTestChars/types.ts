import { HTMLAttributes } from "react";

export interface TypingTestWords {
  actualWords: string[];
  expectedWords: string[];
}

export interface TypingTestDiffProps extends TypingTestWords, HTMLAttributes<HTMLElement> {
  previousWordsAndCharsClassName: string;
  remainingCharsClassName: string;
}

export interface RemainingCharsProps extends HTMLAttributes<HTMLElement> {
  remainingChars: string[];
}

export interface CompletedWordsAndCharsProps extends TypingTestWords, HTMLAttributes<HTMLElement> {
  correctChars: string[];
  incorrectChars: string[];
}
