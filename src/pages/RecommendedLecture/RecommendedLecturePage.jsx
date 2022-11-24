import React, { useEffect, useState } from "react";
import LectureList from "./LectureList";
import FilterModal from "./FilterModal";
import { GrFilter } from "react-icons/gr";
import "./RecommendedLecturePage.scss";
import MainNavigation from "../../UI/MainNavigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { recommendedLecturesSliceActions } from "../../redux/slice/recommendedLecturesSlice";
import Loading from "../../UI/Loading";

const MAJOR_DUMMY_LIST = [
  {
    id: "l1",
    title: "알고리즘 및 실습",
    number_code: "000001",
    grade: 3,
    completed: false,
  },
  {
    id: "l2",
    title: "고급 C 프로그래밍",
    number_code: "000002",
    grade: 3,
    completed: false,
  },
  {
    id: "l3",
    title: "프로그래밍 입문 - P",
    number_code: "000003",
    grade: 3,
    completed: false,
  },
  {
    id: "l4",
    title: "컴퓨터 구조",
    number_code: "000004",
    grade: 3,
    completed: false,
  },
  {
    id: "l5",
    title: "컴퓨터와 네트워크",
    number_code: "000005",
    grade: 3,
    completed: false,
  },
  {
    id: "l6",
    title: "자료구조",
    number_code: "000006",
    grade: 3,
    completed: false,
  },
  {
    id: "l7",
    title: "운영체제",
    number_code: "000007",
    grade: 3,
    completed: false,
  },
  {
    id: "l8",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  },
  {
    id: "l9",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  },
  {
    id: "l10",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  },
  {
    id: "l11",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  },
  {
    id: "l12",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  },
  {
    id: "l13",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  },
];
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

  const lecturesList = recommendedLectures.map((lecture) => (
    <LectureList
      key={lecture._id}
      // rank={lecture.recommendNumber}
      title={lecture.name}
      number_code={lecture.lectureId}
      field={lecture.area}
      grade={lecture.credit}
      standard={lecture.recommendNumber}
    />
  ));

  return (
    <div className="recommended-lecture">
      <MainNavigation onPage={3} />
      <button
        className="recommended-lecture-filterbutton"
        onClick={filterButtonHandler}
      >
        <span className="recommended-lecture-filterbutton-icon">
          <GrFilter size="25" />
        </span>
        <span className="recommended-lecture-filterbutton-word">필터</span>
      </button>
      {isLoading && (
        <div className="recommended-lecture-loading">
          <Loading />
        </div>
      )}
      {!isLoading && (
        <div className="recommended-lecture-list">
          <div className="recommended-lecture-list-exp">
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
    </div>
  );
};

export default RecommendedLecturePage;
