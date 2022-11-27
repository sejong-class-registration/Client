import React, { useEffect, useState } from "react";
import LectureList from "./LectureList";
import FilterModal from "./FilterModal";
import { GrFilter } from "react-icons/gr";
import { SlArrowUp } from "react-icons/sl";
import "./RecommendedLecturePage.scss";
import MainNavigation from "../../UI/MainNavigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { recommendedLecturesSliceActions } from "../../redux/slice/recommendedLecturesSlice";
import Loading from "../../UI/Loading";

const RecommendedLecturePage = () => {
  const dispatch = useDispatch();
  const recommendedLectures = useSelector(
    (state) => state.recommendedLecture.lecturesList
  );
  const [filteropen, setfilteropen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const filterButtonHandler = () => {
    setfilteropen((currentvalue) => !currentvalue);
  };

  const filtercloseHandler = () => {
    setfilteropen(false);
  };

  const lectureFetchHandler = async (convertedList) => {
    setIsLoading(true);
    const response = await axios.get(
      "https://sejong-enrollment.herokuapp.com/lectures/recommend",
      {
        params: {
          credit: convertedList.convertedGrades,
          area: convertedList.convertedSelections,
        },
      }
    );
    let fetchLecturesList = response.data.data.crawlings;
    dispatch(
      recommendedLecturesSliceActions.getRecommendedLecture(fetchLecturesList)
    );
    setIsLoading(false);
    console.log(fetchLecturesList);
  };

  useEffect(() => {
    lectureFetchHandler({
      convertedGrades: [0.5, 1, 2, 3],
      convertedSelections: [
        "사상과역사",
        "사회와문화",
        "자기계발과진로",
        "자연과과학기술",
        "세계와지구촌",
        "예술과체육",
      ],
    });
  }, []);

  const scrollUpHandler = () => {
    window.scrollTo(0,0);
  }

  const lecturesList = recommendedLectures.map((lecture, i) => (
    <LectureList
      key={lecture._id}
      rank={i + 1}
      title={lecture.name}
      number_code={lecture.lectureId}
      field={lecture.area}
      grade={lecture.credit}
      standard={lecture.recommendNumber}
    />
  ));

  return (
    <div className="recommended-lecture">
      <div className="recommended-lecture-header">
        <MainNavigation onPage={3} />
      </div>
      <button
        className="recommended-lecture-filterbutton"
        onClick={filterButtonHandler}
      >
        <span className="recommended-lecture-filterbutton-icon">
          <GrFilter size="25" />
        </span>
        <span className="recommended-lecture-filterbutton-word">필터</span>
      </button>
      <div className="recommended-lecture-list-notice">
        클릭시 복사가 가능합니다
      </div>

      {isLoading && (
        <div className="recommended-lecture-loading">
          <Loading />
        </div>
      )}
      {!isLoading && (
        <div className="recommended-lecture-list">
          <div className="recommended-lecture-list-exp">
            <span className="recommended-lecture-list-exp-exp1">순위</span>
            <span className="recommended-lecture-list-exp-title">제목</span>
            <span className="recommended-lecture-list-exp-exp">학수번호</span>
            <span className="recommended-lecture-list-exp-exp">교양영역</span>
            <span className="recommended-lecture-list-exp-exp">학점</span>
            <span className="recommended-lecture-list-exp-rank">수강횟수</span>
          </div>
          <ul>{lecturesList}</ul>
        </div>
      )}
      {filteropen && (
        <div>
          <FilterModal
            className="recommended-lecture-filtermodal"
            onClose={filtercloseHandler}
            onSearch={lectureFetchHandler}
          />
        </div>
      )}
      <div className="recommended-lecture-upbutton">
        <button onClick={scrollUpHandler}><SlArrowUp size = {25}/></button>
      </div>
    </div>
  );
};

export default RecommendedLecturePage;
