// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

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
