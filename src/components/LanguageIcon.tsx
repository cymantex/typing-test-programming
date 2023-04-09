import React, { ReactElement } from "react";
import { Language, languageMap } from "@/utils/language";

export function LanguageIcon({ language }: { language: Language }): ReactElement {
  const Icon = languageMap[language].Icon;
  return <Icon />;
}
