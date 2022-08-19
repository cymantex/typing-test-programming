import React, {ChangeEventHandler, InputHTMLAttributes, KeyboardEventHandler} from "react";
import classNames from "classnames";

export interface TypingTestInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onBackspaceRemoveLastCharForCurrentWord: KeyboardEventHandler<HTMLInputElement>,
  onChangeAppendChar: ChangeEventHandler<HTMLInputElement>
}

export function TypingTestInput({
  onBackspaceRemoveLastCharForCurrentWord,
  onChangeAppendChar,
  className,
  ...props
}: TypingTestInputProps) {
  return (
      <input
          className={classNames("input input-bordered", className)}
          type="text"
          autoFocus
          value=""
          onKeyDown={onBackspaceRemoveLastCharForCurrentWord}
          onChange={onChangeAppendChar}
          {...props}
      />
  );
}

