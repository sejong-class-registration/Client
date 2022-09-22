import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <button onClick={props.close}>close</button>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop close={props.close} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title="title test"
          message="Hello World!"
          close={props.close}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
