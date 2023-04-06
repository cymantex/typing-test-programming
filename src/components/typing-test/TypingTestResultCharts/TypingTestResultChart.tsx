import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TypingTestRechartData } from "./types";
import { toDateTime } from "./utils";

interface TypingTestResultChartProps {
  data: TypingTestRechartData[];
}

export function TypingTestResultChart({ data }: TypingTestResultChartProps) {
  if (data.length === 0) return null;

  return (
    <ResponsiveContainer width="95%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" hide />
        <YAxis />
        <Tooltip
          labelFormatter={toDateTime}
          contentStyle={{
            backgroundColor: "hsl(var(--b1))",
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="cpm" stroke="#8884d8" dot={false} />
        <Line type="monotone" dataKey="wpm" stroke="#82ca9d" dot={false} />
        <Line type="monotone" dataKey="accuracy" stroke="red" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
