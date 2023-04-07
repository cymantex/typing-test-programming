// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function regex({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.util.regex")) return [];

  return [
    ...repeat("IntHashSet", veryRareMultiplier),
    ...repeat("MatchResult", veryRareMultiplier),
    ...repeat("Matcher", veryRareMultiplier),
    ...repeat("Pattern", veryRareMultiplier),
    ...repeat("PatternSyntaxException", veryRareMultiplier),
  ];
}
