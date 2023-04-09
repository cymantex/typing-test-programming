// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function runtime({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.lang.runtime")) return [];

  return [
    ...repeat("ObjectMethods", veryRareMultiplier),
    ...repeat("SwitchBootstraps", veryRareMultiplier),
  ];
}
