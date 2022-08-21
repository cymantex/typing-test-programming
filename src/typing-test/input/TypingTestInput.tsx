import React, {
  ChangeEventHandler,
  ClipboardEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler
} from "react";
import {useFocus} from "../../utils/useFocus";

export interface TypingTestInputProps extends InputHTMLAttributes<HTMLInputElement> {
  typingTestInputValue: string,
  onPastePreventDefault: ClipboardEventHandler<HTMLInputElement>,
  onBackspaceRemoveLastCharForCurrentWord: KeyboardEventHandler<HTMLInputElement>,
  onChangeAppendChar: ChangeEventHandler<HTMLInputElement>,
  onFirstInput: () => void
}

export function TypingTestInput({
  typingTestInputValue,
  onPastePreventDefault,
  onBackspaceRemoveLastCharForCurrentWord,
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
          onPaste={onPastePreventDefault}
          onKeyDown={onBackspaceRemoveLastCharForCurrentWord}
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

