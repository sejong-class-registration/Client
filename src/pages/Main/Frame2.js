import "./Frame2.scss";
import LectureItem from "./LectureItem";
import searchIcon from "../../common/icons/searchIcon.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Frame2 = (props) => {
  const [lectureList, setLectureList] = useState([]);
  const savedFilterInfo = useSelector((state) => state.classFilter.classFilter);

  const getLectureList = async (info) => {
    const response = await axios(
      `https://sejong-enrollment.herokuapp.com/lectures?${
        info.department === "" ? "" : `&department=${info.department}`
      }${info.name === "" ? "" : `&name=${info.name}`}${
        info.profName === "" ? "" : `&profName=${info.profName}`
      }${
        info.classification === ""
          ? ""
          : info.classification === "전체"
          ? ""
          : `&classification=${info.classification}`
      }`
    );
    // console.log(info.department);
    setLectureList(response.data.data.lectures);
  };

  // console.log(lectureList);

  useEffect(() => {
    getLectureList(savedFilterInfo);
    // console.log(savedFilterInfo);
  }, [savedFilterInfo]);
  return (
    <div className="frame_2">
      <div className="filter">
        <button className="filter-button" onClick={props.openModal}>
          <img className="filter-button-img" src={searchIcon} alt=""></img>
        </button>
      </div>
      <div className="content2">
        <div className="sort_selecter">
          <select className="sort_selecter-select">
            <option value="가나다 순">과목명</option>
            <option value="이수 구분">이수구분</option>
            <option value="요일 순">요일</option>
            <option value="평점 순">평점</option>
            <option value="교수명 순">교수명</option>
          </select>
        </div>
        <div className="lecture_list">
          {lectureList.map((lecture) => (
            <LectureItem
              key={lecture._id}
              classification={lecture.classification}
              credit={lecture.credit}
              dayAndTime={lecture.dayAndTime}
              department={lecture.department}
              distrib={lecture.distrib}
              lectureGrade={lecture.lectureGrade}
              lectureId={lecture.lectureId}
              name={lecture.name}
              profName={lecture.profName}
              room={lecture.room}
              id={lecture._id}
              openClassModal={props.openClassModal}
            ></LectureItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frame2;
