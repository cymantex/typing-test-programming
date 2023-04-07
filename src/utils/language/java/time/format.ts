// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function format({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.time.format")) return [];

  return [
    ...repeat("DateTimeFormatter", veryRareMultiplier),
    ...repeat("DateTimeFormatterBuilder", veryRareMultiplier),
    ...repeat("DateTimeParseException", veryRareMultiplier),
    ...repeat("DecimalStyle", veryRareMultiplier),
    ...repeat("FormatStyle", veryRareMultiplier),
    ...repeat("ResolverStyle", veryRareMultiplier),
    ...repeat("SignStyle", veryRareMultiplier),
    ...repeat("TextStyle", veryRareMultiplier),
  ];
}
