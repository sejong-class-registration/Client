import "./LectureItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectedLecActions } from "../../redux/slice/selectedLecSlice";
import { useState, useEffect } from "react";

//강의 아이템 한개
const LectureItem = (props) => {
  const dispatch = useDispatch();
  const openModal = props.openClassModal;
  const lecturesInSchedule = useSelector(
    (state) => state.userSchedule.userSchedule
  );
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  // console.log(userInfo);
  // console.log(lecturesInSchedule);

  const lectures = [];
  for (var i = 0; i < lecturesInSchedule.length; i++) {
    lectures.push(lecturesInSchedule[i].lectureId);
  }

  const recommendLectures = [];
  for (i = 0; i < userInfo.recommendLecture.length; i++) {
    recommendLectures.push(userInfo.recommendLecture[i].name);
  }
  // console.log(recommendLectures);

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

  const isTaken = useSelector((state) => state.takenCheckBox.takenCheckBox);

  const cart = useSelector((state) => state.cartCheckBox.cartCheckBox);
  // console.log(cart);
  // console.log(isTaken);

  // ***********************************************
  const [isInSchedule, setIsInSchedule] = useState(false);
  var day = [];
  var startTime = 0;
  var endTime = 0;

  if (props.dayAndTime) {
    if (isNaN(props.dayAndTime[1])) {
      day.push(props.dayAndTime[0]);
      day.push(props.dayAndTime[1]);
      startTime =
        60 * parseInt(props.dayAndTime.slice(2, 4)) +
        parseInt(props.dayAndTime.slice(5, 7));

      endTime =
        60 * parseInt(props.dayAndTime.slice(8, 10)) +
        parseInt(props.dayAndTime.slice(11, 13));
    } else {
      day.push(props.dayAndTime[0]);
      startTime =
        60 * parseInt(props.dayAndTime.slice(1, 3)) +
        parseInt(props.dayAndTime.slice(4, 6));

      endTime =
        60 * parseInt(props.dayAndTime.slice(7, 9)) +
        parseInt(props.dayAndTime.slice(10, 12));
    }
  }
  // console.log(props.dayAndTime);
  // console.log(day, startTime, endTime);

  const userScheduleData = useSelector(
    (state) => state.userSchedule.userSchedule
  );
  // console.log(userScheduleData);


  useEffect(() => {
    for (var i = 0; i < userScheduleData.length; i++) {
      if (day) {
        if (
          userScheduleData[i].time.day.includes(day[0]) ||
          userScheduleData[i].time.day.includes(day[1])
        ) {
          if (
            (startTime > userScheduleData[i].time.startTime &&
              startTime < userScheduleData[i].time.endTime) ||
            (endTime > userScheduleData[i].time.startTime &&
              endTime < userScheduleData[i].time.endTime) ||
            (startTime < userScheduleData[i].time.startTime &&
              endTime > userScheduleData[i].time.endTime) ||
            (startTime > userScheduleData[i].time.startTime &&
              endTime < userScheduleData[i].time.endTime)
          ) {
            setIsInSchedule(true);
          }
        }
      }
    }
  }, []);

  // console.log(lectureTimeList);
  // console.log(props.dayAndTime ? "1" : "0");

  // ***********************************************

  const takenLectures = [];
  for (var i = 0; i < userInfo.takenLectures.length; i++) {
    takenLectures.push(userInfo.takenLectures[i].name);
  }
  // console.log(takenLectures);

  if (
    (takenLectures.includes(props.name.split(" ").join("")) && isTaken) ||
    (cart && lectures.includes(props.lectureId))
  ) {
    return <></>;
  } else {
    return (
      <div className="lecture" onClick={clickLectureHandler}>
        <div
          className={`lecture-wrap${
            lectures.includes(props.lectureId)
              ? "-isInSchedule"
              : takenLectures.includes(props.name.split(" ").join(""))
              ? "-isTaken"
              : props.dayAndTime === "" && props.classification !== "전필"
              ? "-online"
              : props.classification === "전필"
              ? "-necessary"
              : ""
          }`}
        >
          <div
            className={`lecture_title${
              recommendLectures.includes(props.name.split(" ").join(""))
                ? "-recommend"
                : ""
            }`}
          >
            {recommendLectures.includes(props.name.split(" ").join("")) ? (
              <span className="recommend">추천👍</span>
            ) : (
              ""
            )}
            {`${
              props.notice === "외국인대상강좌"
                ? "⚠️ "
                : props.english === "영어"
                ? "🆎 "
                : ""
            }${props.name}`}
          </div>
          <div className="lecture_type">{props.classification}</div>
          <div className="lecture_score">
            {props.credit.substr(0, 1) + "학점"}
          </div>
          <div className={`lecture_time${isInSchedule ? "_isInSchedule" : ""}`}>
            {(isInSchedule ? "❌" : "") + props.dayAndTime}
          </div>
          <div className="lecture_prof">{props.profName}</div>
        </div>
      </div>
    );
  }
};

export default LectureItem;
