// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function stream({
  veryRareMultiplier,
  extremelyCommonMultiplier,
  rareMultiplier,
  enabledPackages,
}: Settings) {
  if (!enabledPackages.has("java.util.stream")) return [];

  return [
    ...repeat("BaseStream", veryRareMultiplier),
    ...repeat("Collector", veryRareMultiplier),
    ...repeat("Collectors", extremelyCommonMultiplier),
    ...repeat("DoubleStream", rareMultiplier),
    ...repeat("IntStream", rareMultiplier),
    ...repeat("LongStream", rareMultiplier),
    ...repeat("MatchOps", veryRareMultiplier),
    ...repeat("Node", veryRareMultiplier),
    ...repeat("Stream", extremelyCommonMultiplier),
    ...repeat("StreamOpFlag", veryRareMultiplier),
    ...repeat("StreamShape", veryRareMultiplier),
    ...repeat("StreamSupport", veryRareMultiplier),
  ];
}
