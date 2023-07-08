import { Toggle } from "@/components/Toggle";
import { packageNames } from "@/utils/language/packageNames";

interface JavaSettingsProps {
  enabledPackages: Set<string>;
  onTogglePackageName: (packageName: string) => void;
}

export const JavaSettings = ({ enabledPackages, onTogglePackageName }: JavaSettingsProps) => {
  return (
    <>
      <div className="divider" />
      <h3 className="font-bold ml-2 mb-2">Enabled packages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {packageNames.map((packageName) => (
          <Toggle
            key={packageName}
            label={packageName}
            checked={enabledPackages.has(packageName)}
            onToggle={onTogglePackageName}
          />
        ))}
      </div>
    </>
  );
};
