import { useEffect, useState } from "react";
import { getObject, setObject } from "local-storage-superjson";

interface ThemeToggleEvent {
  theme: Theme;
  toggleTheme: () => void;
}

export enum Theme {
  Dark = "Dark",
  Light = "Light",
}

export function useThemeToggle(defaultTheme = Theme.Dark): ThemeToggleEvent {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const savedTheme: Theme | null = getObject<Theme>("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme: () => {
      const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
      setDataThemeOnHtmlElement(newTheme);
      setObject<Theme>("theme", newTheme);
      setTheme(newTheme);
    },
  };
}

function getDaisyUIThemeName(theme: Theme) {
  return theme === Theme.Light ? "autumn" : "business";
}

export function setDataThemeOnHtmlElement(theme: Theme | null) {
  if (!theme) return;

  document
    .getElementsByTagName("html")[0]
    ?.setAttribute("data-theme", getDaisyUIThemeName(theme));
}
