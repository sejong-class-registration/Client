import "./Frame2.scss";
import LectureItem from "./LectureItem";
import searchIcon from "../../common/icons/searchIcon.svg";
import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { sortFilterActions } from "../../redux/slice/sortFilterSlice";
import { userLecturesActions } from "../../redux/slice/userLecturesSlice";
import { filteredLectureActions } from "../../redux/slice/filteredLectureSlice";
import { takenCheckBoxActions } from "../../redux/slice/takenCheckBoxSlice";
import { cartCheckBoxActions } from "../../redux/slice/cartCheckBoxSlice";

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


  useEffect(() => {
    for (var lecture = 0; lecture < lecturesInSchedule.length; lecture++) {
      dispatch(
        userLecturesActions.changeUserLectures({
          userLectures: lecturesInSchedule[lecture].lectureId,
        })
      );
    }
  }, [lecturesInSchedule]);


  const getLectureList = async (info, sort) => {
    setIsLoading(true);
    const response = await axios(
      `https://port-0-sejong-enrollment-1jvasx23lbaoi6rj.gksl2.cloudtype.app/lectures?${
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
      }${
        info.lectureId === "" ? "" : `&lectureId=${info.lectureId}`
      }${
        info.grade === "" ? "" : info.grade === "전체" ? "" : `&grade=${info.grade}`
      }&sort=${sort}`
    );
    setLectureList(response.data.data.lectures);
    dispatch(
      filteredLectureActions.changefilteredLecture({
        filteredLecture: response.data.data.lectures,
      })
    );
    setIsLoading(false);
  };


  useEffect(() => {
    getLectureList(savedFilterInfo, savedSortInfo);
  }, [savedFilterInfo, savedSortInfo]);

  //checkbox state
  // const [takenChecked, setTakenChecked] = useState(false);
  const takenChecked = useSelector(
    (state) => state.takenCheckBox.takenCheckBox
  );
  const takenChangeHandler = (props) => {
    dispatch(takenCheckBoxActions.changeTakenCheckBox());
  };

  const cartChecked = useSelector((state) => state.cartCheckBox.cartCheckBox);
  const cartChangeHandler = (props) => {
    dispatch(cartCheckBoxActions.changeCartCheckBox());
  };

  const showHoverTime = (startTime, endTime) => {
    props.showHoverTime(startTime, endTime);
  }

  return (
    <div className="frame_2">
      <div className="filter">
        <button className="filter-button" onClick={props.openModal}>
          <GoSearch className="filter-button-img" src={searchIcon} alt="search-button" size = {15}></GoSearch>
        </button>
      </div>
      <div className="content2">
        <div className="sort_selecter">
          <div className="checkboxWrapper">
            <input
              type="checkbox"
              className="checkboxWrapper-cart-input"
              checked={cartChecked}
              onChange={cartChangeHandler}
              id = "cart"
            />
            <label for ="cart" className="checkboxWrapper-cart-label">
              추가한 강의 안보기
            </label>
          </div>
          <div className="checkboxWrapper">
            <input
              type="checkbox"
              className="checkboxWrapper-isTaken-input"
              checked={takenChecked}
              onChange={takenChangeHandler}
              id = "taken"
            />
            <label for = "taken" className="checkboxWrapper-isTaken-label">
              이수한 강의 안보기
            </label>
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
          <di className="lecture_list">
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
                showHoverTime = {showHoverTime}
              ></LectureItem>
            ))}
          </di>
        )}
      </div>
    </div>
  );
};

export default Frame2;
