import { getSettings, upsertSettings } from "@/utils/language/settings";
import { Language } from "@/types";

export const applySettings = (selectedLanguage: Language) => {
  const settings = getSettings(selectedLanguage);

  return {
    settings,
    handleTogglePackageName: (packageName: string) => {
      if (!settings.enabledPackages) return;

      const enabledPackages: Set<string> = new Set(settings.enabledPackages);

      if (settings.enabledPackages.has(packageName)) {
        enabledPackages.delete(packageName);
      } else {
        enabledPackages.add(packageName);
      }

      upsertSettings(selectedLanguage, { enabledPackages });
    },
  };
};
