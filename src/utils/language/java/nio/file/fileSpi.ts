// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function fileSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.nio.file.spi")) return [];

  return [
    ...repeat("FileSystemProvider", veryRareMultiplier),
    ...repeat("FileTypeDetector", veryRareMultiplier),
  ];
}
