export const Languages = ["Java", "Typescript"] as const;
export type Language = (typeof Languages)[number];

export type TypingTestResult = {
  wpm: number;
  cpm: number;
  accuracy: string;
  selectedLanguage: Language;
  // TODO: Add test duration
};

export type TypingTestResultMappings = {
  [date: string]: TypingTestResult;
};

export interface Settings {
  insanelyCommonMultiplier: number;
  extremelyCommonMultiplier: number;
  veryCommonMultiplier: number;
  commonMultiplier: number;
  rareMultiplier: number;
  veryRareMultiplier: number;
  vocabularyMultiplier: number;
  testDurationSeconds: number;
  enabledPackages?: Set<string>;
}

export type LanguageSettings = {
  [language in Language]: Settings;
};
