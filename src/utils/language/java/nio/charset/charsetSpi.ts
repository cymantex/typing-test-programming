// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function charsetSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.nio.charset.spi")) return [];

  return [...repeat("CharsetProvider", veryRareMultiplier)];
}
