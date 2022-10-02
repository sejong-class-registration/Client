import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import "./ClassModal.scss";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  const info = useSelector((state) => state.selectedLec.selectedLec);
  console.log(info);

  return (
    <div className="classModal">
      <div className="classModal-content"></div>
    </div>
  );
};

const ClassModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop close={props.close} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay close={props.close} />,
        document.getElementById("overlay-class")
      )}
    </>
  );
};

export default ClassModal;
