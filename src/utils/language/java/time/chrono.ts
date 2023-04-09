// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

export function chrono({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.time.chrono")) return [];

  return [
    ...repeat("AbstractChronology", veryRareMultiplier),
    ...repeat("ChronoLocalDate", veryRareMultiplier),
    ...repeat("ChronoLocalDateTime", veryRareMultiplier),
    ...repeat("ChronoLocalDateTimeImpl", veryRareMultiplier),
    ...repeat("ChronoPeriod", veryRareMultiplier),
    ...repeat("ChronoZonedDateTime", veryRareMultiplier),
    ...repeat("Chronology", veryRareMultiplier),
    ...repeat("Era", veryRareMultiplier),
    ...repeat("HijrahChronology", veryRareMultiplier),
    ...repeat("HijrahDate", veryRareMultiplier),
    ...repeat("HijrahEra", veryRareMultiplier),
    ...repeat("IsoChronology", veryRareMultiplier),
    ...repeat("IsoEra", veryRareMultiplier),
    ...repeat("JapaneseChronology", veryRareMultiplier),
    ...repeat("JapaneseDate", veryRareMultiplier),
    ...repeat("JapaneseEra", veryRareMultiplier),
    ...repeat("MinguoChronology", veryRareMultiplier),
    ...repeat("MinguoDate", veryRareMultiplier),
    ...repeat("MinguoEra", veryRareMultiplier),
    ...repeat("Ser", veryRareMultiplier),
    ...repeat("ThaiBuddhistChronology", veryRareMultiplier),
    ...repeat("ThaiBuddhistDate", veryRareMultiplier),
    ...repeat("ThaiBuddhistEra", veryRareMultiplier),
  ];
}
