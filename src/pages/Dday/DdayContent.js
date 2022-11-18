import DdayBox from "./DdayBox";
import "./DdayContent.scss";
import DdayScheduleSelector from "./DdayScheduleSelector";
const DdayContent = () => {
  return (
    <div className="wrapper">
      <div className="ddayContent">
        <DdayScheduleSelector></DdayScheduleSelector>
        <DdayBox id={0}></DdayBox>
      </div>
      <div className="ddayImage"></div>
    </div>
  );
};

export default DdayContent;
