import { Modal } from "../../Modal";
import { TypingTestResultCharts } from "../TypingTestResultCharts/TypingTestResultCharts";
import { Language } from "../../../utils/language/utils";

interface TypingTestResultChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: Language;
}

export function TypingTestResultChartModal({
  isOpen,
  onClose,
  selectedLanguage,
}: TypingTestResultChartModalProps) {
  return (
    <Modal
      title={"Previous results: " + selectedLanguage}
      isOpen={isOpen}
      onClose={onClose}
    >
      <TypingTestResultCharts selectedLanguage={selectedLanguage} />
    </Modal>
  );
}
