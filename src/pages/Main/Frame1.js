import "./Frame1.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { selectedLecActions } from "../../redux/slice/selectedLecSlice";
import { useDispatch, useSelector } from "react-redux";
import { userScheduleActions } from "../../redux/slice/userScheduleSlice";
import randomColor from "randomcolor";
import ClassModal_v2 from "./ClassModal_v2";
import { scheduleNumActions } from "../../redux/slice/scheduleNumSlice";
const Frame1 = () => {
  // const [userSchedule, setUserSchedule] = useState(null);

  const userInfo = useSelector((state) => state.userInfo.userInfo);
  // console.log(userInfo);
  const [isOpen, setIsOpen] = useState(false);
  const [scheduleId, setScheduleId] = useState(0);

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
    console.log(response.data.data);
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
      console.log(response.data.data.schedules[id].schedule, id);
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
  console.log(isThereOnlineClass);

  const returnSticker = (day, startTime) => {
    for (var i = 0; i < userScheduleData.length; i++) {
      // console.log(userScheduleData[i]);
      // console.log(userScheduleData[i].time);
      // console.log(userScheduleData[i].time.day.includes("화"));

      // 정각
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
        var color = randomColor();
        const timeLength =
          userScheduleData[i].time.endTime - userScheduleData[i].time.startTime;
        const className = "sticker h" + timeLength;
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
        var color = randomColor();
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
        var color = randomColor();
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
        <label>2022-2학기</label>
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
            <div>졸업까지 남은 학점: 20</div>
            <div>이번학기 남은 학점: 6</div>
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
