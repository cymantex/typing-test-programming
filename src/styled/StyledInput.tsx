import {InputHTMLAttributes} from "react";
import classNames from "classnames";

export function StyledInput({className, ...props}: InputHTMLAttributes<HTMLInputElement>) {
  return <input
      className={classNames(className, "input", "input-bordered")}
      type="text"
      {...props}
  />;
}
