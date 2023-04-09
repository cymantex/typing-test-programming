import React from "react";
import { Modal } from "@/components/Modal";
import { Toggle } from "@/components/Toggle";
import { packageNames } from "@/utils/language/packageNames";

interface JavaSettingsModalProps {
  seconds: number;
  onSecondsChange: (seconds: number) => void;
  enabledPackages: Set<string>;
  onTogglePackageName: (packageName: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const JavaSettingsModal = ({
  seconds,
  onSecondsChange,
  enabledPackages,
  onTogglePackageName,
  isOpen,
  onClose,
}: JavaSettingsModalProps) => {
  return (
    <Modal
      key={Modal.key(isOpen)}
      isOpen={isOpen}
      title="Settings Java"
      onClose={onClose}
      modalBoxClassName="max-w-xl"
    >
      <div className="text-left pl-2">
        <h3 className="text-left font-bold mb-2">Test duration (seconds): {seconds}</h3>
        <input
          type="range"
          min="10"
          max="600"
          step="10"
          className="range mt-2"
          value={seconds}
          onChange={(event) => {
            onSecondsChange(parseInt(event.target.value, 10));
          }}
        />
      </div>
      <div className="divider" />
      <h3 className="text-left font-bold ml-2 mb-2">Enabled packages</h3>
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
