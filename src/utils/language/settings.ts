import { getObject, upsertObject } from "local-storage-superjson";
import { Language, LanguageSettings, Settings } from "@/types";
import { omit } from "lodash";

const LANGUAGE_SETTINGS_KEY = "language-settings";

const defaultSettings: Settings = {
  insanelyCommonMultiplier: 10,
  extremelyCommonMultiplier: 7,
  veryCommonMultiplier: 5,
  commonMultiplier: 3,
  rareMultiplier: 2,
  veryRareMultiplier: 1,
  vocabularyMultiplier: 5,
  enabledPackages: new Set<string>([
    "java.lang",
    "java.time",
    "java.util",
    "java.util.function",
    "java.util.stream",
  ]),
  testDurationSeconds: 60,
};

export const defaultLanguageSettings: LanguageSettings = {
  Java: defaultSettings,
  Typescript: omit(defaultSettings, "enabledPackages"),
};

export function upsertSettings(language: Language, settings: Partial<Settings>) {
  upsertObject<LanguageSettings>(
    LANGUAGE_SETTINGS_KEY,
    {
      ...defaultLanguageSettings,
      [language]: {
        ...defaultLanguageSettings[language],
        ...settings,
      },
    },
    (previousSettings) => ({
      ...previousSettings,
      [language]: {
        ...previousSettings[language],
        ...settings,
      },
    })
  );
}

export function getSettings(language: Language): Settings {
  const settings = getObject<LanguageSettings>(LANGUAGE_SETTINGS_KEY);

  if (settings === null || !settings[language]) return defaultSettings;

  return {
    ...defaultLanguageSettings[language],
    ...settings[language],
  };
}
