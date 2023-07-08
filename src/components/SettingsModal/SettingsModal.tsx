import { Modal } from "@/components/Modal";
import { Language } from "@/types";
import { JavaSettings } from "@/components/SettingsModal/JavaSettings";

interface SettingsModalProps {
  selectedLanguage: Language;
  seconds: number;
  onSecondsChange: (seconds: number) => void;
  enabledPackages?: Set<string>;
  onTogglePackageName: (packageName: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal = ({
  selectedLanguage,
  seconds,
  onSecondsChange,
  enabledPackages,
  onTogglePackageName,
  isOpen,
  onClose,
}: SettingsModalProps) => {
  return (
    <Modal
      key={Modal.key(isOpen)}
      isOpen={isOpen}
      title={`Settings ${selectedLanguage}`}
      onClose={onClose}
      modalBoxClassName="max-w-xl"
    >
      <div className="pl-2">
        <h3 className="font-bold mb-2">Test duration (seconds): {seconds}</h3>
        <input
          type="range"
          min="10"
          max="600"
          step="10"
          className="range mt-2"
          value={seconds}
          onChange={(event) => onSecondsChange(parseInt(event.target.value, 10))}
        />
      </div>
      {selectedLanguage === "Java" && (
        <JavaSettings
          enabledPackages={enabledPackages || new Set()}
          onTogglePackageName={onTogglePackageName}
        />
      )}
    </Modal>
  );
};
