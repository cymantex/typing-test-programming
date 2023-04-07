// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function stream({
  veryRareMultiplier,
  extremelyCommonMultiplier,
  rarerMultiplier,
  enabledPackages,
}: LanguageSettings) {
  if (!enabledPackages.has("java.util.stream")) return [];

  return [
    ...repeat("BaseStream", veryRareMultiplier),
    ...repeat("Collector", veryRareMultiplier),
    ...repeat("Collectors", extremelyCommonMultiplier),
    ...repeat("DoubleStream", rarerMultiplier),
    ...repeat("IntStream", rarerMultiplier),
    ...repeat("LongStream", rarerMultiplier),
    ...repeat("MatchOps", veryRareMultiplier),
    ...repeat("Node", veryRareMultiplier),
    ...repeat("Stream", extremelyCommonMultiplier),
    ...repeat("StreamOpFlag", veryRareMultiplier),
    ...repeat("StreamShape", veryRareMultiplier),
    ...repeat("StreamSupport", veryRareMultiplier),
  ];
}
