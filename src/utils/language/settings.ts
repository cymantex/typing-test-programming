export interface VocabularySettings {
  extremelyCommonMultiplier: number;
  veryCommonMultiplier: number;
  commonMultiplier: number;
  rareMultiplier: number;
  veryRareMultiplier: number;
  vocabularyMultiplier: number;
}

export const defaultSettings: VocabularySettings = {
  extremelyCommonMultiplier: 7,
  veryCommonMultiplier: 5,
  commonMultiplier: 3,
  rareMultiplier: 2,
  veryRareMultiplier: 1,
  vocabularyMultiplier: 5,
};
