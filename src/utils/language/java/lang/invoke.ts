// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function invoke({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.lang.invoke")) return [];

  return [
    ...repeat("BootstrapCallInfo", veryRareMultiplier),
    ...repeat("CallSite", veryRareMultiplier),
    ...repeat("ConstantBootstraps", veryRareMultiplier),
    ...repeat("ConstantCallSite", veryRareMultiplier),
    ...repeat("ConstantGroup", veryRareMultiplier),
    ...repeat("InnerClassLambdaMetafactory", veryRareMultiplier),
    ...repeat("LambdaConversionException", veryRareMultiplier),
    ...repeat("LambdaForm", veryRareMultiplier),
    ...repeat("LambdaMetafactory", veryRareMultiplier),
    ...repeat("MemberName", veryRareMultiplier),
    ...repeat("MemoryAccessVarHandleByteHelper", veryRareMultiplier),
    ...repeat("MemoryAccessVarHandleCharHelper", veryRareMultiplier),
    ...repeat("MemoryAccessVarHandleDoubleHelper", veryRareMultiplier),
    ...repeat("MemoryAccessVarHandleFloatHelper", veryRareMultiplier),
    ...repeat("MemoryAccessVarHandleIntHelper", veryRareMultiplier),
    ...repeat("MemoryAccessVarHandleLongHelper", veryRareMultiplier),
    ...repeat("MemoryAccessVarHandleShortHelper", veryRareMultiplier),
    ...repeat("MethodHandle", veryRareMultiplier),
    ...repeat("MethodHandleInfo", veryRareMultiplier),
    ...repeat("MethodHandleProxies", veryRareMultiplier),
    ...repeat("MethodHandles", veryRareMultiplier),
    ...repeat("MethodType", veryRareMultiplier),
    ...repeat("MutableCallSite", veryRareMultiplier),
    ...repeat("ProxyClassesDumper", veryRareMultiplier),
    ...repeat("SerializedLambda", veryRareMultiplier),
    ...repeat("StringConcatException", veryRareMultiplier),
    ...repeat("StringConcatFactory", veryRareMultiplier),
    ...repeat("SwitchPoint", veryRareMultiplier),
    ...repeat("TypeDescriptor", veryRareMultiplier),
    ...repeat("VarHandle", veryRareMultiplier),
    ...repeat("VolatileCallSite", veryRareMultiplier),
    ...repeat("WrongMethodTypeException", veryRareMultiplier),
  ];
}
