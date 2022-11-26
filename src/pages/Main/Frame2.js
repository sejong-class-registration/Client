import "./Frame2.scss";
import LectureItem from "./LectureItem";
import searchIcon from "../../common/icons/searchIcon.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { sortFilterActions } from "../../redux/slice/sortFilterSlice";
import { userLecturesActions } from "../../redux/slice/userLecturesSlice";
import { filteredLectureActions } from "../../redux/slice/filteredLectureSlice";

const Frame2 = (props) => {
  const [lectureList, setLectureList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //filter state
  const savedFilterInfo = useSelector((state) => state.classFilter.classFilter);

  //sort state
  const savedSortInfo = useSelector((state) => state.sortFilter.sortFilter);

  const lecturesInSchedule = useSelector(
    (state) => state.userSchedule.userSchedule
  );
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const dispatch = useDispatch();

  const sortChangeHandler = (e) => {
    dispatch(
      sortFilterActions.changeSortFilter({
        sortFilter: e.target.value,
      })
    );
  };

  // console.log(lecturesInSchedule);

  useEffect(() => {
    for (var lecture = 0; lecture < lecturesInSchedule.length; lecture++) {
      // console.log(lecturesInSchedule[lecture].lectureId);
      dispatch(
        userLecturesActions.changeUserLectures({
          userLectures: lecturesInSchedule[lecture].lectureId,
        })
      );
    }
  }, [lecturesInSchedule]);

  // console.log(savedSortInfo);

  const getLectureList = async (info, sort) => {
    setIsLoading(true);
    const response = await axios(
      `https://sejong-enrollment.herokuapp.com/lectures?${
        info.department === ""
          ? ""
          : info.department === "전체"
          ? ""
          : `&department=${info.department}`
      }${info.name === "" ? "" : `&name=${info.name}`}${
        info.profName === "" ? "" : `&profName=${info.profName}`
      }${
        info.classification === ""
          ? ""
          : info.classification === "전체"
          ? ""
          : `&classification=${info.classification}`
      }&sort=${sort}`
    );
    // console.log(info.department);
    setLectureList(response.data.data.lectures);
    dispatch(
      filteredLectureActions.changefilteredLecture({
        filteredLecture: response.data.data.lectures,
      })
    );
    setIsLoading(false);
  };

  // console.log(lectureList);

  useEffect(() => {
    getLectureList(savedFilterInfo, savedSortInfo);
  }, [savedFilterInfo, savedSortInfo]);

  //checkbox state
  const [takenChecked, setTakenChecked] = useState(false);
  // console.log(takenChecked);
  const takenChangeHandler = (props) => {
    setTakenChecked(!takenChecked);
  };

  return (
    <div className="frame_2">
      <div className="filter">
        <button className="filter-button" onClick={props.openModal}>
          <img className="filter-button-img" src={searchIcon} alt=""></img>
        </button>
      </div>
      <div className="content2">
        <div className="sort_selecter">
          <div className="checkboxwrapper">
            <input
              type="checkbox"
              className="checkboxwrapper-isTaken-input"
              checked={takenChecked}
              onChange={takenChangeHandler}
            />
            <label className="checkboxwrapper-isTaken-label">기이수 강의</label>
          </div>
          <select className="sort_selecter-select" onChange={sortChangeHandler}>
            <option value="name">과목명</option>
            <option value="classification">이수구분</option>
            <option value="dayAndTime">요일</option>
            <option value="credit">학점 순</option>
            <option value="profName">교수명(ㄱㄴㄷ)</option>
            <option value="lectureGrade">학년 순</option>
          </select>
        </div>
        {isLoading && <div className="loading">Loading...</div>}
        {!isLoading && (
          <div className="lecture_list">
            {lectureList.map((lecture) => (
              <LectureItem
                key={lecture._id}
                classification={lecture.classification}
                credit={lecture.credit}
                dayAndTime={lecture.dayAndTime}
                department={lecture.department}
                distrib={lecture.distrib}
                english={lecture.english}
                lectureGrade={lecture.lectureGrade}
                lectureId={lecture.lectureId}
                name={lecture.name}
                notice={lecture.notice}
                profName={lecture.profName}
                recommend={lecture.recommend}
                room={lecture.room}
                id={lecture._id}
                openClassModal={props.openClassModal}
              ></LectureItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Frame2;
