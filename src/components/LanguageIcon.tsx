import React, { ReactElement } from "react";
import { languageMap, toLanguage } from "../utils/language/utils";

export function LanguageIcon({ language }: { language: string }): ReactElement {
  const Icon = languageMap[toLanguage(language)].Icon;
  return <Icon />;
}
