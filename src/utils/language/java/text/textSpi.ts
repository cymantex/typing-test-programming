// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

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
