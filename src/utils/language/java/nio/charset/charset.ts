// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function charset({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.nio.charset")) return [];

  return [
    ...repeat("CharacterCodingException", veryRareMultiplier),
    ...repeat("Charset", veryRareMultiplier),
    ...repeat("CharsetDecoder", veryRareMultiplier),
    ...repeat("CharsetEncoder", veryRareMultiplier),
    ...repeat("CoderMalfunctionError", veryRareMultiplier),
    ...repeat("CoderResult", veryRareMultiplier),
    ...repeat("CodingErrorAction", veryRareMultiplier),
    ...repeat("IllegalCharsetNameException", veryRareMultiplier),
    ...repeat("MalformedInputException", veryRareMultiplier),
    ...repeat("StandardCharsets", veryRareMultiplier),
    ...repeat("UnmappableCharacterException", veryRareMultiplier),
    ...repeat("UnsupportedCharsetException", veryRareMultiplier),
  ];
}
