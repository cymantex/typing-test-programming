import {HTMLAttributes} from "react";
import {Button} from "./Button";
import {Language, LanguageIcon, toLanguage} from "./Language";
import classNames from "classnames";

interface TypingTestLanguagePickerProps extends HTMLAttributes<HTMLElement> {
  selectedLanguage: Language,
  onLanguageSelect: (language: Language) => void
}

export function TypingTestLanguagePicker({
  selectedLanguage,
  onLanguageSelect,
  ...props
}: TypingTestLanguagePickerProps) {
  return (
      <div {...props}>
        {Object.keys(Language).map((language, i) => (
            <Button
                key={i}
                title={language}
                className={classNames("text-5xl", {
                  "btn-primary": language === selectedLanguage.toString()
                })}
                onClick={() => onLanguageSelect(toLanguage(language))}
            >
              <LanguageIcon language={toLanguage(language)}/>
            </Button>
        ))}
      </div>
  );
}
