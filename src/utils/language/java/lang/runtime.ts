// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

export function runtime({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.lang.runtime")) return [];

  return [
    ...repeat("ObjectMethods", veryRareMultiplier),
    ...repeat("SwitchBootstraps", veryRareMultiplier),
  ];
}
