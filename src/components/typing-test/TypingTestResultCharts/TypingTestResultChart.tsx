import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { TypingTestRechartData } from "./types";
import { Settings } from "@/types";
import { TypingTestResultChartTooltip } from "@/components/typing-test/TypingTestResultCharts/TypingTestResultChartTooltip";

interface TypingTestResultChartProps {
  data: TypingTestRechartData[];
  settingsMap: Map<number, Settings>;
}

export function TypingTestResultChart({ data, settingsMap }: TypingTestResultChartProps) {
  if (data.length === 0) return null;

  return (
    <ResponsiveContainer width="95%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" hide />
        <YAxis />
        <Tooltip
          content={(props: TooltipProps<number, string>) => (
            <TypingTestResultChartTooltip settingsMap={settingsMap} {...props} />
          )}
        />
        <Legend />
        <Line type="monotone" dataKey="cpm" stroke="#8884d8" dot={false} />
        <Line type="monotone" dataKey="wpm" stroke="#82ca9d" dot={false} />
        <Line type="monotone" dataKey="accuracy" stroke="red" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
