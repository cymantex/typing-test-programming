import { useTypingTestStore } from "@/hooks/useTypingTestStore";
import { defaultLanguageSettings } from "@/utils/language/settings";
import { toDateTime } from "@/components/typing-test/TypingTestResultCharts/utils";

import { TooltipProps } from "recharts";
import { Settings } from "@/types";

interface TypingTestResultChartTooltipProps extends TooltipProps<number, string> {
  settingsMap: Map<number, Settings>;
}

export const TypingTestResultChartTooltip = ({
  payload,
  label,
  settingsMap,
}: TypingTestResultChartTooltipProps) => {
  const selectedLanguage = useTypingTestStore((state) => state.selectedLanguage);
  const settings = settingsMap.get(label) || defaultLanguageSettings[selectedLanguage];

  if (payload && payload.length) {
    return (
      <div className="bg-base-100/80 p-3 border-b-white border">
        <p className="mb-2">{toDateTime(label)}</p>
        {payload.map((tooltip) => (
          <p style={{ color: tooltip.stroke }} key={tooltip.dataKey}>
            {tooltip.name}: {tooltip.value}
          </p>
        ))}
        <p className="mt-2">Test duration (seconds): {settings.testDurationSeconds}</p>
      </div>
    );
  }

  return null;
};
