import { TypingTestResultChart } from "./TypingTestResultChart";
import { TypingTestRechartData } from "./types";
import { toRechartDataList, toSettingsMap } from "./utils";
import { getAllTestResults } from "@/components/typing-test/TypingTestResultModal/getAllTestResults";
import { Language } from "@/types";

interface TypingTestResultProps {
  selectedLanguage: Language;
}

export function TypingTestResultCharts({ selectedLanguage }: TypingTestResultProps) {
  const results = getAllTestResults(selectedLanguage);
  const typingTestRechartDataList: TypingTestRechartData[] = toRechartDataList(results);

  return (
    <TypingTestResultChart data={typingTestRechartDataList} settingsMap={toSettingsMap(results)} />
  );
}
