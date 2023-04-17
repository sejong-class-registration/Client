const DdayScheduleSelector = (props) => {

  const changeId = (e) => {
    if (e.target.value === "A") {
      props.changeIdTo0();
    }
    if (e.target.value === "B") {
      props.changeIdTo1();
    }
    if (e.target.value === "C") {
      props.changeIdTo2();
    }
  };
  
  return (
    <div className="scheduleSelector">
      <select className="scheduleSelector-selectBox" onChange={changeId}>
        <option className="scheduleSelector-option" selected value="A">
          시간표 A
        </option>
        <option value="B">시간표 B</option>
        <option value="C">시간표 C</option>
      </select>
    </div>
  );
};

export default DdayScheduleSelector;
