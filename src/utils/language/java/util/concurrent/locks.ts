// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function locks({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.util.concurrent.locks")) return [];

  return [
    ...repeat("AbstractOwnableSynchronizer", veryRareMultiplier),
    ...repeat("AbstractQueuedLongSynchronizer", veryRareMultiplier),
    ...repeat("AbstractQueuedSynchronizer", veryRareMultiplier),
    ...repeat("Condition", veryRareMultiplier),
    ...repeat("Lock", veryRareMultiplier),
    ...repeat("LockSupport", veryRareMultiplier),
    ...repeat("ReadWriteLock", veryRareMultiplier),
    ...repeat("ReentrantLock", veryRareMultiplier),
    ...repeat("ReentrantReadWriteLock", veryRareMultiplier),
    ...repeat("StampedLock", veryRareMultiplier),
  ];
}
