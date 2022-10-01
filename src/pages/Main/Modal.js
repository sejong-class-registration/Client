import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import xIcon from "../../common/icons/xIcon.svg";
import { useState } from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  const [major, setMajor] = useState("데이터사이언스학과");
  const [title, setTitle] = useState("");
  const [prof, setProf] = useState("");
  const [classType, setClassType] = useState("");

  const [conditionOfLecture, setConditionOfLecture] = useState({
    department: major,
    name: title,
    profName: prof,
    classification: classType,
  });

  const majorChangeHandler = (props) => {
    setMajor(props.target.value);
    // console.log(props.target.value);
  };

  const titleChangeHandler = (props) => {
    setTitle(props.target.value);
    // console.log(props.target.value);
  };

  const profChangeHandler = (props) => {
    setProf(props.target.value);
    // console.log(props.target.value);
  };

  const classTypeChangeHandler = (props) => {
    setClassType(props.target.value);
    // console.log(props.target.value);
  };

  const submitHandler = (props) => {
    setConditionOfLecture({
      department: major,
      name: title,
      profName: prof,
      classification: classType,
    });
  };
  return (
    <div className="modal">
      <div className="modal-closeButton">
        <button className="modal-closeButton-button" onClick={props.close}>
          <img
            className="modal-closeButton-button-img"
            src={xIcon}
            alt="Close Button"
          ></img>
        </button>
      </div>
      <div className="modal-contents">
        <div className="modal-contents-first">
          <label className="modal-contents-first-label">학과전공</label>
          <select
            className="modal-contents-first-select"
            onChange={majorChangeHandler}
          >
            <option value="데이터사이언스학과">데이터사이언스학과</option>
            <option value="소프트웨어학과">소프트웨어학과</option>
            <option value="인공지능학과">인공지능학과</option>
            <option value="정보보호학과">정보보호학과</option>
            <option value="지능기전공학부">지능기전공학부</option>
            <option value="지능기전공학부 무인이동체공학전공">
              지능기전공학부 무인이동체공학전공
            </option>
            <option value="지능기전공학부 스마트기기공학전공">
              지능기전공학부 스마트기기공학전공
            </option>
            <option value="창의소프트학부">창의소프트학부</option>
            <option value="창의소프트학부 디자인이노베이션전공">
              창의소프트학부 디자인이노베이션전공
            </option>
            <option value="창의소프트학부 만화애니메이션텍전공">
              창의소프트학부 만화애니메이션텍전공
            </option>
            <option value="컴퓨터공학과">컴퓨터공학과</option>
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
              <option value=""> - 전체 - </option>
              <option value="교필">교필</option>
              <option value="공필">공필</option>
              <option value="교선">교선</option>
              <option value="기교">기교</option>
              <option value="전필">전필</option>
              <option value="전선">전선</option>
              <option value="교직">교직</option>
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
