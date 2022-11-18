const DdayScheduleSelector = () => {
  return (
    <div className="scheduleSelector">
      <select className="scheduleSelector-selectBox">
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
