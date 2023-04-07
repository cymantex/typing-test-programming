import React, { ReactNode } from "react";
import { useFocus } from "@/hooks/useFocus";
import classNames from "classnames";
import { KeyboardEventHandler } from "react";

export interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  modalBoxClassName?: string;
}

export function Modal({
  isOpen,
  title,
  onClose,
  children,
  onKeyDown,
  modalBoxClassName,
}: ModalProps) {
  const buttonRef = useFocus<HTMLButtonElement>(isOpen);

  return (
    <div className={classNames("modal", { "modal-open": isOpen })}>
      <div className={classNames("modal-box", modalBoxClassName)}>
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="divider" />
        {children}
        <div className="divider" />
        <div className="modal-action">
          <button
            className="btn focus:bg-primary"
            onKeyDown={onKeyDown}
            onClick={onClose}
            ref={buttonRef}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
