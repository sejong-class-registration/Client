import "./Frame1.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { selectedLecActions } from "../../redux/slice/selectedLecSlice";
import { useDispatch, useSelector } from "react-redux";
import { userScheduleActions } from "../../redux/slice/userScheduleSlice";
import ClassModal_v2 from "./ClassModal_v2";
import { scheduleNumActions } from "../../redux/slice/scheduleNumSlice";

//시간표 짠거 있으면 시간표 짠거 보여주기
const Frame1 = (props) => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const isFetching = useSelector((state) => state.isFetching.isFetching);
  const [isOpen, setIsOpen] = useState(false);
  const [scheduleId, setScheduleId] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const userScheduleData = useSelector(
    (state) => state.userSchedule.userSchedule
  );
  const hoverTime = useSelector((state) => state.hoverTime);
  const [isThereOnlineClass, setIsThereOnlineClass] = useState(false);
  const dispatch = useDispatch();

  const closeClassModal = () => {
    setIsOpen(false);
  };

  const getUserSchedule = async (id) => {
    const response = await axios(
      `https://sejong-enrollment.herokuapp.com/schedules?userId=${userInfo.studentId}`
    );
    setTotalCredit(response.data.data.schedules[id].totalCredit);
    if (!response.data.data.schedules[id]) {
      dispatch(
        userScheduleActions.changeUserSchedule({
          userSchedule: {},
        })
      );
    } else {
      dispatch(
        userScheduleActions.changeUserSchedule({
          userSchedule: response.data.data.schedules[id].schedule,
        })
      );
      setIsThereOnlineClass(false);
      for (
        var i = 0;
        i < response.data.data.schedules[id].schedule.length;
        i++
      ) {
        if (
          response.data.data.schedules[id].schedule[i].time.startTime === 0 ||
          response.data.data.schedules[id].schedule[i].time.startTime >= 1080
        )
          setIsThereOnlineClass(true);
      }
    }
  };

  //달력에 표시해주는 함수
  const returnSticker = (day, startTime) => {
    for (var i = 0; i < userScheduleData.length; i++) {
      var color = null;
      if (userScheduleData[i].classification === "전필") {
        color = "#FFD966";
      }
      if (userScheduleData[i].classification === "전선") {
        color = "#9CB4CC";
      }
      if (userScheduleData[i].classification === "교필") {
        color = "#D3CEDF";
      }
      if (userScheduleData[i].classification === "공필") {
        color = "#748DA6";
      }
      if (userScheduleData[i].classification === "교선") {
        color = "#F4B183";
      }
      if (userScheduleData[i].classification === "교직") {
        color = "#BA94D1";
      }
      if (
        userScheduleData[i].classification === "기교" ||
        userScheduleData[i].classification === "기필"
      ) {
        color = "#F2D7D9";
      }

      // 정각
      if (
        userScheduleData[i].time.day.includes(day) &&
        userScheduleData[i].time.startTime === startTime
      ) {
        const selectedLecInfo = {
          classification: userScheduleData[i].classification,
          credit: userScheduleData[i].credit,
          dayAndTime: userScheduleData[i].dayAndTime,
          department: userScheduleData[i].department,
          distrib: userScheduleData[i].distrib,
          english: userScheduleData[i].english,
          lectureGrade: userScheduleData[i].lectureGrade,
          lectureId: userScheduleData[i].lectureId,
          name: userScheduleData[i].name,
          notice: userScheduleData[i].notice,
          profName: userScheduleData[i].profName,
          recommend: userScheduleData[i].recommend,
          room: userScheduleData[i].room,
          id: userScheduleData[i].id,
        };

        const onClickHandler = () => {
          dispatch(
            selectedLecActions.changeSelectedLec({
              selectedLec: selectedLecInfo,
            })
          );
          setIsOpen(true);
        };
        const timeLength =
          userScheduleData[i].time.endTime - userScheduleData[i].time.startTime;
        const className = "sticker h" + timeLength;
        const classNameContent = className + "-content";

        return (
          <div
            className={className}
            style={{
              backgroundColor: color,
            }}
            onClick={onClickHandler}
          >
            <div className={classNameContent}>{userScheduleData[i].name}</div>
          </div>
        );
      }
      // 정각 + 30분 시작
      if (
        userScheduleData[i].time.day.includes(day) &&
        userScheduleData[i].time.startTime === startTime + 30
      ) {
        const selectedLecInfo = {
          classification: userScheduleData[i].classification,
          credit: userScheduleData[i].credit,
          dayAndTime: userScheduleData[i].dayAndTime,
          department: userScheduleData[i].department,
          distrib: userScheduleData[i].distrib,
          english: userScheduleData[i].english,
          lectureGrade: userScheduleData[i].lectureGrade,
          lectureId: userScheduleData[i].lectureId,
          name: userScheduleData[i].name,
          notice: userScheduleData[i].notice,
          profName: userScheduleData[i].profName,
          recommend: userScheduleData[i].recommend,
          room: userScheduleData[i].room,
          id: userScheduleData[i].id,
        };

        const onClickHandler = () => {
          dispatch(
            selectedLecActions.changeSelectedLec({
              selectedLec: selectedLecInfo,
            })
          );
          setIsOpen(true);
        };
        const timeLength =
          userScheduleData[i].time.endTime - userScheduleData[i].time.startTime;
        const className = "sticker h" + timeLength + "-half";
        const classNameContent = className + "-content";
        return (
          <div
            className={className}
            style={{
              backgroundColor: color,
            }}
            onClick={onClickHandler}
          >
            <div className={classNameContent}>{userScheduleData[i].name}</div>
          </div>
        );
      }
    }
  };

  const returnOnlineClassSticker = () => {
    const lectureList = [];
    var color = "#FFF8E1";

    const outRangeLecClickHandler = (lec) => {
      dispatch(
        selectedLecActions.changeSelectedLec({
          selectedLec: lec,
        })
      );
      setIsOpen(true);
    };

    for (var i = 0; i < userScheduleData.length; i++) {
      if (
        userScheduleData[i].time.startTime === 0 ||
        userScheduleData[i].time.startTime >= 1080
      ) {
        lectureList.push(userScheduleData[i]);
      }
    }

    return lectureList.map((lec) => (
      <tr
        style={{
          backgroundColor: color,
        }}
        className="outRangeLecures"
      >
        <td
          style={{
            border: "1px solid #fff",
          }}
          colspan="6"
          className="outRangeLecures-lecture"
          onClick={() => outRangeLecClickHandler(lec)}
          info={lec}
        >
          {lec.name}
        </td>
      </tr>
    ));
  };

  //다른 페이지가 있다가 돌아올때 시간표를 A로 인식시켜줌
  useEffect(() => {
    scheduleIdTo0();
  }, []);

  useEffect(() => {
    getUserSchedule(scheduleId);
  }, [scheduleId, isFetching]);

  const scheduleIdTo0 = () => {
    dispatch(scheduleNumActions.changeScheduleNum({ scheduleNum: 0 }));
    setScheduleId(0);
  };
  const scheduleIdTo1 = () => {
    dispatch(scheduleNumActions.changeScheduleNum({ scheduleNum: 1 }));
    setScheduleId(1);
  };
  const scheduleIdTo2 = () => {
    dispatch(scheduleNumActions.changeScheduleNum({ scheduleNum: 2 }));
    setScheduleId(2);
  };

  return (
    <div className="frame_1">
      {isOpen && <ClassModal_v2 close={closeClassModal}></ClassModal_v2>}
      <div className="calendar-label">
        <label>2023-1학기</label>
      </div>
      <div className="calendar">
        <table className="calendar-table">
          <tr>
            <th className="calendar-number left_up_corner"></th>
            <td className="calendar-day">월</td>
            <td className="calendar-day">화</td>
            <td className="calendar-day">수</td>
            <td className="calendar-day">목</td>
            <td className="calendar-day right_up_corner">금</td>
          </tr>
          <tr>
            <td className="calendar-number">9</td>
            <td className="calendar-class">{returnSticker("월", 540)}</td>
            <td className="calendar-class">{returnSticker("화", 540)}</td>
            <td className="calendar-class">{returnSticker("수", 540)}</td>
            <td className="calendar-class">{returnSticker("목", 540)}</td>
            <td className="calendar-class">{returnSticker("금", 540)}</td>
          </tr>
          <tr>
            <td className="calendar-number">10</td>
            <td className="calendar-class">{returnSticker("월", 600)}</td>
            <td className="calendar-class">{returnSticker("화", 600)}</td>
            <td className="calendar-class">{returnSticker("수", 600)}</td>
            <td className="calendar-class">{returnSticker("목", 600)}</td>
            <td className="calendar-class">{returnSticker("금", 600)}</td>
          </tr>
          <tr>
            <td className="calendar-number">11</td>
            <td className="calendar-class">{returnSticker("월", 660)}</td>
            <td className="calendar-class">{returnSticker("화", 660)}</td>
            <td className="calendar-class">{returnSticker("수", 660)}</td>
            <td className="calendar-class">{returnSticker("목", 660)}</td>
            <td className="calendar-class">{returnSticker("금", 660)}</td>
          </tr>
          <tr>
            <td className="calendar-number">12</td>
            <td className="calendar-class">{returnSticker("월", 720)}</td>
            <td className="calendar-class">{returnSticker("화", 720)}</td>
            <td className="calendar-class">{returnSticker("수", 720)}</td>
            <td className="calendar-class">{returnSticker("목", 720)}</td>
            <td className="calendar-class">{returnSticker("금", 720)}</td>
          </tr>
          <tr>
            <td className="calendar-number">13</td>
            <td className="calendar-class">{returnSticker("월", 780)}</td>
            <td className="calendar-class">{returnSticker("화", 780)}</td>
            <td className="calendar-class">{returnSticker("수", 780)}</td>
            <td className="calendar-class">{returnSticker("목", 780)}</td>
            <td className="calendar-class">{returnSticker("금", 780)}</td>
          </tr>
          <tr>
            <td className="calendar-number">14</td>
            <td className="calendar-class">{returnSticker("월", 840)}</td>
            <td className="calendar-class">{returnSticker("화", 840)}</td>
            <td className="calendar-class">{returnSticker("수", 840)}</td>
            <td className="calendar-class">{returnSticker("목", 840)}</td>
            <td className="calendar-class">{returnSticker("금", 840)}</td>
          </tr>
          <tr>
            <td className="calendar-number">15</td>
            <td className="calendar-class">{returnSticker("월", 900)}</td>
            <td className="calendar-class">{returnSticker("화", 900)}</td>
            <td className="calendar-class">{returnSticker("수", 900)}</td>
            <td className="calendar-class">{returnSticker("목", 900)}</td>
            <td className="calendar-class">{returnSticker("금", 900)}</td>
          </tr>
          <tr>
            <td className="calendar-number">16</td>
            <td className="calendar-class">{returnSticker("월", 960)}</td>
            <td className="calendar-class">{returnSticker("화", 960)}</td>
            <td className="calendar-class">{returnSticker("수", 960)}</td>
            <td className="calendar-class">{returnSticker("목", 960)}</td>
            <td className="calendar-class">{returnSticker("금", 960)}</td>
          </tr>
          <tr>
            <td className="calendar-number left_down_corner">17</td>
            <td className="calendar-class">{returnSticker("월", 1020)}</td>
            <td className="calendar-class">{returnSticker("화", 1020)}</td>
            <td className="calendar-class">{returnSticker("수", 1020)}</td>
            <td className="calendar-class">{returnSticker("목", 1020)}</td>
            <td className="calendar-class right_down_corner">
              {returnSticker("금", 1020)}
            </td>
          </tr>
          {isThereOnlineClass && returnOnlineClassSticker()}
        </table>
        <div className="calendar-info">
          <div className="calendar-info-calculator">
            <div>
              {scheduleId === 0 ? "A" : scheduleId === 1 ? "B" : "C"} 시간표 총
              학점: {totalCredit}
            </div>
            <div>현재 졸업인정학점 : {userInfo.totalCredits}</div>
          </div>
          <div className="calendar-info-buttons">
            <button
              className={`calendar-info-buttons-button${
                scheduleId === 0 ? "" : `-deactive`
              }`}
              onClick={scheduleIdTo0}
            >
              A
            </button>
            <button
              className={`calendar-info-buttons-button${
                scheduleId === 1 ? "" : `-deactive`
              }`}
              onClick={scheduleIdTo1}
            >
              B
            </button>
            <button
              className={`calendar-info-buttons-button${
                scheduleId === 2 ? "" : `-deactive`
              }`}
              onClick={scheduleIdTo2}
            >
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
