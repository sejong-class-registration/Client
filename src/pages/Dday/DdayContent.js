import DdayBox from "./DdayBox";
import "./DdayContent.scss";
const DdayContent = () => {
  return (
    <div className="wrapper">
      <div className="ddayContent">
        <DdayBox id={0}></DdayBox>
      </div>
      <div className="ddayImage"></div>
    </div>
  );
};

export default DdayContent;
