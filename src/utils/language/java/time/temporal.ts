// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

export function temporal({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.time.temporal")) return [];

  return [
    ...repeat("ChronoField", veryRareMultiplier),
    ...repeat("ChronoUnit", veryRareMultiplier),
    ...repeat("IsoFields", veryRareMultiplier),
    ...repeat("JulianFields", veryRareMultiplier),
    ...repeat("Temporal", veryRareMultiplier),
    ...repeat("TemporalAccessor", veryRareMultiplier),
    ...repeat("TemporalAdjuster", veryRareMultiplier),
    ...repeat("TemporalAdjusters", veryRareMultiplier),
    ...repeat("TemporalAmount", veryRareMultiplier),
    ...repeat("TemporalField", veryRareMultiplier),
    ...repeat("TemporalQueries", veryRareMultiplier),
    ...repeat("TemporalQuery", veryRareMultiplier),
    ...repeat("TemporalUnit", veryRareMultiplier),
    ...repeat("UnsupportedTemporalTypeException", veryRareMultiplier),
    ...repeat("ValueRange", veryRareMultiplier),
    ...repeat("WeekFields", veryRareMultiplier),
  ];
}
