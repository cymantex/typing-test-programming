// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

export function jar({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.util.jar")) return [];

  return [
    ...repeat("Attributes", veryRareMultiplier),
    ...repeat("JarEntry", veryRareMultiplier),
    ...repeat("JarException", veryRareMultiplier),
    ...repeat("JarFile", veryRareMultiplier),
    ...repeat("JarInputStream", veryRareMultiplier),
    ...repeat("JarOutputStream", veryRareMultiplier),
    ...repeat("JarVerifier", veryRareMultiplier),
    ...repeat("Manifest", veryRareMultiplier),
  ];
}
