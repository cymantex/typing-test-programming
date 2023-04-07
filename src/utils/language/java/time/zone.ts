// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function zone({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.time.zone")) return [];

  return [
    ...repeat("Ser", veryRareMultiplier),
    ...repeat("TzdbZoneRulesProvider", veryRareMultiplier),
    ...repeat("ZoneOffsetTransition", veryRareMultiplier),
    ...repeat("ZoneOffsetTransitionRule", veryRareMultiplier),
    ...repeat("ZoneRules", veryRareMultiplier),
    ...repeat("ZoneRulesException", veryRareMultiplier),
    ...repeat("ZoneRulesProvider", veryRareMultiplier),
  ];
}
