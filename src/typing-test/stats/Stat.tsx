import React from "react";

export function Stat({title, value}: { title: string, value: number | string }) {
  return <div className="stat">
    <div className="stat-title">{title}</div>
    <div className="stat-value">{value}</div>
  </div>;
}
