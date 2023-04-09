// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

export function netSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.net.spi")) return [];

  return [
    ...repeat("InetAddressResolver", veryRareMultiplier),
    ...repeat("InetAddressResolverProvider", veryRareMultiplier),
    ...repeat("URLStreamHandlerProvider", veryRareMultiplier),
  ];
}
