import DdayBox from "./DdayBox";
import "./DdayContent.scss";
import DdayScheduleSelector from "./DdayScheduleSelector";
import { useState } from "react";
const DdayContent = () => {
  const [scheduleId, setScheduleId] = useState(0);
  const setScheduleIdTo0 = () => {
    setScheduleId(0);
  };
  const setScheduleIdTo1 = () => {
    setScheduleId(1);
  };
  const setScheduleIdTo2 = () => {
    setScheduleId(2);
  };
  return (
    <div className="wrapper">
      <div className="ddayContent">
        <DdayScheduleSelector
          changeIdTo0={setScheduleIdTo0}
          changeIdTo1={setScheduleIdTo1}
          changeIdTo2={setScheduleIdTo2}
        ></DdayScheduleSelector>
        <DdayBox id={scheduleId}></DdayBox>
      </div>
      <div className="ddayImage"></div>
    </div>
  );
};

export default DdayContent;
