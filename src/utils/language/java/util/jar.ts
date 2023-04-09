// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function jar({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.util.jar")) return [];

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
