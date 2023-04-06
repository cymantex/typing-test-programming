import {useEffect} from "react";
import {getObject, upsertObject} from "local-storage-superjson";
import {Language} from "../../../utils/language/utils";

export type TypingTestResult = {
  wpm: number,
  cpm: number,
  accuracy: string,
  selectedLanguage: Language
  // TODO: Add test duration
}

export type TypingTestResultMappings = {
  [date: string]: TypingTestResult
}

export function useSaveTestResults(saveResults: boolean, typingTestResult: TypingTestResult) {
  useEffect(() => {
    if (saveResults) {
      const result: TypingTestResultMappings = {[Date.now()]: typingTestResult};
      upsertObject<TypingTestResultMappings>("results", result, previousResults => ({
        ...previousResults,
        ...result
      }));
    }
  }, [saveResults]);
}

export function getAllTestResults(language: Language): TypingTestResultMappings {
  const typingTestResult = getObject<TypingTestResultMappings>("results");

  if (typingTestResult === null) return {};

  return Object
      .entries(typingTestResult)
      .filter(([, typingTestResult]) => typingTestResult.selectedLanguage === language)
      .reduce((typingTestResults, [date, typingTestResult]) => ({
        ...typingTestResults,
        [date]: typingTestResult
      }), {});
}
