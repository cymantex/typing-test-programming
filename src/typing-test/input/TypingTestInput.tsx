import React, {
  ChangeEventHandler,
  ClipboardEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler
} from "react";

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
  ...props
}: TypingTestInputProps) {
  return (
      <input
          type="text"
          autoFocus
          value=""
          onPaste={onPastePreventDefault}
          onKeyDown={onBackspaceRemoveLastCharForCurrentWord}
          onChange={(event) => {
            if (typingTestInputValue === "") {
              onFirstInput();
            }

            onChangeAppendChar(event);
          }}
          {...props}
      />
  );
}

