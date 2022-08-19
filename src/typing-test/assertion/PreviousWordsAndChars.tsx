import _ from "lodash";
import {CompletedWordsAndCharsProps} from "./types";

export function PreviousWordsAndChars({
  actualWords,
  expectedWords,
  correctChars,
  incorrectChars,
  ...props
}: CompletedWordsAndCharsProps) {
  const previouslyCompletedWords = _
      .slice(actualWords, 0, actualWords.length - 1);

  return <div {...props}>{
    previouslyCompletedWords.map((previouslyCompletedWord, i) => {
      const className = (i < expectedWords.length && expectedWords[i] === previouslyCompletedWord)
          ? "text-success"
          : "text-error";
      return <span key={i} className={className}>{previouslyCompletedWord} </span>;
    })
  }{
    correctChars
        .map((correctChar, i) =>
            <span key={i} className="text-success">{correctChar}</span>)
  }{
    incorrectChars
        .map((incorrectChar, i) =>
            <span key={i} className="text-error">{incorrectChar}</span>)
  }</div>;
}
