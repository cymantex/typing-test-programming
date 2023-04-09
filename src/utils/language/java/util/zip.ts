// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function zip({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.util.zip")) return [];

  return [
    ...repeat("Adler32", veryRareMultiplier),
    ...repeat("CRC32", veryRareMultiplier),
    ...repeat("CRC32C", veryRareMultiplier),
    ...repeat("CheckedInputStream", veryRareMultiplier),
    ...repeat("CheckedOutputStream", veryRareMultiplier),
    ...repeat("Checksum", veryRareMultiplier),
    ...repeat("DataFormatException", veryRareMultiplier),
    ...repeat("Deflater", veryRareMultiplier),
    ...repeat("DeflaterInputStream", veryRareMultiplier),
    ...repeat("DeflaterOutputStream", veryRareMultiplier),
    ...repeat("GZIPInputStream", veryRareMultiplier),
    ...repeat("GZIPOutputStream", veryRareMultiplier),
    ...repeat("Inflater", veryRareMultiplier),
    ...repeat("InflaterInputStream", veryRareMultiplier),
    ...repeat("InflaterOutputStream", veryRareMultiplier),
    ...repeat("ZipCoder", veryRareMultiplier),
    ...repeat("ZipEntry", veryRareMultiplier),
    ...repeat("ZipError", veryRareMultiplier),
    ...repeat("ZipException", veryRareMultiplier),
    ...repeat("ZipFile", veryRareMultiplier),
    ...repeat("ZipInputStream", veryRareMultiplier),
    ...repeat("ZipOutputStream", veryRareMultiplier),
  ];
}
