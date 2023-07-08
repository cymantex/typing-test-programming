import { BsFillBarChartFill } from "react-icons/all";
import { ButtonHTMLAttributes } from "react";

export function ChartButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}>
      <BsFillBarChartFill />
    </button>
  );
}
