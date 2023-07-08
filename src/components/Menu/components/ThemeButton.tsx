import { BsMoon, BsSun } from "react-icons/all";
import { Theme } from "../useThemeToggle";
import { ButtonHTMLAttributes } from "react";

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  toggleTheme: () => void;
  theme: Theme;
}

export function ThemeButton({ toggleTheme, theme, ...props }: ThemeButtonProps) {
  return (
    <button onClick={() => toggleTheme()} {...props}>
      {theme === Theme.Dark ? <BsSun /> : <BsMoon />}
    </button>
  );
}
