import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

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

  return (
    <div className="ddayContent-box">
      <div className="ddayContent-box-name">컴퓨터구조</div>
      <div className="ddayContent-box-others">
        <div className="ddayContent-box-others-lectureId">123123</div>
        <div className="ddayContent-box-others-distrib">001</div>
      </div>
    </div>
  );
};

export default DdayBox;
