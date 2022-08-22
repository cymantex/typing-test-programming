import React from "react";

export function Stat({title, value}: { title: string, value: number | string }) {
  return (
      <div className="stat p-1">
        <div className="stat-title text-xs sm:text-base">{title}</div>
        <div className="stat-value text-2xl sm:text-4xl">{value}</div>
      </div>
  );
}
