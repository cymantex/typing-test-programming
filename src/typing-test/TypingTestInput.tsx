import {StyledInput} from "../styled/StyledInput";
import {InputHTMLAttributes} from "react";

interface TypingTestInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function TypingTestInput(props: TypingTestInputProps) {
  return (
      <StyledInput
          autoFocus
          {...props}
      />
  );
}
