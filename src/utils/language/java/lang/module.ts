// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function module({ veryRareMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.lang.module")) return [];

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
