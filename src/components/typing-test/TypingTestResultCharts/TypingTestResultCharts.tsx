import React from "react";
import { getAllTestResults } from "../TypingTestResultModal/useSaveTestResults";
import { Language } from "../../../utils/language/utils";
import { TypingTestResultChart } from "./TypingTestResultChart";
import { TypingTestRechartData } from "./types";
import { toRechartDataList } from "./utils";

interface TypingTestResultProps {
  selectedLanguage: Language;
}

export function TypingTestResultCharts({ selectedLanguage }: TypingTestResultProps) {
  const results = getAllTestResults(selectedLanguage);
  const typingTestRechartDataList: TypingTestRechartData[] = toRechartDataList(results);

  return <TypingTestResultChart data={typingTestRechartDataList} />;
}
