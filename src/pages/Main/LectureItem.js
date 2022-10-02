import "./LectureItem.scss";
import { useDispatch } from "react-redux";
import { selectedIdActions } from "../../redux/slice/selectedIdSlice";
const LectureItem = (props) => {
  const dispatch = useDispatch();
  const openModal = props.openClassModal;

  const clickLectureHandler = () => {
    dispatch(selectedIdActions.changeSelectedId(props.id));
    console.log(props.id);
    openModal();
  };
  return (
    <div className="lecture" onClick={clickLectureHandler}>
      <div className="lecture_title">{props.name}</div>
      <div className="lecture_type">{props.classification}</div>
      <div className="lecture_score">{props.credit.substr(0, 1) + "학점"}</div>
      <div className="lecture_time">{props.dayAndTime}</div>
      <div className="lecture_prof">{props.profName}</div>
    </div>
  );
};

export default LectureItem;
