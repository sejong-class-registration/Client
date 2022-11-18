import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import randomColor from "randomcolor";

const DdayBox = (props) => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [schedules, setSchedules] = useState(null);
  const getUserSchedule = async (id) => {
    try {
      const response = await axios(
        `https://sejong-enrollment.herokuapp.com/schedules?userId=${userInfo.studentId}`
      );
      console.log(response.data.data.schedules[id].schedule);
      setSchedules(response.data.data.schedules[id].schedule);
    } catch (error) {}
  };

  console.log(schedules);
  useEffect(() => {
    getUserSchedule(props.id);
  }, [props.id]);

  var color = randomColor({
    // hue: "random",
    // luminosity: "bright",
    opacity: 0.3,
  });

  return (
    <>
      {schedules &&
        schedules.map((schedule) => (
          <div className="ddayContent-box" style={{ backgroundColor: color }}>
            <div className="ddayContent-box-name">{schedule.name}</div>
            <div className="ddayContent-box-others">
              <div className="ddayContent-box-others-lectureId">
                {schedule.lectureId}
              </div>
              <div className="ddayContent-box-others-distrib">
                {schedule.distrib}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default DdayBox;
