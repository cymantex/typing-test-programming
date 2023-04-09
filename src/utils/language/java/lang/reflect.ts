// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function reflect({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.lang.reflect")) return [];

  return [
    ...repeat("AccessibleObject", veryRareMultiplier),
    ...repeat("AnnotatedArrayType", veryRareMultiplier),
    ...repeat("AnnotatedElement", veryRareMultiplier),
    ...repeat("AnnotatedParameterizedType", veryRareMultiplier),
    ...repeat("AnnotatedType", veryRareMultiplier),
    ...repeat("AnnotatedTypeVariable", veryRareMultiplier),
    ...repeat("AnnotatedWildcardType", veryRareMultiplier),
    ...repeat("Array", veryRareMultiplier),
    ...repeat("Constructor", veryRareMultiplier),
    ...repeat("Executable", veryRareMultiplier),
    ...repeat("Field", veryRareMultiplier),
    ...repeat("GenericArrayType", veryRareMultiplier),
    ...repeat("GenericDeclaration", veryRareMultiplier),
    ...repeat("GenericSignatureFormatError", veryRareMultiplier),
    ...repeat("InaccessibleObjectException", veryRareMultiplier),
    ...repeat("InvocationHandler", veryRareMultiplier),
    ...repeat("InvocationTargetException", veryRareMultiplier),
    ...repeat("MalformedParameterizedTypeException", veryRareMultiplier),
    ...repeat("MalformedParametersException", veryRareMultiplier),
    ...repeat("Member", veryRareMultiplier),
    ...repeat("Method", veryRareMultiplier),
    ...repeat("Modifier", veryRareMultiplier),
    ...repeat("Parameter", veryRareMultiplier),
    ...repeat("ParameterizedType", veryRareMultiplier),
    ...repeat("Proxy", veryRareMultiplier),
    ...repeat("RecordComponent", veryRareMultiplier),
    ...repeat("ReflectPermission", veryRareMultiplier),
    ...repeat("Type", veryRareMultiplier),
    ...repeat("TypeVariable", veryRareMultiplier),
    ...repeat("UndeclaredThrowableException", veryRareMultiplier),
    ...repeat("WildcardType", veryRareMultiplier),
  ];
}
