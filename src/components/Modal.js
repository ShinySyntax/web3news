import ReactDOM from "react-dom";
import React from "react";

const Modal = ({ show, setShowModal, children }) => {
  // const open = () => {
  //   setShowModal(true);
  // };
  // const close = () => {
  //   setShowModal(false);
  // };

  if (show) {
    return ReactDOM.createPortal(
      <div className="modal-backdrop backdrop-filter backdrop-blur-sm min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none">
        <div className="modal-box">{children}</div>
      </div>,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default Modal;
