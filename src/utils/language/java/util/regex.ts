// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

export function regex({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.util.regex")) return [];

  return [
    ...repeat("IntHashSet", veryRareMultiplier),
    ...repeat("MatchResult", veryRareMultiplier),
    ...repeat("Matcher", veryRareMultiplier),
    ...repeat("Pattern", veryRareMultiplier),
    ...repeat("PatternSyntaxException", veryRareMultiplier),
  ];
}
