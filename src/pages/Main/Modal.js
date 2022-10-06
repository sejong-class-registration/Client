import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import xIcon from "../../common/icons/xIcon.svg";
import refreshIcon from "../../common/icons/rotate-right-solid.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { classFilterActions } from "../../redux/slice/classFilterSlice";
import { useSelector } from "react-redux";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  const savedFilterInfo = useSelector((state) => state.classFilter.classFilter);
  const [department, setdepartment] = useState(savedFilterInfo.department);
  const [name, setName] = useState(savedFilterInfo.name);
  const [profName, setprofName] = useState(savedFilterInfo.profName);
  const [classification, setclassification] = useState(
    savedFilterInfo.classification
  );

  const dispatch = useDispatch();

  const submitHandler = (props) => {
    dispatch(
      classFilterActions.changeClassFilter({
        classFilter: {
          department: department,
          name: name,
          profName: profName,
          classification: classification,
        },
      })
    );
  };

  const departmentList = [
    "전체",
    "데이터사이언스학과",
    "소프트웨어학과",
    "인공지능학과",
    "정보보호학과",
    "지능기전공학부",
    "지능기전공학부 무인이동체공학전공",
    "지능기전공학부 스마트기기공학전공",
    "창의소프트학부",
    "창의소프트학부 디자인이노베이션전공",
    "창의소프트학부 만화애니메이션텍전공",
    "컴퓨터공학과",
  ];

  const classificationList = [
    "전체",
    "교필",
    "공필",
    "교선",
    "기교",
    "전필",
    "전선",
    "교직",
  ];

  const initButtonHandler = () => {
    dispatch(
      classFilterActions.changeClassFilter({
        classFilter: {
          department: departmentList[0],
          name: "",
          profName: "",
          classification: classificationList[0],
        },
      })
    );
    setName("");
    setdepartment(departmentList[0]);
    setprofName("");
    setclassification(classificationList[0]);
  };

  const departmentChangeHandler = (props) => {
    setdepartment(props.target.value);
    // console.log(props.target.value);
  };

  const nameChangeHandler = (props) => {
    setName(props.target.value);
    // console.log(props.target.value);
  };

  const profNameChangeHandler = (props) => {
    setprofName(props.target.value);
    // console.log(props.target.value);
  };

  const classificationChangeHandler = (props) => {
    setclassification(props.target.value);
    // console.log(props.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-buttons">
        <button
          className="modal-buttons-initButton"
          onClick={initButtonHandler}
        >
          <img
            className="modal-buttons-initButton-img"
            src={refreshIcon}
            alt="Init Button"
          ></img>
        </button>
        <button className="modal-buttons-closeButton" onClick={props.close}>
          <img
            className="modal-buttons-closeButton-img"
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
            onChange={departmentChangeHandler}
          >
            {departmentList.map((dep) =>
              savedFilterInfo.department === dep ? (
                <option value={dep} selected>
                  {dep}
                </option>
              ) : (
                <option value={dep}>{dep}</option>
              )
            )}
          </select>
        </div>
        <div className="modal-contents-second">
          <label className="modal-contents-second-label">교과목명</label>
          <input
            className="modal-contents-second-input"
            onChange={nameChangeHandler}
            placeholder={name}
          ></input>
        </div>
        <div className="modal-contents-third">
          <div className="modal-contents-third-profName">
            <label className="modal-contents-third-profName-label">
              교수명
            </label>
            <input
              className="modal-contents-third-profName-input"
              onChange={profNameChangeHandler}
              placeholder={profName}
            ></input>
          </div>
          <div className="modal-contents-third-type">
            <label className="modal-contents-third-type-label">이수구분</label>
            <select
              className="modal-contents-third-type-select"
              onChange={classificationChangeHandler}
            >
              {classificationList.map((cla) =>
                savedFilterInfo.classification === cla ? (
                  <option value={cla} selected>
                    {cla}
                  </option>
                ) : (
                  <option value={cla}>{cla}</option>
                )
              )}
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
