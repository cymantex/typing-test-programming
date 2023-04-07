import React from "react";
import { Modal } from "@/components/Modal";
import { Toggle } from "@/components/Toggle";
import { packageNames } from "@/utils/language/packageNames";

interface JavaSettingsModalProps {
  enabledPackages: Set<string>;
  onTogglePackageName: (packageName: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const JavaSettingsModal = ({
  enabledPackages,
  onTogglePackageName,
  isOpen,
  onClose,
}: JavaSettingsModalProps) => {
  return (
    <Modal isOpen={isOpen} title="Settings Java" onClose={onClose} modalBoxClassName="max-w-xl">
      <h3 className="text-left font-bold pl-2 pb-2">Enabled packages</h3>
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
    </Modal>
  );
};
