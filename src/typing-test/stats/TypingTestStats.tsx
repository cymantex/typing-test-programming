import React from "react";

interface TypingTestStatsProps {
  remainingSeconds?: number,
  cpm?: number,
  wpm?: number
}

export function TypingTestStats({remainingSeconds = 60, cpm = 0, wpm = 0}: TypingTestStatsProps) {
  return (
      <div className="grid grid-flow-col justify-center gap-5 mb-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={setValue(remainingSeconds)}></span>
          </span>
          sec
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={setValue(cpm)}></span>
          </span>
          CPM
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={setValue(wpm)}></span>
          </span>
          WPM
        </div>
      </div>
  );
}

function setValue(value: number) {
  return {"--value": value} as React.CSSProperties;
}
