import {useEffect} from "react";
import {upsertObject} from "local-storage-superjson";


type TypingTestStats = {
  wpm: number,
  cpm: number,
  accuracy: string
}

type TypingTestResult = {
  [date: string]: TypingTestStats
}

export function useSaveTestResultsToLocalStorage(saveResults: boolean, results: TypingTestStats) {
  useEffect(() => {
    if (saveResults) {
      const result: TypingTestResult = {[Date.now()]: results};
      upsertObject<TypingTestResult>("results", result, previousResults => ({
        ...previousResults,
        ...result
      }));
    }
  }, [saveResults]);
}
