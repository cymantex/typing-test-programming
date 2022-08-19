import React, {HTMLAttributes} from "react";
import {Stat} from "./Stat";

export interface TypingTestStatsProps extends HTMLAttributes<HTMLElement> {
  remainingSeconds?: number,
  cpm?: number,
  wpm?: number
}

export function TypingTestStats({remainingSeconds = 60, cpm = 0, wpm = 0, ...props}: TypingTestStatsProps) {
  return (
      <div {...props}>
        <Stat title="SECONDS" value={remainingSeconds}/>
        <Stat title="CPM" value={cpm}/>
        <Stat title="WPM" value={wpm}/>
      </div>
  );
}

