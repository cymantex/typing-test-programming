// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function netSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.net.spi")) return [];

  return [
    ...repeat("InetAddressResolver", veryRareMultiplier),
    ...repeat("InetAddressResolverProvider", veryRareMultiplier),
    ...repeat("URLStreamHandlerProvider", veryRareMultiplier),
  ];
}
