import React from "react";
import classNames from "classnames";

interface ToggleProps {
  label: string;
  checked: boolean;
  onToggle: (label: string) => void;
}

export function Toggle({ label, checked, onToggle }: ToggleProps) {
  return (
    <div className="form-control pr-2 pl-2">
      <label className="cursor-pointer label">
        <span className="label-text">{label}</span>
        <input
          readOnly
          type="checkbox"
          className={classNames("toggle", { "toggle-success": checked })}
          onClick={() => onToggle(label)}
          checked={checked}
        />
      </label>
    </div>
  );
}
