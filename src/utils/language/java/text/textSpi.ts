// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function textSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.text.spi")) return [];

  return [
    ...repeat("BreakIteratorProvider", veryRareMultiplier),
    ...repeat("CollatorProvider", veryRareMultiplier),
    ...repeat("DateFormatProvider", veryRareMultiplier),
    ...repeat("DateFormatSymbolsProvider", veryRareMultiplier),
    ...repeat("DecimalFormatSymbolsProvider", veryRareMultiplier),
    ...repeat("NumberFormatProvider", veryRareMultiplier),
  ];
}
