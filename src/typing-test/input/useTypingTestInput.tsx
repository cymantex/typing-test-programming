import React, {useState} from "react";
import {TypingTestInputProps} from "./TypingTestInput";
import _ from "lodash";

interface TypingTestInputEvent extends TypingTestInputProps {
  typingTestInputValue: string
}

export function useTypingTestInput(): TypingTestInputEvent {
  const [value, setValue] = useState<string>("");

  function removeLastCharOnBackspaceForCurrentWord(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && canRemovePreviousCharacter()) {
      setValue(previousValue => _(previousValue)
          .split("")
          .slice(0, previousValue.length - 1)
          .join(""));
    }
  }

  function canRemovePreviousCharacter(): boolean {
    const previousChar = value.charAt(value.length - 1);
    return !["", " "].includes(previousChar);
  }

  return {
    typingTestInputValue: value,
    onPastePreventDefault: (event) => {
      console.warn("Copy paste cheating is not allowed, sorry!");
      event.preventDefault();
    },
    onBackspaceRemoveLastCharForCurrentWord: removeLastCharOnBackspaceForCurrentWord,
    onChangeAppendChar: (event) => {
      const charToAppend = event.target.value;
      const lastValidChar = value.charAt(value.length - 1);

      if (userIsTryingToEnterAnEmptyWord(charToAppend, lastValidChar)) {
        return;
      }

      setValue(previousValue => previousValue + charToAppend);
    }
  };
}

function userIsTryingToEnterAnEmptyWord(charToAppend: string, lastValidChar: string) {
  return charToAppend === " " && (lastValidChar === "" || lastValidChar === " ");
}
