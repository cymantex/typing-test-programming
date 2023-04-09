import { getObject, upsertObject } from "local-storage-superjson";
import { Settings } from "@/types";

export const defaultSettings: Settings = {
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

export function upsertSettings(settings: Partial<Settings>) {
  upsertObject<Settings>("settings", { ...defaultSettings, ...settings }, (previousSettings) => ({
    ...previousSettings,
    ...settings,
  }));
}

export function getSettings(): Settings {
  const settings = getObject<Settings>("settings") || {};

  return {
    ...defaultSettings,
    ...settings,
  };
}
