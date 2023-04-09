import React from "react";
import { java } from "./java/java";
import { SiJava, SiTypescript } from "react-icons/all";
import { typescript } from "./typescript";
import { ReactElement } from "react";
import { getObject, setObject } from "local-storage-superjson";
import { getSettings, Settings } from "@/utils/language/settings";

export const Languages = ["Java", "Typescript"] as const;
export type Language = (typeof Languages)[number];

interface LanguageMapping {
  [language: string]: {
    Icon: () => ReactElement;
    getExpectedWords: (settings: Settings) => string[];
  };
}

/**
 * This object should contain everything relevant for the given language. The main idea is that
 * you should only need to properly define this mapping for any new language added.
 */
export const languageMap: LanguageMapping = {
  ["Java"]: {
    Icon: () => <SiJava title={"Java"} />,
    getExpectedWords: java,
  },
  ["Typescript"]: {
    Icon: () => <SiTypescript title={"Typescript"} />,
    getExpectedWords: typescript,
  },
};

export function getDefaultLanguage(): Language {
  const languageOrNull = getObject<Language>("language");

  if (languageOrNull === null) {
    return "Java";
  }

  return languageOrNull;
}

export async function setSelectedLanguage(language: Language): Promise<void> {
  return new Promise((resolve) => {
    setObject("language", language);
    resolve();
  });
}

export function getExpectedWords(language: Language): string[] {
  return languageMap[language].getExpectedWords(getSettings());
}
