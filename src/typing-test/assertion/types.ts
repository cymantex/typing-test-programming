import {HTMLAttributes} from "react";

export interface TypingTestAssertionProps extends HTMLAttributes<HTMLElement> {
  actualWords: string[],
  expectedWords: string[]
}

export interface RemainingCharsProps extends HTMLAttributes<HTMLElement> {
  remainingChars: string[]
}

export interface CompletedWordsAndCharsProps extends TypingTestAssertionProps {
  correctChars: string[],
  incorrectChars: string[]
}
