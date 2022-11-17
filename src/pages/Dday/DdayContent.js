import "./DdayContent.scss";
const DdayContent = () => {
  return (
    <div className="wrapper">
      <div className="ddayContent">
        <div className="ddayContent-box">
          <div className="ddayContent-box-name">컴퓨터구조</div>
          <div className="ddayContent-box-others">
            <div className="ddayContent-box-others-lectureId"></div>
            <div className="ddayContent-box-others-distrib"></div>
          </div>
        </div>
        <div className="ddayContent-box"></div>
        <div className="ddayContent-box"></div>
      </div>
      <div className="ddayImage"></div>
    </div>
  );
};

export default DdayContent;
