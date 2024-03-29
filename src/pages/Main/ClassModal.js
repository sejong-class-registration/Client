import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { isFetchingActions } from "../../redux/slice/isFetchingSlice";
import Loading2 from "../../UI/Loading2";

import "./ClassModal.scss";

//강의 리스트에서 눌럿을 때 모달
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  const info = useSelector((state) => state.selectedLec.selectedLec);
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const isFetching = useSelector((state) => state.isFetching.isFetching);
  const selectedScheduleId = useSelector(
    (state) => state.scheduleNum.scheduleNum
  );

  const recommendLectures = [];
  for (var i = 0; i < userInfo.recommendLecture.length; i++) {
    recommendLectures.push(userInfo.recommendLecture[i].name);
  }

  var recommendComment = null;
  for (i = 0; i < userInfo.recommendLecture.length; i++) {
    if (userInfo.recommendLecture[i].name === info.name.split(" ").join("")) {
      recommendComment = userInfo.recommendLecture[i].comment;
    }
  }

  const dispatch = useDispatch();
  const close = props.close;

  const putLectureToSchedule = async (close) => {
    dispatch(isFetchingActions.changeIsFetching());
    try {
      const response = await axios.put(
        `https://port-0-sejong-enrollment-1jvasx23lbaoi6rj.gksl2.cloudtype.app/schedules/${info.id}`,
        { userId: userInfo.studentId, scheduleId: selectedScheduleId }
      );
    } catch (error) {
      alert(error.response.data.message);
    }
    dispatch(isFetchingActions.changeIsFetching());
    close();
  };

  const addLectureHandler = (props) => {
    putLectureToSchedule(close);

  };

  return (
    <div className="classModal">
      <div className="classModal-contents">
        {recommendLectures.includes(info.name.split(" ").join("")) ? (
          <div className="classModal-contents-name-recommend">
            <div>{info.name}</div>
            <div className="classModal-contents-name-recommend-tag">{`⭐ ${recommendComment}`}</div>
          </div>
        ) : (
          <div className="classModal-contents-name">
            <div>{info.name}</div>
          </div>
        )}

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

        {userInfo.takenLectures.includes(info.name.split(" ").join("")) ? (
          <div className="classModal-contents-content">
            <label htmlFor="isTaken">이수 여부</label>
            <div className="classModal-contents-content-isTaken">
              이미 이수한 강의입니다.
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className={`classModal-contents-buttons`}>
          <button onClick={addLectureHandler}>
            {isFetching
              ? "Loading ..."
              : userInfo.takenLectures.includes(info.name.split(" ").join(""))
              ? "재수강"
              : "추가"}
          </button>
          {/* <button>수업계획서</button>
          <button>강의평가</button> */}
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
