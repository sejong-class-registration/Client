import "./Frame1.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userScheduleActions } from "../../redux/slice/userScheduleSlice";
const Frame1 = () => {
  // const [userSchedule, setUserSchedule] = useState(null);
  const [scheduleId, setScheduleId] = useState(0);
  const userScheduleData = useSelector(
    (state) => state.userSchedule.userSchedule
  );

  const dispatch = useDispatch();

  const getUserSchedule = async (id) => {
    const response = await axios(
      `https://sejong-enrollment.herokuapp.com/schedules?userId=17011502`
    );
    // setUserSchedule(response.data.data.schedules[id].schedule);
    dispatch(
      userScheduleActions.changeUserSchedule({
        userSchedule: response.data.data.schedules[id].schedule,
      })
    );
  };

  // for (var i = 0; i < userScheduleData.length; i++) {
  //   console.log(userScheduleData[i]);
  //   // console.log(userScheduleData[i].time);
  //   console.log(userScheduleData[i].time.day.includes("화"));
  // }

  const returnSticker = (day, startTime) => {
    for (var i = 0; i < userScheduleData.length; i++) {
      // console.log(userScheduleData[i]);
      // console.log(userScheduleData[i].time);
      // console.log(userScheduleData[i].time.day.includes("화"));
      if (
        userScheduleData[i].time.day.includes(day) &&
        userScheduleData[i].time.startTime === startTime
      ) {
        return (
          <div className="sticker">
            <div className="sticker-content">test</div>
          </div>
        );
      }
    }
  };

  useEffect(() => {
    getUserSchedule(scheduleId);
  }, [scheduleId]);

  const scheduleIdTo0 = () => {
    setScheduleId(0);
  };
  const scheduleIdTo1 = () => {
    setScheduleId(1);
  };
  const scheduleIdTo2 = () => {
    setScheduleId(2);
  };

  return (
    <div className="frame_1">
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
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class">
              {returnSticker("목", 540)}
              {/* <div className="test">
                <div className="test-content">test</div>
              </div> */}
            </td>
            <td className="calendar-class"></td>
          </tr>
          <tr>
            <td className="calendar-number">10</td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
          </tr>
          <tr>
            <td className="calendar-number">11</td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
          </tr>
          <tr>
            <td className="calendar-number">12</td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
          </tr>
          <tr>
            <td className="calendar-number">13</td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
          </tr>
          <tr>
            <td className="calendar-number">14</td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
          </tr>
          <tr>
            <td className="calendar-number">15</td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
          </tr>
          <tr>
            <td className="calendar-number">16</td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
          </tr>
          <tr>
            <td className="calendar-number left_down_corner">17</td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class"></td>
            <td className="calendar-class right_down_corner"></td>
          </tr>
        </table>
        <div className="calendar-info">
          <div className="calendar-info-calculator">
            <div>졸업까지 남은 학점: 20</div>
            <div>이번학기 남은 학점: 6</div>
          </div>
          <div className="calendar-info-buttons">
            <button
              className="calendar-info-buttons-button"
              onClick={scheduleIdTo0}
            >
              A
            </button>
            <button
              className="calendar-info-buttons-button"
              onClick={scheduleIdTo1}
            >
              B
            </button>
            <button
              className="calendar-info-buttons-button"
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
