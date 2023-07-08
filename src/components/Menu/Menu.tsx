import { Theme, useThemeToggle } from "./useThemeToggle";
import { ChartButton } from "./components/ChartButton";
import { ThemeButton } from "./components/ThemeButton";
import { BsSliders } from "react-icons/all";

interface MenuProps {
  onChartClick: () => void;
  onSettingsClick: () => void;
}

export const Menu = ({ onChartClick, onSettingsClick }: MenuProps) => {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <div className="flex absolute bottom-5 right-5 lg:bottom-auto lg:top-5 lg:right-5 text-4xl">
      <button className="mr-4" title="Settings" onClick={onSettingsClick}>
        <BsSliders />
      </button>
      <ChartButton className="mr-4" title="Statistics" onClick={onChartClick} />
      <ThemeButton
        theme={theme}
        toggleTheme={toggleTheme}
        title={theme === Theme.Dark ? "Light Mode" : "Dark Mode"}
      />
    </div>
  );
};
