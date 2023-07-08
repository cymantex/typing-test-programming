import { HTMLAttributes } from "react";
import { Button } from "../Button";
import classNames from "classnames";
import { LanguageIcon } from "../LanguageIcon";
import { Language, Languages } from "@/types";

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
      {Languages.map((language) => (
        <Button
          key={language}
          title={language}
          className={classNames("text-5xl", {
            "btn-primary": language === selectedLanguage.toString(),
          })}
          disabled={disabled}
          onClick={() => onLanguageSelect(language)}
        >
          <LanguageIcon language={language} />
        </Button>
      ))}
    </div>
  );
}
