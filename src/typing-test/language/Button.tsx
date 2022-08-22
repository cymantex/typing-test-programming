import {HTMLAttributes} from "react";
import classNames from "classnames";

export function Button({children, className, ...props}: HTMLAttributes<HTMLButtonElement>) {
  return (
      <button
          className={classNames("btn h-full mr-5 pt-3 pb-3 hover:bg-primary", className)}
          {...props}>
        {children}
      </button>
  );
}
