import {Modal} from "../../components/Modal";
import {TypingTestResultCharts} from "../TypingTestResultCharts/TypingTestResultCharts";
import {Language} from "../../language/Language";

interface TypingTestResultChartModalProps {
  open: boolean;
  onClose: () => void;
  selectedLanguage: Language;
}

export function TypingTestResultChartModal({
  open,
  onClose,
  selectedLanguage
}: TypingTestResultChartModalProps) {
  return (
      <Modal title={"Previous results: " + selectedLanguage} open={open} onClose={onClose}>
        <TypingTestResultCharts selectedLanguage={selectedLanguage}/>
      </Modal>
  );
}
