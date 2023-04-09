// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function charsetSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.nio.charset.spi")) return [];

  return [...repeat("CharsetProvider", veryRareMultiplier)];
}
