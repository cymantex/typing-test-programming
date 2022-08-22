import {java} from "./java";
import {SiJava, SiTypescript} from "react-icons/all";
import {typescript} from "./typescript";
import {ReactElement} from "react";
import {getObject, setObject} from "local-storage-superjson";

export enum Language {
  Java = "Java",
  Typescript = "Typescript"
}

interface LanguageMapping {
  [language: string]: {
    Icon: () => ReactElement,
    getExpectedWords: () => string[]
  }
}

/**
 * This object should contain everything relevant for the given language. The main idea is that
 * you should only need to properly define this mapping for any new language added.
 */
const languageMap: LanguageMapping = {
  [Language.Java]: {
    Icon: () => <SiJava title={Language.Java}/>,
    getExpectedWords: java
  },
  [Language.Typescript]: {
    Icon: () => <SiTypescript title={Language.Typescript}/>,
    getExpectedWords: typescript
  }
};

export function toLanguage(language: string): Language {
  return Language[language as keyof typeof Language];
}

export function getDefaultLanguage(): Language {
  const languageOrNull = getObject<Language>("language");

  if (languageOrNull === null) {
    return Language.Java;
  }

  return languageOrNull;
}

export async function setSelectedLanguage(language: Language): Promise<void> {
  return new Promise(resolve => {
    setObject("language", language);
    resolve();
  });
}

export function LanguageIcon({language}: { language: string }): ReactElement {
  const Icon = languageMap[toLanguage(language)].Icon;
  return <Icon/>;
}

export function getExpectedWords(language: string): string[] {
  return languageMap[toLanguage(language)].getExpectedWords();
}
