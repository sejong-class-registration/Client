import "./LectureItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectedLecActions } from "../../redux/slice/selectedLecSlice";
const LectureItem = (props) => {
  const dispatch = useDispatch();
  const openModal = props.openClassModal;
  const userLectureIdList = useSelector(
    (state) => state.userLectures.userLectures
  );

  // console.log(userLectureIdList);

  const selectedLecInfo = {
    classification: props.classification,
    credit: props.credit,
    dayAndTime: props.dayAndTime,
    department: props.department,
    distrib: props.distrib,
    english: props.english,
    lectureGrade: props.lectureGrade,
    lectureId: props.lectureId,
    name: props.name,
    notice: props.notice,
    profName: props.profName,
    recommend: props.recommend,
    room: props.room,
    id: props.id,
  };

  const clickLectureHandler = () => {
    dispatch(
      selectedLecActions.changeSelectedLec({ selectedLec: selectedLecInfo })
    );
    openModal();
  };

  // console.log(userLectureIdList.includes(props.lectureId));

  return (
    <div className="lecture" onClick={clickLectureHandler}>
      <div
        className={`lecture-wrap${
          userLectureIdList.includes(props.lectureId)
            ? "-isInSchedule"
            : props.dayAndTime === "" && props.classification !== "전필"
            ? "-online"
            : props.classification === "전필"
            ? "-necessary"
            : ""
        }`}
      >
        <div className="lecture_title">{`${
          props.notice === "외국인대상강좌"
            ? "⚠️ "
            : props.english === "영어"
            ? "🔤 "
            : ""
        }${props.name}`}</div>
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
