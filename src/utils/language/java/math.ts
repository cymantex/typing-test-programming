// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function math({ rareMultiplier, veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.math")) return [];

  return [
    ...repeat("BigDecimal", rareMultiplier),
    ...repeat("BigInteger", rareMultiplier),
    ...repeat("MathContext", veryRareMultiplier),
    ...repeat("RoundingMode", veryRareMultiplier),
  ];
}
