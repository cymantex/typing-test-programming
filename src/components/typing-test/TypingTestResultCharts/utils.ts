import _ from "lodash";
import { TypingTestRechartData } from "./types";
import { Settings, TypingTestResultMappings } from "@/types";

export function accuracyToInteger(accuracy: string) {
  return parseInt(accuracy.replace("%", ""));
}

export function toDateTime(dateStringOrNumber: number | string) {
  const locale = "en-UK";
  const date: number =
    typeof dateStringOrNumber === "number" ? dateStringOrNumber : parseInt(dateStringOrNumber);
  return `${new Date(date).toLocaleDateString(locale)} ${new Date(date).toLocaleTimeString(
    locale
  )}`;
}

export function toRechartDataList(
  typingTestResultMappings: TypingTestResultMappings
): TypingTestRechartData[] {
  return _.entries(typingTestResultMappings).map(([date, typingTestResult]) => ({
    ..._.omit(typingTestResult, "selectedLanguage"),
    date: parseInt(date),
    accuracy: accuracyToInteger(typingTestResult.accuracy),
  }));
}

export function toSettingsMap(typingTestResults: TypingTestResultMappings): Map<number, Settings> {
  return new Map(
    Object.entries(typingTestResults).map(([date, typingTestResult]) => [
      parseInt(date, 10),
      typingTestResult.settings,
    ])
  );
}
