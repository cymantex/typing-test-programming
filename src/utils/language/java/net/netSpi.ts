// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function netSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.net.spi")) return [];

  return [
    ...repeat("InetAddressResolver", veryRareMultiplier),
    ...repeat("InetAddressResolverProvider", veryRareMultiplier),
    ...repeat("URLStreamHandlerProvider", veryRareMultiplier),
  ];
}
