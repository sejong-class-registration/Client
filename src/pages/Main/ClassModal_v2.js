import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { isFetchingActions } from "../../redux/slice/isFetchingSlice";

import "./ClassModal_v2.scss";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  const info = useSelector((state) => state.selectedLec.selectedLec);
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const selectedScheduleId = useSelector(
    (state) => state.scheduleNum.scheduleNum
  );
  const dispatch = useDispatch();
  const close = props.close;

  const delLectureToSchedule = async () => {
    dispatch(isFetchingActions.changeIsFetching());
    try {
      const response = await axios.delete(
        `https://sejong-enrollment.herokuapp.com/schedules/${info.id}?userId=${userInfo.studentId}&scheduleId=${selectedScheduleId}`
      );
      console.log(info.id);
    } catch (error) {
      console.log(error);
    }
    dispatch(isFetchingActions.changeIsFetching());
  };

  const delLectureHandler = (props) => {
    delLectureToSchedule();
    close();
    console.log(info);
  };
  // console.log(info);

  return (
    <div className="classModal">
      <div className="classModal-contents">
        <div className="classModal-contents-name">{info.name}</div>
        <div className="classModal-contents-content">
          <label htmlFor="department">학과</label>
          <div>{info.department}</div>
        </div>
        {info.dayAndTime === "" ? (
          <></>
        ) : (
          <div className="classModal-contents-content">
            <label htmlFor="dayAndTime">강의시간</label>
            <div>{info.dayAndTime}</div>
          </div>
        )}
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
          <div>{info.lectureGrade + "학년"}</div>
        </div>
        <div className="classModal-contents-content">
          <label htmlFor="lectureId">학수번호</label>
          <div>{info.lectureId}</div>
        </div>
        <div className="classModal-contents-content">
          <label htmlFor="distrib">분반</label>
          <div>{info.distrib}</div>
        </div>
        {info.profName === "" ? (
          <></>
        ) : (
          <div className="classModal-contents-content">
            <label htmlFor="profName">교수명</label>
            <div>{info.profName}</div>
          </div>
        )}

        {info.room === "" || "//" ? (
          <></>
        ) : (
          <div className="classModal-contents-content">
            <label htmlFor="room">강의실</label>
            <div>{info.room}</div>
          </div>
        )}

        {info.english === "" ? (
          <></>
        ) : (
          <div className="classModal-contents-content">
            <label htmlFor="english">언어</label>
            <div className="classModal-contents-content-english">
              {info.english}
            </div>
          </div>
        )}
        {info.notice === "외국인대상강좌" ? (
          <div className="classModal-contents-content">
            <label htmlFor="notice">공지</label>
            <mark className="classModal-contents-content-notice">
              {info.notice}
            </mark>
          </div>
        ) : info.notice === "" ? (
          <></>
        ) : (
          <div className="classModal-contents-content">
            <label htmlFor="notice">공지</label>
            <mark className="classModal-contents-content-notice">
              {info.notice}
            </mark>
          </div>
        )}
        <div className="classModal-contents-buttons">
          <button onClick={delLectureHandler}>제거</button>
          <button>수업계획서</button>
          <button>강의평가</button>
        </div>
      </div>
    </div>
  );
};

const ClassModal_v2 = (props) => {
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

export default ClassModal_v2;
