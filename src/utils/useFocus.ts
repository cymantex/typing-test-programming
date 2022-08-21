import {RefObject, useEffect, useRef} from "react";

export function useFocus<T extends HTMLElement>(focus?: boolean): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (focus) {
      ref?.current?.focus();
    }
  }, [focus]);

  return ref;
}
