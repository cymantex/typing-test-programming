import create from "zustand";
import React, {ChangeEvent} from "react";
import _ from "lodash";

export interface TypingTestStore {
  inputValue: string,
  modalOpen: boolean,
  resetInputValue: () => void,
  onBackspaceRemoveLastCharForCurrentWord: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  onChangeAppendChar: (event: ChangeEvent<HTMLInputElement>) => void,
  handleTimerExpire: () => void,
  handleModalClose: () => void
}

export const useTypingTestStore = create<TypingTestStore>(set => ({
  inputValue: "",
  modalOpen: false,
  resetInputValue: () => set(state => ({
    ...state,
    inputValue: ""
  })),
  onBackspaceRemoveLastCharForCurrentWord: (event: React.KeyboardEvent<HTMLInputElement>) => set(state => {
    const value = state.inputValue;

    function canRemovePreviousCharacter(): boolean {
      const previousChar = value.charAt(value.length - 1);
      return !["", " "].includes(previousChar);
    }

    if (event.key === "Backspace" && canRemovePreviousCharacter()) {
      const valueWithoutLastCharacter = _(value)
          .split("")
          .slice(0, value.length - 1)
          .join("");

      return {
        ...state,
        inputValue: valueWithoutLastCharacter
      };
    }

    return state;
  }),
  onChangeAppendChar: (event: ChangeEvent<HTMLInputElement>) => set(state => {
    const value = state.inputValue;

    const charToAppend = event.target.value;
    const lastValidChar = value.charAt(value.length - 1);

    if (userIsTryingToEnterAnEmptyWord(charToAppend, lastValidChar)) {
      return state;
    }

    return {
      ...state,
      inputValue: value + charToAppend
    };
  }),
  handleTimerExpire: () => set(state => ({
    ...state,
    modalOpen: true
  })),
  handleModalClose: () => set(state => ({
    ...state,
    modalOpen: false,
    inputValue: ""
  }))
}));

function userIsTryingToEnterAnEmptyWord(charToAppend: string, lastValidChar: string) {
  return charToAppend === " " && (lastValidChar === "" || lastValidChar === " ");
}
