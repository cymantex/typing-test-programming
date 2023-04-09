// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

export function random({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.util.random")) return [];

  return [
    ...repeat("RandomGenerator", veryRareMultiplier),
    ...repeat("RandomGeneratorFactory", veryRareMultiplier),
  ];
}
