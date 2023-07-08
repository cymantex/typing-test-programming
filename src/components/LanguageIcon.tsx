import { ReactElement } from "react";
import { languageMap } from "@/utils/language";
import { Language } from "@/types";

export function LanguageIcon({ language }: { language: Language }): ReactElement {
  const Icon = languageMap[language].Icon;
  return <Icon />;
}
