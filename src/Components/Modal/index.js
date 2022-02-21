import noScroll from "no-scroll";
import { useEffect, useRef } from "react";
import FocusTrap from "focus-trap-react";
export const Modal = (props) => {
  let { children, openButtonRef, close, ...rest } = props;
  if (!children) {
    children = <p>This is a example modal</p>;
  }

  let buttonRef = useRef();

  useEffect(() => {
    buttonRef ? buttonRef.current.focus() : null;
    noScroll.on();
    return () => {
      openButtonRef ? openButtonRef.current.focus() : null;
      noScroll.off();
    };
  }, []);

  return (
    <FocusTrap>
      <div id="modal-dialog" {...rest}>
        <div className="flex flex-col justify-center items-center">
          {children}
          <button ref={buttonRef} onClick={close}>
            Close this modal
          </button>
        </div>
      </div>
    </FocusTrap>
  );
};
