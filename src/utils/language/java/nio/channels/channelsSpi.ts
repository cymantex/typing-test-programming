// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

export function channelsSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.nio.channels.spi")) return [];

  return [
    ...repeat("AbstractInterruptibleChannel", veryRareMultiplier),
    ...repeat("AbstractSelectableChannel", veryRareMultiplier),
    ...repeat("AbstractSelectionKey", veryRareMultiplier),
    ...repeat("AbstractSelector", veryRareMultiplier),
    ...repeat("AsynchronousChannelProvider", veryRareMultiplier),
    ...repeat("SelectorProvider", veryRareMultiplier),
  ];
}
