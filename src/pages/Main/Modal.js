import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import xIcon from "../../common/icons/xIcon.svg";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  const [major, setMajor] = useState("AI연계융합전공[3317 학부]연계전공");
  const [title, setTitle] = useState("");
  const [prof, setProf] = useState("");
  const [classType, setClassType] = useState("");

  const majorChangeHandler = (props) => {
    setMajor(props.target.value);
  };

  const titleChangeHandler = (props) => {
    setTitle(props.target.value);
  };

  const profChangeHandler = (props) => {
    setProf(props.target.value);
  };

  const classTypeChangeHandler = (props) => {
    setClassType(props.target.value);
  };

  const submitHandler = (props) => {
    console.log(major, title, prof, classType);
  };
  // const majorList = [
  //   "AI연계융합전공[3317 학부]연계전공",
  //   "AI연계융합전공 소셜미디어매니지먼트소프트웨어[3328 학부]연계전공",
  //   "AI연계융합전공 스마트투어리즘매니지멘트소프트웨어[3331 학부]연계전공",
  //   "AI연계융합전공 시스템생명공학[3324 학부]연계전공",
  //   "AI연계융합전공 에듀테크콘텐츠애널리틱스[3326 학부]연계전공",
  // ];
  // const returnMajor = (props) => {
  //   return props.map((major, index) => {
  //     <option key={index} value={major}>
  //       {major}
  //     </option>;
  //   });
  // };
  return (
    <div className="modal">
      <div className="modal-closeButton">
        <button className="modal-closeButton-button" onClick={props.close}>
          <img className="modal-closeButton-button-img" src={xIcon}></img>
        </button>
      </div>
      <div className="modal-contents">
        <div className="modal-contents-first">
          <label className="modal-contents-first-label">학과전공</label>
          <select
            className="modal-contents-first-select"
            onChange={majorChangeHandler}
          >
            <option value="AI연계융합전공[3317 학부]연계전공">
              AI연계융합전공[3317 학부]연계전공
            </option>
            <option value="test">test</option>
          </select>
        </div>
        <div className="modal-contents-second">
          <label className="modal-contents-second-label">교과목명</label>
          <input
            className="modal-contents-second-input"
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="modal-contents-third">
          <div className="modal-contents-third-prof">
            <label className="modal-contents-third-prof-label">교수명</label>
            <input
              className="modal-contents-third-prof-input"
              onChange={profChangeHandler}
            ></input>
          </div>
          <div className="modal-contents-third-type">
            <label className="modal-contents-third-type-label">이수구분</label>
            <select
              className="modal-contents-third-type-select"
              onChange={classTypeChangeHandler}
            >
              <option value="test">test</option>
              <option value="test">test</option>
            </select>
          </div>
          <button
            className="modal-contents-third-button"
            onClick={submitHandler}
          >
            조회
          </button>
        </div>
      </div>
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
        <ModalOverlay close={props.close} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
