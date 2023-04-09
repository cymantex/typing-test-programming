// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function time({ veryRareMultiplier, commonMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.time")) return [];

  return [
    ...repeat("Clock", veryRareMultiplier),
    ...repeat("DateTimeException", veryRareMultiplier),
    ...repeat("DayOfWeek", veryRareMultiplier),
    ...repeat("Duration", veryRareMultiplier),
    ...repeat("Instant", commonMultiplier),
    ...repeat("InstantSource", veryRareMultiplier),
    ...repeat("LocalDate", veryRareMultiplier),
    ...repeat("LocalDateTime", veryRareMultiplier),
    ...repeat("LocalTime", veryRareMultiplier),
    ...repeat("Month", veryRareMultiplier),
    ...repeat("MonthDay", veryRareMultiplier),
    ...repeat("OffsetDateTime", veryRareMultiplier),
    ...repeat("OffsetTime", veryRareMultiplier),
    ...repeat("Period", veryRareMultiplier),
    ...repeat("Ser", veryRareMultiplier),
    ...repeat("Year", veryRareMultiplier),
    ...repeat("YearMonth", veryRareMultiplier),
    ...repeat("ZoneId", veryRareMultiplier),
    ...repeat("ZoneOffset", veryRareMultiplier),
    ...repeat("ZonedDateTime", commonMultiplier),
  ];
}
