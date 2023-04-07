// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function fileSpi({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.nio.file.spi")) return [];

  return [
    ...repeat("FileSystemProvider", veryRareMultiplier),
    ...repeat("FileTypeDetector", veryRareMultiplier),
  ];
}
