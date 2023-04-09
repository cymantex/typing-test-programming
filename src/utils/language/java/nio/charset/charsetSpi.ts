// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

export function charsetSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.nio.charset.spi")) return [];

  return [...repeat("CharsetProvider", veryRareMultiplier)];
}
