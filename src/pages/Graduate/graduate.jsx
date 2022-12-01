import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { graduateLectureSliceActions } from "../../redux/slice/graduateLecture";
import ExcelUploadPage from "../../UI/excelUploadPage";
import MainNavigation from "../../UI/MainNavigation";
import "./graduate.scss";
import GraduateGEList from "./graduateGEList";
import GraduateMajorList from "./graduateMajorList";

const Graduation = () => {
  const dispatch = useDispatch();
  const savedGraduateLecture = useSelector(
    (state) => state.graduateLecture.graduateLecture
  );
  const isUploaded = useSelector(
    (state) => state.graduateLecture.graduateLecture.totalGE1.length > 0
  );

  const uncompletedMustMajorLecture = savedGraduateLecture.totalMustMajor.filter(
    (x) => !savedGraduateLecture.takenMustMajor.includes(x)
  );
  const uncompletedSelectLecture = savedGraduateLecture.totalSelectMajor.filter(
    (x) => !savedGraduateLecture.takenSelectMajor.includes(x)
  );
  const uncompletedGE1 = savedGraduateLecture.totalGE1.filter(
    (x) => !savedGraduateLecture.takenGE1.includes(x)
  );
  const uncompletedGE2 = savedGraduateLecture.totalGE2.filter(
    (x) => !savedGraduateLecture.takenGE2.includes(x)
  );
  const uncompletedGE3 = savedGraduateLecture.totalGE3.filter(
    (x) => !savedGraduateLecture.takenGE3.includes(x)
  );

  const uncompletedMustMajorLecturesList = uncompletedMustMajorLecture.map(
    (lecture, i) => <GraduateMajorList key={i} title={lecture} completed={0} />
  );
  const completedMustMajorLecturesList = savedGraduateLecture.takenMustMajor.map(
    (lecture, i) => <GraduateMajorList key={i} title={lecture} completed={1} />
  );
  const uncompletedSelectMajorLecturesList = uncompletedSelectLecture.map(
    (lecture, i) => <GraduateMajorList key={i} title={lecture} completed={0} />
  );
  const completedSelectMajorLecturesList = savedGraduateLecture.takenSelectMajor.map(
    (lecture, i) => <GraduateMajorList key={i} title={lecture} completed={1} />
  );

  const uncompletedGE1LecturesList = uncompletedGE1.map((lecture, i) => (
    <GraduateGEList key={i} title={lecture} completed={0} />
  ));
  const completedGE1LecturesList = savedGraduateLecture.takenGE1.map(
    (lecture, i) => <GraduateGEList key={i} title={lecture} completed={1} />
  );
  const uncompletedGE2LecturesList = uncompletedGE2.map((lecture, i) => (
    <GraduateGEList key={i} title={lecture} completed={0} />
  ));
  const completedGE2LecturesList = savedGraduateLecture.takenGE2.map(
    (lecture, i) => <GraduateGEList key={i} title={lecture} completed={1} />
  );
  const uncompletedGE3LecturesList = uncompletedGE3.map((lecture, i) => (
    <GraduateGEList key={i} title={lecture} completed={0} />
  ));
  const completedGE3LecturesList = savedGraduateLecture.takenGE3.map(
    (lecture, i) => <GraduateGEList key={i} title={lecture} completed={1} />
  );

  useEffect(() => {
    getGraduateData();
    // console.log(savedGraduateLecture);
    // console.log(isUploaded)
  }, []);

  const userInfo = useSelector((state) => state.userInfo.userInfo);

  const getGraduateData = async () => {
    const response = await axios(
      `https://sejong-enrollment.herokuapp.com/graduation?studentId=${userInfo.studentId}`
    ).then((response) => {
      if (response.status === 200) {
        console.log(response.data.data);
        dispatch(
          graduateLectureSliceActions.saveGraduateLectures(response.data.data)
        );
      } else {
        // alert()
      }
    });
  };

  return (
    <div className="graduation">
      <div className="graduation-header">
        <MainNavigation onPage={4} />
      </div>
      {!isUploaded && (
        <div className="graduation-excel">
          <div className="graduation-excel-title">졸업요건 확인</div>
          <div className="graduation-excel-upload">
            <span className="graduation-excel-upload-txt1">
              기이수성적 엑셀파일을 올려주세요!
            </span>
            <div className="graduation-excel-upload-file">
              <ExcelUploadPage />
            </div>
          </div>
          <div className="graduation-excel-upload-help">
            <div className="graduation-excel-upload-help-title">
              엑셀파일 받는법
            </div>
            <div className="graduation-excel-upload-help-txt1">
              세종대학교 학사 정보 시스템 ▷ 수업 / 성적 ▷ 기성적 및 강의 평가 ▷
              기이수 성적 조회 ▷ 성적 엑셀 다운로드
            </div>
            <a
              href="https://sjpt.sejong.ac.kr/"
              target="_blank"
              className="graduation-excel-upload-help-link"
            >
              세종대학교 학사정보시스템 바로가기
            </a>
          </div>
        </div>
      )}
      {isUploaded && (
        <div>
          <div className="graduation-total">
            <span className="graduation-total-title">총 이수 학점</span>
            <div className="graduation-total-score">
              <span className="graduation-total-score1">60 </span>
              <span className="graduation-total-score2">/ 140</span>
            </div>
          </div>
          <div className="graduation-major">
            <span className="graduation-major-title">전공</span>
            <span className="graduation-major-title-txt">
              클릭시 복사됩니다
            </span>
            <div className="graduation-major-1-txt">
              <span className="graduation-major-1-title">전공필수</span>
              <span className="graduation-major-1-score">
                {savedGraduateLecture.takenMustMajorCredit} /{" "}
                {savedGraduateLecture.totalMustMajorCredit}
              </span>
            </div>
            <ul className="graduation-major-1">
              {uncompletedMustMajorLecturesList}
              {completedMustMajorLecturesList}
            </ul>
            <div className="graduation-major-2-txt">
              <span className="graduation-major-2-title">전공선택</span>
              <span className="graduation-major-2-score">
                {savedGraduateLecture.takenSelectMajorCredit} /{" "}
                {savedGraduateLecture.totalSelectMajorCredit}
              </span>
            </div>
            <ul className="graduation-major-2">
              {uncompletedSelectMajorLecturesList}
              {completedSelectMajorLecturesList}
            </ul>
          </div>
          <div className="graduation-GE">
            <span className="graduation-GE-title">교양</span>
            <span className="graduation-major-title-txt">
              클릭시 복사됩니다
            </span>
            <div className="graduation-GE-1-txt">
              <span className="graduation-GE-1-title">공통필수</span>
              <span className="graduation-GE-1-score">10 / 30</span>
            </div>
            <ul className="graduation-GE-1">
              {uncompletedGE1LecturesList}
              {completedGE1LecturesList}
            </ul>
            <div className="graduation-GE-2-txt">
              <span className="graduation-GE-2-title">선택필수</span>
              <span className="graduation-GE-2-score">10 / 10</span>
            </div>
            <ul className="graduation-GE-2">
              {uncompletedGE2LecturesList}
              {completedGE2LecturesList}
            </ul>
            <div className="graduation-GE-3-txt">
              <span className="graduation-GE-3-title">학문기초</span>
              <span className="graduation-GE-3-score">12 / 25</span>
            </div>
            <ul className="graduation-GE-3">
              {uncompletedGE3LecturesList}
              {completedGE3LecturesList}
            </ul>
          </div>
          <div className="graduation-GE-area">
            <div className="graduation-GE-area-title">균형교양필수영역</div>
            <span className="graduation-GE-area-txt">
              6개 영역 중{" "}
              <span className="graduation-GE-area-txt-red">n개</span> 영역에서
              합 <span className="graduation-GE-area-txt-red">n학점</span>을
              들어야함
            </span>
            <div className="graduation-GE-area-area">
              <span className="graduation-GE-area-area-title">사상과역사</span>
              <div className="graduation-GE-area-area-untaken">미이수</div>
            </div>
            <div className="graduation-GE-area-area">
              <span className="graduation-GE-area-area-title">사회와문화</span>
              <div className="graduation-GE-area-area-untaken">미이수</div>
            </div>
            <div className="graduation-GE-area-area">
              <span className="graduation-GE-area-area-title">
                자기계발과진로
              </span>
              <div className="graduation-GE-area-area-untaken">미이수</div>
            </div>
            <div className="graduation-GE-area-area">
              <span className="graduation-GE-area-area-title">
                자연과과학기술
              </span>
              <div className="graduation-GE-area-area-taken">이수</div>
            </div>
            <div className="graduation-GE-area-area">
              <span className="graduation-GE-area-area-title">
                세계와지구촌
              </span>
              <div className="graduation-GE-area-area-taken">이수</div>
            </div>
            <div className="graduation-GE-area-area">
              <span className="graduation-GE-area-area-title">예술과체육</span>
              <div className="graduation-GE-area-area-untaken">미이수</div>
            </div>
          </div>
          <div className="graduation-excel-reupload">
            <span>엑셀파일 갱신</span>
            <ExcelUploadPage />
          </div>
          <div className="graduation-margin">
            <p>copyright ⓒ 2022 열일곱스물하나</p>
            <p>이기성 김찬규 최가빈 김윤희</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graduation;
