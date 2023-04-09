import { useEffect } from "react";
import { upsertObject } from "local-storage-superjson";
import { TypingTestResult, TypingTestResultMappings } from "@/types";

export function useSaveTestResults(saveResults: boolean, typingTestResult: TypingTestResult) {
  useEffect(() => {
    if (saveResults) {
      const result: TypingTestResultMappings = {
        [Date.now()]: typingTestResult,
      };
      upsertObject<TypingTestResultMappings>("results", result, (previousResults) => ({
        ...previousResults,
        ...result,
      }));
    }
  }, [saveResults]);
}
