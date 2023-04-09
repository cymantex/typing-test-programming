// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function annotation({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.lang.annotation")) return [];

  return [
    ...repeat("Annotation", veryRareMultiplier),
    ...repeat("AnnotationFormatError", veryRareMultiplier),
    ...repeat("AnnotationTypeMismatchException", veryRareMultiplier),
    ...repeat("Documented", veryRareMultiplier),
    ...repeat("ElementType", veryRareMultiplier),
    ...repeat("IncompleteAnnotationException", veryRareMultiplier),
    ...repeat("Inherited", veryRareMultiplier),
    ...repeat("Native", veryRareMultiplier),
    ...repeat("Repeatable", veryRareMultiplier),
    ...repeat("Retention", veryRareMultiplier),
    ...repeat("RetentionPolicy", veryRareMultiplier),
    ...repeat("Target", veryRareMultiplier),
  ];
}
