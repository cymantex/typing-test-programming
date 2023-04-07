import { getObject, upsertObject } from "local-storage-superjson";

export interface LanguageSettings {
  insanelyCommonMultiplier: number;
  extremelyCommonMultiplier: number;
  veryCommonMultiplier: number;
  commonMultiplier: number;
  rareMultiplier: number;
  veryRareMultiplier: number;
  vocabularyMultiplier: number;
  enabledPackages: Set<string>;
}

export const defaultSettings: LanguageSettings = {
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
};

export function upsertSettings(settings: Partial<LanguageSettings>) {
  upsertObject<LanguageSettings>("settings", defaultSettings, (previousSettings) => ({
    ...previousSettings,
    ...settings,
  }));
}

export function getSettings(): LanguageSettings {
  const settings = getObject<LanguageSettings>("settings");
  console.log(settings);

  if (settings === null) return defaultSettings;

  return settings;
}
