// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function utilSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.util.spi")) return [];

  return [
    ...repeat("AbstractResourceBundleProvider", veryRareMultiplier),
    ...repeat("CalendarDataProvider", veryRareMultiplier),
    ...repeat("CalendarNameProvider", veryRareMultiplier),
    ...repeat("CurrencyNameProvider", veryRareMultiplier),
    ...repeat("LocaleNameProvider", veryRareMultiplier),
    ...repeat("LocaleServiceProvider", veryRareMultiplier),
    ...repeat("ResourceBundleControlProvider", veryRareMultiplier),
    ...repeat("ResourceBundleProvider", veryRareMultiplier),
    ...repeat("TimeZoneNameProvider", veryRareMultiplier),
    ...repeat("ToolProvider", veryRareMultiplier),
  ];
}
