// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function channelsSpi({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
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
