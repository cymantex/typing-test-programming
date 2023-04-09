// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function runtime({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.lang.runtime")) return [];

  return [
    ...repeat("ObjectMethods", veryRareMultiplier),
    ...repeat("SwitchBootstraps", veryRareMultiplier),
  ];
}
