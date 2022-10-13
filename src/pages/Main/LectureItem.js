import "./LectureItem.scss";
import { useDispatch } from "react-redux";
import { selectedLecActions } from "../../redux/slice/selectedLecSlice";
const LectureItem = (props) => {
  const dispatch = useDispatch();
  const openModal = props.openClassModal;
  const selectedLecInfo = {
    classification: props.classification,
    credit: props.credit,
    dayAndTime: props.dayAndTime,
    department: props.department,
    distrib: props.distrib,
    lectureGrade: props.lectureGrade,
    lectureId: props.lectureId,
    name: props.name,
    profName: props.profName,
    room: props.room,
    id: props._id,
  };

  const clickLectureHandler = () => {
    dispatch(
      selectedLecActions.changeSelectedLec({ selectedLec: selectedLecInfo })
    );
    openModal();
  };
  return (
    <div className="lecture" onClick={clickLectureHandler}>
      <div className="lecture-wrap">
        <div className="lecture_title">{props.name}</div>
        <div className="lecture_type">{props.classification}</div>
        <div className="lecture_score">
          {props.credit.substr(0, 1) + "학점"}
        </div>
        <div className="lecture_time">{props.dayAndTime}</div>
        <div className="lecture_prof">{props.profName}</div>
      </div>
    </div>
  );
};

export default LectureItem;
