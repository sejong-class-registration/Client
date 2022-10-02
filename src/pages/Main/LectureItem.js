import "./LectureItem.scss";

const LectureItem = (props) => {
  return (
    <div className="lecture" onClick={props.openModal}>
      <div className="lecture_title">{props.name}</div>
      <div className="lecture_type">{props.classification}</div>
      <div className="lecture_score">{props.credit.substr(0, 1) + "학점"}</div>
      <div className="lecture_time">{props.dayAndTime}</div>
      <div className="lecture_prof">{props.profName}</div>
    </div>
  );
};

export default LectureItem;
