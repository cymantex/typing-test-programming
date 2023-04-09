import React from "react";
import { TypingTestInput } from "./components/typing-test/TypingTestInput";
import { TypingTestChars } from "./components/typing-test/TypingTestChars/TypingTestChars";
import { TypingTestStats } from "./components/typing-test/TypingTestStats/TypingTestStats";
import { useTypingTestStats } from "./components/typing-test/TypingTestStats/useTypingTestStats";
import { TypingTestResultModal } from "./components/typing-test/TypingTestResultModal/TypingTestResultModal";
import { useTypingTestStore } from "./hooks/useTypingTestStore";
import { TypingTestLanguageButtons } from "./components/typing-test/TypingTestLanguageButtons";
import { Menu } from "./components/Menu/Menu";
import { TypingTestResultChartModal } from "./components/typing-test/TypingTestResultChartModal/TypingTestResultChartModal";
import { useModal } from "@/hooks/useModal";
import { JavaSettingsModal } from "@/components/JavaSettingsModal/JavaSettingsModal";
import { useSettings } from "@/hooks/useSettings";
import { upsertSettings } from "@/utils/language/settings";

export function App() {
  const {
    inputValue,
    resultModalOpen,
    expectedWords,
    selectedLanguage,
    onLanguageSelect,
    handleTimerExpire,
    handleResultModalClose,
    onChangeAppendChar,
    onBackspaceRemoveLastCharForCurrentWord,
  } = useTypingTestStore();

  const { settings, handleTogglePackageName } = useSettings();

  const actualWords = inputValue.split(" ");

  const { startTimer, resetTimer, cpm, wpm, accuracy, remainingSeconds } = useTypingTestStats({
    actualWords,
    expectedWords,
    testDurationSeconds: settings.testDurationSeconds,
    onTimerExpire: handleTimerExpire,
  });

  const typingTestResultModal = useModal();
  const javaSettingsModal = useModal();

  return (
    <div>
      <h1 className="text-xl md:text-5xl">Typing speed test - Programming</h1>
      <div className="divider" />
      <TypingTestStats
        className="max-w-lg ml-auto mr-auto grid grid-flow-col grid-cols-4 mb-5 text-center stats"
        cpm={cpm}
        wpm={wpm}
        accuracy={accuracy}
        remainingSeconds={remainingSeconds}
      />
      <div className="relative overflow-hidden font-mono">
        <TypingTestChars
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
          onChange={onChangeAppendChar}
          onPaste={(event) => {
            // TODO: Would maybe be nice with some Toast here instead :-)
            console.log("Copy paste cheating is not allowed, sorry!");
            event.preventDefault();
          }}
          disabled={resultModalOpen}
        />
      </div>
      <TypingTestLanguageButtons
        selectedLanguage={selectedLanguage}
        onLanguageSelect={onLanguageSelect}
        disabled={inputValue !== ""}
        className="mt-5 flex justify-center"
      />
      <Menu
        onChartClick={typingTestResultModal.open}
        onSettingsClick={() => {
          if (selectedLanguage === "Java") {
            javaSettingsModal.open();
          }
        }}
      />
      <TypingTestResultChartModal
        isOpen={typingTestResultModal.isOpen}
        selectedLanguage={selectedLanguage}
        onClose={typingTestResultModal.close}
      />
      <TypingTestResultModal
        cpm={cpm}
        wpm={wpm}
        accuracy={accuracy}
        isOpen={resultModalOpen}
        selectedLanguage={selectedLanguage}
        onClose={() => {
          resetTimer();
          handleResultModalClose();
        }}
      />
      <JavaSettingsModal
        seconds={settings.testDurationSeconds}
        onSecondsChange={(seconds) => {
          upsertSettings({ testDurationSeconds: seconds });
          console.log({ seconds });
          resetTimer(seconds);
        }}
        enabledPackages={settings.enabledPackages}
        onTogglePackageName={(packageName) => {
          handleTogglePackageName(packageName);
          onLanguageSelect(selectedLanguage);
        }}
        isOpen={javaSettingsModal.isOpen}
        onClose={javaSettingsModal.close}
      />
    </div>
  );
}
