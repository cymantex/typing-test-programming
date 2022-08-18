import {TypingTestInput} from "./TypingTestInput";
import {TypingTestFeedback} from "./TypingTestFeedback";

export function TypingTest() {
  return (
      <div>
        <h1 className="text-3xl lg:text-4xl">Typing speed test - Programming edition</h1>
        <div className="divider"></div>
        <TypingTestFeedback/>
        <TypingTestInput
            className="w-full max-w-3xl"
        />
      </div>
  );
}
