import "./Frame1.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { selectedLecActions } from "../../redux/slice/selectedLecSlice";
import { useDispatch, useSelector } from "react-redux";
import { userScheduleActions } from "../../redux/slice/userScheduleSlice";
import ClassModal_v2 from "./ClassModal_v2";
import { scheduleNumActions } from "../../redux/slice/scheduleNumSlice";
const Frame1 = () => {
  // const [userSchedule, setUserSchedule] = useState(null);

  const userInfo = useSelector((state) => state.userInfo.userInfo);
  // console.log(userInfo);
  const [isOpen, setIsOpen] = useState(false);
  const [scheduleId, setScheduleId] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);

  // const selectedScheduleId = useSelector(
  //   (state) => state.scheduleNum.scheduleNum
  // );
  // console.log(selectedScheduleId);

  const userScheduleData = useSelector(
    (state) => state.userSchedule.userSchedule
  );

  const isFetching = useSelector((state) => state.isFetching.isFetching);
  const [isThereOnlineClass, setIsThereOnlineClass] = useState(false);

  const dispatch = useDispatch();

  const closeClassModal = () => {
    setIsOpen(false);
  };

  const getUserSchedule = async (id) => {
    const response = await axios(
      `https://sejong-enrollment.herokuapp.com/schedules?userId=${userInfo.studentId}`
    );
    // console.log(response.data.data);
    // console.log(response.data.data.schedules[id].totalCredit);
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
      // console.log(response.data.data.schedules[id].schedule, id);
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
  // console.log(userScheduleData);
  // console.log(isThereOnlineClass);

  const returnSticker = (day, startTime) => {
    for (var i = 0; i < userScheduleData.length; i++) {
      // console.log(userScheduleData[i]);

      var color = null;
      if (userScheduleData[i].classification === "??????") {
        color = "#ff9999";
      }
      if (userScheduleData[i].classification === "??????") {
        color = "#ffcccc";
      }
      if (userScheduleData[i].classification === "??????") {
        color = "#d7df7e";
      }
      if (userScheduleData[i].classification === "??????") {
        color = "#917edf";
      }
      if (userScheduleData[i].classification === "??????") {
        color = "#99ff99";
      }
      if (userScheduleData[i].classification === "??????") {
        color = "#99ff99";
      }
      if (
        userScheduleData[i].classification === "??????" ||
        userScheduleData[i].classification === "??????"
      ) {
        color = "#cc99ff";
      }

      // console.log(userScheduleData[i].time);
      // console.log(userScheduleData[i].time.day.includes("???"));

      // ??????
      if (
        userScheduleData[i].time.day.includes(day) &&
        userScheduleData[i].time.startTime === startTime
      ) {
        // console.log(userScheduleData[i]);

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
        // console.log(className);

        console.log(userScheduleData[i]);

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
      // ?????? + 30??? ??????
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
        // console.log(className);
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
    var color = "#b2f7cf";

    const outRangeLecClickHandler = (lec) => {
      console.log(lec);
      dispatch(
        selectedLecActions.changeSelectedLec({
          selectedLec: lec,
        })
      );
      setIsOpen(true);
    };

    for (var i = 0; i < userScheduleData.length; i++) {
      // console.log(userScheduleData[i]);
      if (
        userScheduleData[i].time.startTime === 0 ||
        userScheduleData[i].time.startTime >= 1080
      ) {
        lectureList.push(userScheduleData[i]);
      }
    }

    // console.log(lectureList);

    return lectureList.map((lec) => (
      <tr
        style={{
          backgroundColor: color,
        }}
        className="outRangeLecures"
      >
        {/* {console.log(lec)} */}
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

  useEffect(() => {
    getUserSchedule(scheduleId);
    // console.log(userScheduleData);
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
        <label>2022-2??????</label>
      </div>
      <div className="calendar">
        <table className="calendar-table">
          <tr>
            <th className="calendar-number left_up_corner"></th>
            <td className="calendar-day">???</td>
            <td className="calendar-day">???</td>
            <td className="calendar-day">???</td>
            <td className="calendar-day">???</td>
            <td className="calendar-day right_up_corner">???</td>
          </tr>
          <tr>
            <td className="calendar-number">9</td>
            <td className="calendar-class">{returnSticker("???", 540)}</td>
            <td className="calendar-class">{returnSticker("???", 540)}</td>
            <td className="calendar-class">{returnSticker("???", 540)}</td>
            <td className="calendar-class">{returnSticker("???", 540)}</td>
            <td className="calendar-class">{returnSticker("???", 540)}</td>
          </tr>
          <tr>
            <td className="calendar-number">10</td>
            <td className="calendar-class">{returnSticker("???", 600)}</td>
            <td className="calendar-class">{returnSticker("???", 600)}</td>
            <td className="calendar-class">{returnSticker("???", 600)}</td>
            <td className="calendar-class">{returnSticker("???", 600)}</td>
            <td className="calendar-class">{returnSticker("???", 600)}</td>
          </tr>
          <tr>
            <td className="calendar-number">11</td>
            <td className="calendar-class">{returnSticker("???", 660)}</td>
            <td className="calendar-class">{returnSticker("???", 660)}</td>
            <td className="calendar-class">{returnSticker("???", 660)}</td>
            <td className="calendar-class">{returnSticker("???", 660)}</td>
            <td className="calendar-class">{returnSticker("???", 660)}</td>
          </tr>
          <tr>
            <td className="calendar-number">12</td>
            <td className="calendar-class">{returnSticker("???", 720)}</td>
            <td className="calendar-class">{returnSticker("???", 720)}</td>
            <td className="calendar-class">{returnSticker("???", 720)}</td>
            <td className="calendar-class">{returnSticker("???", 720)}</td>
            <td className="calendar-class">{returnSticker("???", 720)}</td>
          </tr>
          <tr>
            <td className="calendar-number">13</td>
            <td className="calendar-class">{returnSticker("???", 780)}</td>
            <td className="calendar-class">{returnSticker("???", 780)}</td>
            <td className="calendar-class">{returnSticker("???", 780)}</td>
            <td className="calendar-class">{returnSticker("???", 780)}</td>
            <td className="calendar-class">{returnSticker("???", 780)}</td>
          </tr>
          <tr>
            <td className="calendar-number">14</td>
            <td className="calendar-class">{returnSticker("???", 840)}</td>
            <td className="calendar-class">{returnSticker("???", 840)}</td>
            <td className="calendar-class">{returnSticker("???", 840)}</td>
            <td className="calendar-class">{returnSticker("???", 840)}</td>
            <td className="calendar-class">{returnSticker("???", 840)}</td>
          </tr>
          <tr>
            <td className="calendar-number">15</td>
            <td className="calendar-class">{returnSticker("???", 900)}</td>
            <td className="calendar-class">{returnSticker("???", 900)}</td>
            <td className="calendar-class">{returnSticker("???", 900)}</td>
            <td className="calendar-class">{returnSticker("???", 900)}</td>
            <td className="calendar-class">{returnSticker("???", 900)}</td>
          </tr>
          <tr>
            <td className="calendar-number">16</td>
            <td className="calendar-class">{returnSticker("???", 960)}</td>
            <td className="calendar-class">{returnSticker("???", 960)}</td>
            <td className="calendar-class">{returnSticker("???", 960)}</td>
            <td className="calendar-class">{returnSticker("???", 960)}</td>
            <td className="calendar-class">{returnSticker("???", 960)}</td>
          </tr>
          <tr>
            <td className="calendar-number left_down_corner">17</td>
            <td className="calendar-class">{returnSticker("???", 1020)}</td>
            <td className="calendar-class">{returnSticker("???", 1020)}</td>
            <td className="calendar-class">{returnSticker("???", 1020)}</td>
            <td className="calendar-class">{returnSticker("???", 1020)}</td>
            <td className="calendar-class right_down_corner">
              {returnSticker("???", 1020)}
            </td>
          </tr>
          {isThereOnlineClass && returnOnlineClassSticker()}
        </table>
        <div className="calendar-info">
          <div className="calendar-info-calculator">
            {/* <div>???????????? ?????? ??????: 20</div> */}
            <div>
              {scheduleId === 0 ? "A" : scheduleId === 1 ? "B" : "C"} ????????? ???
              ??????: {totalCredit}
            </div>
            <div>?????? ?????????????????? : {userInfo.totalCredits}</div>
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
