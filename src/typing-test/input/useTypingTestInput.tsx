import React, {useState} from "react";
import {TypingTestInputProps} from "./TypingTestInput";
import _ from "lodash";

export interface TypingTestInputEvent extends Omit<TypingTestInputProps, "onFirstInput"> {
  resetTypingTestInputValue: () => void
}

export function useTypingTestInput(): TypingTestInputEvent {
  const [value, setValue] = useState<string>("");

  function canRemovePreviousCharacter(): boolean {
    const previousChar = value.charAt(value.length - 1);
    return !["", " "].includes(previousChar);
  }

  return {
    typingTestInputValue: value,
    resetTypingTestInputValue: () => setValue(""),
    onPastePreventDefault: (event) => {
      // TODO: Would maybe be nice with some Toast here instead :-)
      console.warn("Copy paste cheating is not allowed, sorry!");
      event.preventDefault();
    },
    onBackspaceRemoveLastCharForCurrentWord: (event) => {
      if (event.key === "Backspace" && canRemovePreviousCharacter()) {
        setValue(previousValue => _(previousValue)
            .split("")
            .slice(0, previousValue.length - 1)
            .join(""));
      }
    },
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
