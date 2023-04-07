import { getSettings, upsertSettings } from "@/utils/language/settings";

export const useSettings = () => {
  const settings = getSettings();

  return {
    settings,
    handleTogglePackageName: (packageName: string) => {
      const enabledPackages: Set<string> = new Set(settings.enabledPackages);

      if (settings.enabledPackages.has(packageName)) {
        enabledPackages.delete(packageName);
      } else {
        enabledPackages.add(packageName);
      }

      upsertSettings({ enabledPackages });
    },
  };
};
