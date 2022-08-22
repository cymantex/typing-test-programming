import {HTMLAttributes} from "react";
import {Button} from "./Button";
import {Language, LanguageIcon, toLanguage} from "./Language";
import classNames from "classnames";

interface TypingTestLanguagePickerProps extends HTMLAttributes<HTMLElement> {
  selectedLanguage: Language,
  onLanguageSelect: (language: Language) => void,
  disabled: boolean
}

export function TypingTestLanguagePicker({
  selectedLanguage,
  onLanguageSelect,
  disabled,
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
                disabled={disabled}
                onClick={() => onLanguageSelect(toLanguage(language))}
            >
              <LanguageIcon language={toLanguage(language)}/>
            </Button>
        ))}
      </div>
  );
}
