// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function random({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.util.random")) return [];

  return [
    ...repeat("RandomGenerator", veryRareMultiplier),
    ...repeat("RandomGeneratorFactory", veryRareMultiplier),
  ];
}
