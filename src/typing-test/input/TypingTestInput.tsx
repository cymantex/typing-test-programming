import React, {ChangeEventHandler, InputHTMLAttributes} from "react";
import {useFocus} from "../../utils/useFocus";

export interface TypingTestInputProps extends InputHTMLAttributes<HTMLInputElement> {
  typingTestInputValue: string,
  onChangeAppendChar: ChangeEventHandler<HTMLInputElement>,
  onFirstInput: () => void
}

export function TypingTestInput({
  typingTestInputValue,
  onChangeAppendChar,
  onFirstInput,
  disabled,
  ...props
}: TypingTestInputProps) {
  const inputRef = useFocus<HTMLInputElement>(!disabled);

  return (
      <input
          type="text"
          value=""
          disabled={disabled}
          onChange={(event) => {
            if (typingTestInputValue === "") {
              onFirstInput();
            }

            onChangeAppendChar(event);
          }}
          ref={inputRef}
          {...props}
      />
  );
}

