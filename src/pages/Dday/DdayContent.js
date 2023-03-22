import DdayBox from "./DdayBox";
import "./DdayContent.scss";
import DdayScheduleSelector from "./DdayScheduleSelector";
import { useState } from "react";
const DdayContent = () => {
  const [scheduleId, setScheduleId] = useState(0);
  const [buttonValue, setButtonValue] = useState(false);

  const buttonHandler = () => {
    if(buttonValue == false) {
      setButtonValue(true);
    }else{
      setButtonValue(false);
    }
  }
  const setScheduleIdTo0 = () => {
    setScheduleId(0);
  };
  const setScheduleIdTo1 = () => {
    setScheduleId(1);
  };
  const setScheduleIdTo2 = () => {
    setScheduleId(2);
  };

  const imgUrl = "/images/example.jpg";

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
      <div className="dday-description">
        <div className="dday-description-txt">
          <div>
            <p className="dday-description-txt-title">사용법</p>
            <p className="dday-description-txt-exp1">
              수강신청 당일 메모장 대신 사용하세요!
            </p>
          </div>
          <div className="dday-description-txt-exp2">
            <p>
              1. 시간표짜기 페이지에서 시간표를 짠 후 시간표 A, B, C 중 원하는
              시간표를 선택하세요
            </p>
            <p>2. 수강신청 할 때 수강신청 대비 창을 같이 띄워 놓으세요 </p>
            <p>3. 복사가 필요한 순간 원하는 부분을 클릭하세요</p>
          </div>
        </div>
        <div className="dday-description-image">
          <button value={buttonValue} onClick={buttonHandler}>사용 예시</button>
          {buttonValue && <img
            className="dday-description-image"
            alt="사용예시"
            src={imgUrl}
          ></img>}
        </div>
      </div>
    </div>
  );
};

export default DdayContent;
