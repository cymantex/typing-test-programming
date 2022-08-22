import {java} from "./java";
import {SiJava, SiTypescript} from "react-icons/all";
import {typescript} from "./typescript";
import {ReactElement} from "react";
import {getObject, setObject} from "local-storage-superjson";

export enum Language {
  Java = "Java",
  Typescript = "Typescript"
}

const languageMap = {
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
