// Auto-generated file. Do not edit.
import { repeat } from "@/utils/utils";
import { Settings } from "@/types";

export function fileSpi({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.nio.file.spi")) return [];

  return [
    ...repeat("FileSystemProvider", veryRareMultiplier),
    ...repeat("FileTypeDetector", veryRareMultiplier),
  ];
}
