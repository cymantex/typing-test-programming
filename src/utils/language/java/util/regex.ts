// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function regex({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.util.regex")) return [];

  return [
    ...repeat("IntHashSet", veryRareMultiplier),
    ...repeat("MatchResult", veryRareMultiplier),
    ...repeat("Matcher", veryRareMultiplier),
    ...repeat("Pattern", veryRareMultiplier),
    ...repeat("PatternSyntaxException", veryRareMultiplier),
  ];
}
