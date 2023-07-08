import { Stat } from "../../Stat";
import { useSaveTestResults } from "./useSaveTestResults";
import { Modal } from "../../Modal";
import { Language, Settings } from "@/types";

export interface TypingTestResultModalProps {
  cpm?: number;
  wpm?: number;
  accuracy?: string;
  selectedLanguage: Language;
  settings: Settings;
  isOpen: boolean;
  onClose: () => void;
}

export function TypingTestResultModal({
  wpm = 0,
  cpm = 0,
  accuracy = "0%",
  selectedLanguage,
  isOpen,
  onClose,
  settings,
}: TypingTestResultModalProps) {
  useSaveTestResults(isOpen, { wpm, cpm, accuracy, selectedLanguage, settings });

  return (
    <Modal
      key={Modal.key(isOpen)}
      isOpen={isOpen}
      title={selectedLanguage}
      onKeyDown={(event) => {
        // Preventing the modal from being closed on space bar as the user will
        // be constantly pressing it while playing the game.
        if (event.key === " ") {
          event.preventDefault();
        }
      }}
      onClose={onClose}
    >
      <div className="stats ml-auto mr-auto w-full text-center">
        <Stat title="WPM" value={wpm} />
        <Stat title="CPM" value={cpm} />
        <Stat title="ACCURACY" value={accuracy} />
      </div>
    </Modal>
  );
}
