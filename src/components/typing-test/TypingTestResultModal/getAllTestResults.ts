import { Language, TypingTestResultMappings } from "@/types";
import { getObject } from "local-storage-superjson";

export function getAllTestResults(language: Language): TypingTestResultMappings {
  const typingTestResult = getObject<TypingTestResultMappings>("results");

  if (typingTestResult === null) return {};

  return Object.entries(typingTestResult)
    .filter(([, typingTestResult]) => typingTestResult.selectedLanguage === language)
    .reduce(
      (typingTestResults, [date, typingTestResult]) => ({
        ...typingTestResults,
        [date]: typingTestResult,
      }),
      {}
    );
}
