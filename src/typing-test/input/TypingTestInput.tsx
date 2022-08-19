import React, {
  ChangeEventHandler,
  ClipboardEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler
} from "react";

export interface TypingTestInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onPastePreventDefault: ClipboardEventHandler<HTMLInputElement>,
  onBackspaceRemoveLastCharForCurrentWord: KeyboardEventHandler<HTMLInputElement>,
  onChangeAppendChar: ChangeEventHandler<HTMLInputElement>
}

export function TypingTestInput({
  onPastePreventDefault,
  onBackspaceRemoveLastCharForCurrentWord,
  onChangeAppendChar,
  ...props
}: TypingTestInputProps) {
  return (
      <input
          type="text"
          autoFocus
          value=""
          onPaste={onPastePreventDefault}
          onKeyDown={onBackspaceRemoveLastCharForCurrentWord}
          onChange={onChangeAppendChar}
          {...props}
      />
  );
}

