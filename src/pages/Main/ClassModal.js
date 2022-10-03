import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import "./ClassModal.scss";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  const info = useSelector((state) => state.selectedLec.selectedLec);
  // console.log(info);

  return (
    <div className="classModal">
      <div className="classModal-contents">
        <div className="classModal-contents-name">{info.name}</div>
        <div className="classModal-contents-content">
          <label htmlFor="department">학과</label>
          <div>{info.department}</div>
        </div>
        <div className="classModal-contents-content">
          <label htmlFor="dayAndTime">강의시간</label>
          <div>{info.dayAndTime}</div>
        </div>
        <div className="classModal-contents-content">
          <label htmlFor="classification">구분</label>
          <div>{info.classification}</div>
        </div>
        <div className="classModal-contents-content">
          <label htmlFor="credit">학점</label>
          <div>{info.credit}</div>
        </div>
        <div className="classModal-contents-content">
          <label htmlFor="lectureGrade">대상</label>
          <div>{info.lectureGrade+"학년"}</div>
        </div>
        <div className="classModal-contents-content">
          <label htmlFor="lectureId">학수번호</label>
          <div>{info.lectureId}</div>
        </div>
        <div className="classModal-contents-content">
          <label htmlFor="distrib">분반</label>
          <div>{info.distrib}</div>
        </div>
        <div className="classModal-contents-content">
          <label htmlFor="profName">교수명</label>
          <div>{info.profName}</div>
        </div>
        <div className="classModal-contents-content">
          <label htmlFor="room">강의실</label>
          <div>{info.room}</div>
        </div>
      </div>
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
