// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function ref({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.lang.ref")) return [];

  return [
    ...repeat("Cleaner", veryRareMultiplier),
    ...repeat("FinalReference", veryRareMultiplier),
    ...repeat("PhantomReference", veryRareMultiplier),
    ...repeat("Reference", veryRareMultiplier),
    ...repeat("ReferenceQueue", veryRareMultiplier),
    ...repeat("SoftReference", veryRareMultiplier),
    ...repeat("WeakReference", veryRareMultiplier),
  ];
}
