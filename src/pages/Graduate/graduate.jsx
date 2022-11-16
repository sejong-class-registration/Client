import React, { useState } from "react";
import MainNavigation from "../../UI/MainNavigation";
import "./graduate.scss";
import GraduateMajorList from "./graduateMajorList";

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
    completed: true,
  },
  {
    id: "l7",
    title: "운영체제",
    number_code: "000007",
    grade: 3,
    completed: true,
  },
  {
    id: "l8",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  }, {
    id: "l9",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  }, {
    id: "l10",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  }, {
    id: "l11",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  }, {
    id: "l12",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  }, {
    id: "l13",
    title: "확률과 프로그래밍",
    number_code: "000008",
    grade: 3,
    completed: true,
  },
];

const Graduation = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const lecturesList = MAJOR_DUMMY_LIST.map((lecture) => (
    <GraduateMajorList
      key={lecture.id}
      title={lecture.title}
      number_code={lecture.number_code}
      grade={lecture.grade}
      completed={lecture.completed}
    />
  ));

  const uploadHandler = () => {
    setIsUploaded(true);
  };

  return (
    <div className="graduation">
      <MainNavigation onPage={4} />
      {!isUploaded && (
        <div>
          자료를 올려주세요
          <button onClick={uploadHandler}>업로드!</button>
        </div>
      )}
      {isUploaded && (
        <div>
          <div className="graduation-total">
            <span className="graduation-total-title">총 이수 학점</span>
            <div className="graduation-total-score">
              <span className="graduation-total-score1">30 </span>
              <span className="graduation-total-score2">/ 180</span>
            </div>
          </div>
          <div className="graduation-major">
            <span className="graduation-major-title">전공</span>
            <span className="graduation-major-1-title">전공필수</span>
            <span className="graduation-major-1-score">25 / 50</span>
            <ul className="graduation-major-1">{lecturesList}</ul>
            <span className="graduation-major-2-title">전공선택</span>
            <ul className="graduation-major-2">{/* {lecturesList} */}</ul>
          </div>
          <div className="graduation-GE">
            <span className="graduation-GE-title">교양</span>
            <ul className="graduation-GE-1">교양필수</ul>
            <ul className="graduation-GE-2">학문기초교양필수</ul>
            <ul className="graduation-GE-3">교양선택</ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graduation;
