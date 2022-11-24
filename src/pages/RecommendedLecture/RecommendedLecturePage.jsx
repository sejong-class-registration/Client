import React, { useState } from "react";
import LectureList from "./LectureList";
import FilterModal from "./FilterModal";
import { GrFilter } from "react-icons/gr";
import "./RecommendedLecturePage.scss";
import MainNavigation from "../../UI/MainNavigation";

const DUMMY_LIST = [
  {
    id: "l1",
    rank: 1,
    title: "세계사: 인간과 문명",
    number_code: "000001",
    field: "사상과 역사",
    grade: 3,
    standard: 1000,
  },
  {
    id: "l2",
    rank: 2,
    title: "세계사: 인간과 문명",
    number_code: "000002",
    field: "사상과 역사",
    grade: 3,
    standard: 1000,
  },
  {
    id: "l3",
    rank: 3,
    title: "세계사: 인간과 문명",
    number_code: "000003",
    field: "사상과 역사",
    grade: 3,
    standard: 1000,
  },
  {
    id: "l4",
    rank: 4,
    title: "세계사: 인간과 문명",
    number_code: "000004",
    field: "사상과 역사",
    grade: 3,
    standard: 1000,
  },
  {
    id: "l5",
    rank: 5,
    title: "세계사: 인간과 문명",
    number_code: "000005",
    field: "사상과 역사",
    grade: 3,
    standard: 1000,
  },
  {
    id: "l6",
    rank: 6,
    title: "세계사: 인간과 문명",
    number_code: "000006",
    field: "사상과 역사",
    grade: 3,
    standard: 1000,
  },
  {
    id: "l7",
    rank: 7,
    title: "세계사: 인간과 문명",
    number_code: "000007",
    field: "사상과 역사",
    grade: 3,
    standard: 1000,
  },
  {
    id: "l8",
    rank: 8,
    title: "세계사: 인간과 문명",
    number_code: "000008",
    field: "사상과 역사",
    grade: 3,
    standard: 1000,
  },
];

const lecturesList = DUMMY_LIST.map((lecture) => (
  <LectureList
    key={lecture.id}
    rank={lecture.rank}
    title={lecture.title}
    number_code={lecture.number_code}
    field={lecture.field}
    grade={lecture.grade}
    standard={lecture.standard}
  />
));

const RecommendedLecturePage = () => {
  const [filteropen, setfilteropen] = useState(false);

  const filterButtonHandler = () => {
    setfilteropen((currentvalue) => !currentvalue);
  };

  const filtercloseHandler = () => {
    setfilteropen(false);
  };
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
      <div className="recommended-lecture-list">
        <ul>{lecturesList}</ul>
      </div>
      {filteropen && (
        <div>
          <FilterModal onClose={filtercloseHandler} />
        </div>
      )}
    </div>
  );
};

export default RecommendedLecturePage;
