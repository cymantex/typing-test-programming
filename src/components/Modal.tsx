import {useFocus} from "../hooks/useFocus";
import classNames from "classnames";
import {KeyboardEventHandler, ReactElement} from "react";

export interface ModalProps {
  isOpen: boolean;
  title: string;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  onClose: () => void;
  children: ReactElement
}

export function Modal({isOpen, title, onClose, children, onKeyDown}: ModalProps) {
  const buttonRef = useFocus<HTMLButtonElement>(isOpen);

  return <div className={classNames("modal", {"modal-open": isOpen})}>
    <div className="modal-box">
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="divider"/>
      {children}
      <div className="divider"/>
      <div className="modal-action">
        <button
            className="btn focus:bg-primary"
            onKeyDown={onKeyDown}
            onClick={onClose}
            ref={buttonRef}
        >Close
        </button>
      </div>
    </div>
  </div>;
}
