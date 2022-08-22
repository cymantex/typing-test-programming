import {TypingTestInput} from "./input/TypingTestInput";
import {TypingTestDiff} from "./diff/TypingTestDiff";
import {TypingTestStats} from "./stats/TypingTestStats";
import {useTypingTestStats} from "./stats/useTypingTestStats";
import {TypingTestResultModal} from "./result/TypingTestResultModal";
import {useTypingTestStore} from "./useTypingTestStore";
import {TypingTestLanguagePicker} from "./language/TypingTestLanguagePicker";

export function TypingTest() {
  const {
    inputValue,
    modalOpen,
    expectedWords,
    selectedLanguage,
    onLanguageSelect,
    handleTimerExpire,
    handleModalClose,
    onChangeAppendChar,
    onBackspaceRemoveLastCharForCurrentWord
  } = useTypingTestStore();

  const actualWords = inputValue.split(" ");

  const {startTimer, resetTimer, cpm, wpm, accuracy, remainingSeconds} = useTypingTestStats({
    actualWords,
    expectedWords,
    testDurationSeconds: 5,
    onTimerExpire: handleTimerExpire
  });

  return (
      <div>
        <h1 className="text-xl md:text-5xl">Typing speed test - Programming</h1>
        <div className="divider"/>
        <TypingTestStats
            className="max-w-lg ml-auto mr-auto grid grid-flow-col grid-cols-4 mb-5 text-center stats"
            cpm={cpm}
            wpm={wpm}
            accuracy={accuracy}
            remainingSeconds={remainingSeconds}
        />
        <div className="relative overflow-hidden font-mono">
          <TypingTestDiff
              className="-z-10 absolute left-1/2 top-1/2 -translate-y-1/2 whitespace-pre select-none text-2xl"
              previousWordsAndCharsClassName="absolute -translate-x-full"
              remainingCharsClassName="mr-3"
              actualWords={actualWords}
              expectedWords={expectedWords}
          />
          <TypingTestInput
              typingTestInputValue={inputValue}
              className="h-24 w-full text-2xl text-center bg-transparent input input-bordered rounded-none"
              onFirstInput={startTimer}
              onKeyDown={onBackspaceRemoveLastCharForCurrentWord}
              onChangeAppendChar={onChangeAppendChar}
              onPaste={(event) => {
                // TODO: Would maybe be nice with some Toast here instead :-)
                console.info("Copy paste cheating is not allowed, sorry!");
                event.preventDefault();
              }}
              disabled={modalOpen}
          />
        </div>
        <TypingTestResultModal
            cpm={cpm}
            wpm={wpm}
            accuracy={accuracy}
            modalOpen={modalOpen}
            selectedLanguage={selectedLanguage}
            onClose={() => {
              resetTimer();
              handleModalClose();
            }}
        />
        <TypingTestLanguagePicker
            selectedLanguage={selectedLanguage}
            onLanguageSelect={onLanguageSelect}
            disabled={inputValue !== ""}
            className="mt-5 flex justify-center"
        />
      </div>
  );
}
