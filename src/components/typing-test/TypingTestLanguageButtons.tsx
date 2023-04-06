import { HTMLAttributes } from "react";
import { Button } from "../Button";
import { Language, toLanguage } from "../../utils/language/utils";
import classNames from "classnames";
import { LanguageIcon } from "../LanguageIcon";

interface TypingTestLanguagePickerProps extends HTMLAttributes<HTMLElement> {
  selectedLanguage: Language;
  onLanguageSelect: (language: Language) => void;
  disabled: boolean;
}

export function TypingTestLanguageButtons({
  selectedLanguage,
  onLanguageSelect,
  disabled,
  ...props
}: TypingTestLanguagePickerProps) {
  return (
    <div {...props}>
      {Object.keys(Language).map((language) => (
        <Button
          key={language}
          title={language}
          className={classNames("text-5xl", {
            "btn-primary": language === selectedLanguage.toString(),
          })}
          disabled={disabled}
          onClick={() => onLanguageSelect(toLanguage(language))}
        >
          <LanguageIcon language={toLanguage(language)} />
        </Button>
      ))}
    </div>
  );
}
