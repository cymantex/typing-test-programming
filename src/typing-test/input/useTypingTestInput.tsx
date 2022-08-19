import React, {useState} from "react";
import {TypingTestInputProps} from "./TypingTestInput";

interface TypingTestInputEvent extends TypingTestInputProps {
  currentValue: string
}

export function useTypingTestInput(): TypingTestInputEvent {
  const [currentValue, setCurrentValue] = useState<string>("");

  function removeLastCharOnBackspaceForCurrentWord(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && canRemovePreviousCharacter()) {
      setCurrentValue(previousValue => previousValue.slice(0, previousValue.length - 1));
    }
  }

  function canRemovePreviousCharacter(): boolean {
    const previousChar = currentValue.charAt(currentValue.length - 1);
    return !["", " "].includes(previousChar);
  }

  return {
    currentValue,
    onBackspaceRemoveLastCharForCurrentWord: removeLastCharOnBackspaceForCurrentWord,
    onChangeAppendChar: (e) => {
      const charToAppend = e.target.value;
      const lastValidChar = currentValue.charAt(currentValue.length - 1);

      if (userIsTryingToInputAnEmptyWord(charToAppend, lastValidChar)) {
        return;
      }

      setCurrentValue(previousValue => previousValue + charToAppend);
    }
  };
}

function userIsTryingToInputAnEmptyWord(charToAppend: string, lastValidChar: string) {
  return charToAppend === " " && (lastValidChar === "" || lastValidChar === " ");
}
