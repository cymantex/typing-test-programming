import classNames from "classnames";
import {useFocus} from "../../utils/useFocus";
import {Stat} from "../stats/Stat";
import {useSaveTestResultsToLocalStorage} from "./useSaveTestResultsToLocalStorage";

export interface TypingTestResultModalProps {
  cpm?: number,
  wpm?: number,
  modalOpen: boolean,
  onClose: () => void
}

export function TypingTestResultModal({
  wpm = 0,
  cpm = 0,
  modalOpen,
  onClose
}: TypingTestResultModalProps) {
  const buttonRef = useFocus<HTMLButtonElement>(modalOpen);

  // TODO: accuracy
  useSaveTestResultsToLocalStorage(modalOpen, {wpm, cpm, accuracy: ""});

  return (
      <div className={classNames("modal", {"modal-open": modalOpen})}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Results</h3>
          <div className="divider"/>
          <div className="stats">
            <Stat title="WPM" value={wpm}/>
            <Stat title="CPM" value={cpm}/>
          </div>
          <div className="divider"/>
          <div className="modal-action">
            <button
                className="btn focus:bg-primary"
                onKeyDown={event => {
                  // Preventing the modal from being closed on space bar as the user will
                  // be constantly pressing it while playing the game.
                  if (event.key === " ") {
                    event.preventDefault();
                  }
                }}
                onClick={onClose}
                ref={buttonRef}
            >Close
            </button>
          </div>
        </div>
      </div>
  );
}
