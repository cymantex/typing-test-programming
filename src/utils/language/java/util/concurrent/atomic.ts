// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function atomic({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.util.concurrent.atomic")) return [];

  return [
    ...repeat("AtomicBoolean", veryRareMultiplier),
    ...repeat("AtomicInteger", veryRareMultiplier),
    ...repeat("AtomicIntegerArray", veryRareMultiplier),
    ...repeat("AtomicIntegerFieldUpdater", veryRareMultiplier),
    ...repeat("AtomicLong", veryRareMultiplier),
    ...repeat("AtomicLongArray", veryRareMultiplier),
    ...repeat("AtomicLongFieldUpdater", veryRareMultiplier),
    ...repeat("AtomicMarkableReference", veryRareMultiplier),
    ...repeat("AtomicReference", veryRareMultiplier),
    ...repeat("AtomicReferenceArray", veryRareMultiplier),
    ...repeat("AtomicReferenceFieldUpdater", veryRareMultiplier),
    ...repeat("AtomicStampedReference", veryRareMultiplier),
    ...repeat("DoubleAccumulator", veryRareMultiplier),
    ...repeat("DoubleAdder", veryRareMultiplier),
    ...repeat("LongAccumulator", veryRareMultiplier),
    ...repeat("LongAdder", veryRareMultiplier),
  ];
}
