// Auto-generated file. Do not edit.
import { Settings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function nio({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages.has("java.nio")) return [];

  return [
    ...repeat("Buffer", veryRareMultiplier),
    ...repeat("BufferOverflowException", veryRareMultiplier),
    ...repeat("BufferUnderflowException", veryRareMultiplier),
    ...repeat("ByteBuffer", veryRareMultiplier),
    ...repeat("ByteOrder", veryRareMultiplier),
    ...repeat("CharBuffer", veryRareMultiplier),
    ...repeat("DoubleBuffer", veryRareMultiplier),
    ...repeat("FloatBuffer", veryRareMultiplier),
    ...repeat("IntBuffer", veryRareMultiplier),
    ...repeat("InvalidMarkException", veryRareMultiplier),
    ...repeat("LongBuffer", veryRareMultiplier),
    ...repeat("MappedByteBuffer", veryRareMultiplier),
    ...repeat("ReadOnlyBufferException", veryRareMultiplier),
    ...repeat("ShortBuffer", veryRareMultiplier),
  ];
}
