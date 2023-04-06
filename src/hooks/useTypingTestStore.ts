import create from "zustand";
import React, {ChangeEvent} from "react";
import _ from "lodash";
import {
  getDefaultLanguage,
  getExpectedWords,
  Language,
  setSelectedLanguage
} from "../utils/language/utils";

export interface TypingTestStore {
  inputValue: string,
  resultModalOpen: boolean,
  selectedLanguage: Language,
  expectedWords: string[],
  resetInputValue: () => void,
  onBackspaceRemoveLastCharForCurrentWord: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  onChangeAppendChar: (event: ChangeEvent<HTMLInputElement>) => void,
  onLanguageSelect: (language: Language) => void,
  handleTimerExpire: () => void,
  handleResultModalClose: () => void
}

export const useTypingTestStore = create<TypingTestStore>(set => ({
  inputValue: "",
  resultModalOpen: false,
  selectedLanguage: getDefaultLanguage(),
  expectedWords: _.shuffle(getExpectedWords(getDefaultLanguage())),
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
  onLanguageSelect: (language: Language) => set(state => {
    // noinspection JSIgnoredPromiseFromCall (intentionally set to happen in the background)
    setSelectedLanguage(language);

    return {
      ...state,
      selectedLanguage: language,
      expectedWords: _.shuffle(getExpectedWords(language))
    };
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
    resultModalOpen: true
  })),
  handleResultModalClose: () => set(state => ({
    ...state,
    expectedWords: _.shuffle(state.expectedWords),
    resultModalOpen: false,
    inputValue: ""
  }))
}));

function userIsTryingToEnterAnEmptyWord(charToAppend: string, lastValidChar: string) {
  return charToAppend === " " && (lastValidChar === "" || lastValidChar === " ");
}
