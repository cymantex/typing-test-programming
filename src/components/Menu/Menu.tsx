import {Theme, useThemeToggle} from "./useThemeToggle";
import {ChartButton} from "./components/ChartButton";
import {ThemeButton} from "./components/ThemeButton";

interface MenuProps {
  onChartButtonClick: () => void;
}

export const Menu = ({onChartButtonClick}: MenuProps) => {
  const {theme, toggleTheme} = useThemeToggle();

  return (
      <div className="flex absolute bottom-5 right-5 lg:bottom-auto lg:top-5 lg:right-5 text-4xl">
        <ChartButton
            className="mr-4"
            title="Statistics"
            onClick={onChartButtonClick}
        />
        <ThemeButton
            theme={theme}
            toggleTheme={toggleTheme}
            title={theme === Theme.Dark ? "Light Mode" : "Dark Mode"}
        />
      </div>
  );
};
