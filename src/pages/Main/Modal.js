import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import { GoCheck } from "react-icons/go";
import { GoSync } from "react-icons/go";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { classFilterActions } from "../../redux/slice/classFilterSlice";
import { useSelector } from "react-redux";
import { isOpenModalActions } from "../../redux/slice/isOpenModalSlice";
import Autocomplete from "./Autocomplete";

//검색모달
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
  const [lectureId, setLectureId] = useState(savedFilterInfo.lectureId);
  const [grade, setGrade] = useState(savedFilterInfo.grade);

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(isOpenModalActions.changeIsOpen());
    dispatch(
      classFilterActions.changeClassFilter({
        classFilter: {
          department: department,
          name: name,
          profName: profName,
          classification: classification,
          lectureId: lectureId,
          grade: grade,
        },
      })
    );
  };

  const departmentList = [
    "전체",
    "건설환경공학과",
    "건축공학과",
    "건축학과",
    "경영학부",
    "경제학과",
    "교육학과",
    "국방시스템공학과",
    "국어국문학과",
    "국제학부",
    // "국제학부 영어영문학",
    // "국제학부 일어일문학",
    // "국제학부 중국통상학",
    "글로벌조리학과",
    "기계공학과",
    "나노신소재공학과",
    "데이터사이언스학과",
    "무용과",
    "물리천문학과",
    "미디어커뮤니케이션학과",
    "반도체시스템공학과",
    "법학부",
    "생명시스템학부",
    // "생명시스템학부 바이오산업자원공학",
    // "생명시스템학부 바이오융합공학",
    // "생명시스템학부 식품생명공학전공",
    "소프트웨어학과",
    "수학통계학과",
    "스마트생명산업융합학과",
    "양자원자력공학과",
    "역사학과",
    "영화예술학과",
    "우주항공시스템공학부",
    // "우주항공시스템공학부 우주항공공학전공",
    // "우주항공시스템공학부 항공시스템공학전공",
    "음악과",
    "인공지능학과",
    "전자정보통신공학과",
    "정보보호학과",
    "지구자원시스템공학과",
    "지능기전공학부",
    // "지능기전공학부 무인이동체공학전공",
    // "지능기전공학부 스마트기기공학전공",
    "창의소프트학부",
    // "창의소프트학부 디자인이노베이션",
    // "창의소프트학부 만화애니메이션텍",
    "체육학과",
    "컴퓨터공학과",
    "패션디자인학과",
    "항공시스템공학과",
    "행정학과",
    "호텔관광외식경영학부",
    // "호텔관광외식경영학부 외식경영",
    // "호텔관광외식경영학부 호텔관광경영",
    "호텔외식관광프랜차이즈경영학과",
    "호텔외식비즈니스학과",
    "화학과",
    "환경에너지공간융합학과",
    "회화과",
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

  const gradeList = [
    "전체",
    "1학년",
    "2학년",
    "3학년",
    "4학년",
  ]

  const initButtonHandler = () => {
    dispatch(
      classFilterActions.changeClassFilter({
        classFilter: {
          department: departmentList[0],
          name: "",
          profName: "",
          classification: classificationList[0],
          lectureId: "",
          gradeList: gradeList[0],
        },
      })
    );
    setName("");
    setdepartment(departmentList[0]);
    setprofName("");
    setclassification(classificationList[0]);
    setLectureId("");
    setGrade(gradeList[0]);
  };

  const departmentChangeHandler = (props) => {
    setdepartment(props.target.value);
    dispatch(
      classFilterActions.changeClassFilter({
        classFilter: {
          department: props.target.value,
          name: name,
          profName: profName,
          classification: classification,
          lectureId: lectureId,
          grade: grade,
        },
      })
    );
  };

  const nameChangeHandler = (props) => {
    setName(props);
    dispatch(
      classFilterActions.changeClassFilter({
        classFilter: {
          department: department,
          name: props.target.value,
          profName: profName,
          classification: classification,
          lectureId: lectureId,
          grade: grade,
        },
      })
    );
  };

  const profNameChangeHandler = (props) => {
    setprofName(props.target.value);
    dispatch(
      classFilterActions.changeClassFilter({
        classFilter: {
          department: department,
          name: name,
          profName: props.target.value,
          classification: classification,
          lectureId: lectureId,
          grade: grade,
        },
      })
    );
  };

  const classificationChangeHandler = (props) => {
    setclassification(props.target.value);
    dispatch(
      classFilterActions.changeClassFilter({
        classFilter: {
          department: department,
          name: name,
          profName: profName,
          classification: props.target.value,
          lectureId: lectureId,
          grade: grade,
        },
      })
    );
  };

  const lectureIdChangeHandler = (props) => {
    setLectureId(props.target.value);
    dispatch(
      classFilterActions.changeClassFilter({
        classFilter: {
          department: department,
          name: name,
          profName: profName,
          classification: classification,
          lectureId: props.target.value,
          grade: grade,
        },
      })
    );
  };

  const gradeChangeHandler = (props) => {
    setGrade(props.target.value);
    dispatch(
      classFilterActions.changeClassFilter({
        classFilter: {
          department: department,
          name: name,
          profName: profName,
          classification: classification,
          lectureId: lectureId,
          grade: props.target.value,
        },
      })
    );
  };

  return (
    <div className="modal">
      <div className="modal-buttons">
        <button
          className="modal-buttons-initButton"
          onClick={initButtonHandler}
        >
          <GoSync
            className="modal-buttons-initButton-img"
            alt="Init Button"
          ></GoSync>
        </button>
        <button className="modal-buttons-closeButton" onClick={props.close}>
          <GoCheck
            className="modal-buttons-closeButton-img"
            alt="Check Button"
          ></GoCheck>
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
        <Autocomplete name={name} onChange={nameChangeHandler}></Autocomplete>
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
        </div>
        <div className="modal-contents-fourth">
          <div className="modal-contents-fourth-lectureId">
            <label className="modal-contents-fourth-lectureId-label">
              학수번호
            </label>
            <input
              className="modal-contents-fourth-lectureId-input"
              onChange={lectureIdChangeHandler}
              placeholder={lectureId}
            ></input>
          </div>
          <div className="modal-contents-fourth-grade">
            <label className="modal-contents-fourth-grade-label">
              학년
            </label>
            <select
            className="modal-contents-fourth-grade-select"
            onChange={gradeChangeHandler}
          >
            {gradeList.map((gd) =>
              savedFilterInfo.grade === gd ? (
                <option value={gd} selected>
                  {gd}
                </option>
              ) : (
                <option value={gd}>{gd}</option>
              )
            )}
          </select>
          </div>
        </div>
          <button
            className="modal-contents-fifth-button"
            onClick={submitHandler}
            >
            조회
          </button>
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
