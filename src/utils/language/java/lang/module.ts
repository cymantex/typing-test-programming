// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function module({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.lang.module")) return [];

  return [
    ...repeat("Configuration", veryRareMultiplier),
    ...repeat("FindException", veryRareMultiplier),
    ...repeat("InvalidModuleDescriptorException", veryRareMultiplier),
    ...repeat("ModuleDescriptor", veryRareMultiplier),
    ...repeat("ModuleFinder", veryRareMultiplier),
    ...repeat("ModuleReader", veryRareMultiplier),
    ...repeat("ModuleReference", veryRareMultiplier),
    ...repeat("ResolutionException", veryRareMultiplier),
    ...repeat("ResolvedModule", veryRareMultiplier),
  ];
}
