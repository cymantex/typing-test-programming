import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { useFocus } from "../../hooks/useFocus";

export interface TypingTestInputProps extends InputHTMLAttributes<HTMLInputElement> {
  typingTestInputValue: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFirstInput: () => void;
}

/**
 * Is only used to display a caret and notify what the user is typing.
 */
export function TypingTestInput({
  typingTestInputValue,
  onChange,
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

        onChange(event);
      }}
      ref={inputRef}
      {...props}
    />
  );
}
