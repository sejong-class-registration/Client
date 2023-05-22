import React from "react";
import AdminNavigation from "../../../UI/adminNavigation";
import "./graduateUpdate.scss";
import { useState } from "react";
import axios from "axios";

const GraduateUpdate = (props) => {
  const [selectList, setSelectList] = useState([
    "국어국문학과",
    "국제학부-영어영문학",
    "국제학부-일어일문학",
    "국제학부-중국통상학",
    "역사학과",
    "교육학과",
  ]);
  const tempSearchList = [
    {
      year: 2023,
      totalCredit: 130,
      MajorCredit: 72,
      MustMajoirCredit: 33,
      selectedMajorCredit: 39,
      GEcredit: 44,
      GE1credit: 14,
      GE2credit: 21,
      GE3credit: 9,
    },
    {
      year: 2022,
      totalCredit: 130,
      MajorCredit: 72,
      MustMajoirCredit: 33,
      selectedMajorCredit: 39,
      GEcredit: 44,
      GE1credit: 14,
      GE2credit: 21,
      GE3credit: 9,
    },
    {
      year: 2021,
      totalCredit: 130,
      MajorCredit: 72,
      MustMajoirCredit: 33,
      selectedMajorCredit: 39,
      GEcredit: 44,
      GE1credit: 14,
      GE2credit: 21,
      GE3credit: 9,
    },
    {
      year: 2020,
      totalCredit: 130,
      MajorCredit: 72,
      MustMajoirCredit: 33,
      selectedMajorCredit: 39,
      GEcredit: 44,
      GE1credit: 14,
      GE2credit: 21,
      GE3credit: 9,
    },
  ];
  const [selectedMajor, setSelectedMajor] = useState("국어국문학과");
  const [departmentSelected, setdepartmentSelected] = useState("인문과학대학");
  const [isSearched, setIsSearched] = useState(false);
  const [updateYearValue, setUpdateYearValue] = useState(2023);
  const [deleteYearValue, setdeleteYearValue] = useState(2023);
  const departmentSelectHandler = (e) => {
    setdepartmentSelected(e.target.value);
    if (e.target.value === "인문과학대학") {
      setSelectList([
        "국어국문학과",
        "국제학부-영어영문학",
        "국제학부-일어일문학",
        "국제학부-중국통상학",
        "역사학과",
        "교육학과",
      ]);
    } else if (e.target.value === "사회과학대학") {
      setSelectList(["행정학과", "미디어커뮤니케이션학과"]);
    } else if (e.target.value === "경영경제대학") {
      setSelectList(["경제학과", "경영학부"]);
    } else if (e.target.value === "호텔관광대학") {
      setSelectList([
        "호텔관광외식경영학부-호텔관광경영",
        "호텔관광외식경영학부-외식경영",
        "호텔외식관광프랜차이즈경영학과",
        "글로벌조리학과",
        "호텔외식비즈니스학과",
      ]);
    } else if (e.target.value === "자연과학대학") {
      setSelectList(["수학통계학과", "물리천문학과", "화학과"]);
    } else if (e.target.value === "생명과학대학") {
      setSelectList([
        "생명시스템학부-식품생명공학전공",
        "생명시스템학부-바이오융합공학",
        "생명시스템학부-바이오산업자원공학",
        "스마트생명산업융합학과",
      ]);
    } else if (e.target.value === "전자정보공학대학") {
      setSelectList(["전자정보통신공학과", "반도체시스템공학과"]);
    } else if (e.target.value === "소프트웨어융합대학") {
      setSelectList([
        "컴퓨터공학과",
        "정보보호학과",
        "소프트웨어학과",
        "데이터사이언스학과",
        "지능기전공학과",
        "창의소프트학부-디자인이노베이션",
        "창의소프트학부-만화애니메이션텍",
        "인공지능학과",
      ]);
    } else if (e.target.value === "공과대학") {
      setSelectList([
        "건축공학과",
        "건축학과",
        "건설환경공학과",
        "환경에너지공간융합학과",
        "지구자원시스템공학과",
        "기계공학과",
        "우주항공시스템공학부-우주항공공학전공",
        "우주항공시스템공학부-항공시스템공학전공",
        "나노신소재공학과",
        "양자원자력공학과",
        "국방시스템공학과",
        "항공시스템공학과",
      ]);
    } else if (e.target.value === "예체능대학") {
      setSelectList([
        "회화과",
        "패션디자인학과",
        "음악과",
        "체육학과",
        "무용과",
        "영화예술학과",
      ]);
    } else if (e.target.value === "법학부") {
      setSelectList(["법학부"]);
    } else if (e.target.value === "대양휴머니티칼리지") {
      setSelectList(["대양휴머니티칼리지"]);
    }
  };

  const majorChangeHandler = (e) => {
    setSelectedMajor(e.target.value);
  };

  const searchButtonHandler = () => {
    setIsSearched(true);
  };

  const updateYearHandler = (e) => {
    setUpdateYearValue(e.target.value);
  };

  const deleteYearHandler = (e) => {
    setdeleteYearValue(e.target.value);
  };

  const deleteFetchHandler = async () => {
    const response = await axios.delete(
      "https://port-0-sejong-enrollment-1jvasx23lbaoi6rj.gksl2.cloudtype.app/admin/graduation",
      {
        data: {
          graduationYear: deleteYearValue,
        },
      }
    );
    if (response.status === 201) {
      alert("해당 졸업요건이 삭제되었습니다.");
    } else {
      alert(response.data.message);
    }
  };

  const updateYearSubmitHandler = async(e) =>{
    e.preventDefault();
    const tempFile = e.target.files[0];
    const formData = new FormData();
    formData.append("xlsx", tempFile);
    formData.append("graduationYear", updateYearValue);
    const response = await axios.post(
      `https://port-0-sejong-enrollment-1jvasx23lbaoi6rj.gksl2.cloudtype.app/admin/graduation`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response); 
    if(response.status === 200){
      alert("졸업요건을 추가하는 데 성공하였습니다.");
    }
    else{
      alert("졸업요건을 추가하는 데 실패하였습니다");
    }
  } 


  const deleteYearSubmitHandler = () => {
    deleteFetchHandler();
  };

  return (
    <div className="graduateUpdate">
      <AdminNavigation onPage={11} />
      <div className="graduateUpdate-content">
        <div className="graduateUpdate-content-title">졸업요건 갱신</div>
        <div className="graduateUpdate-content-update">
          <div className="graduateUpdate-content-update-title">
            졸업요건 추가 / 수정
          </div>
          <div className="graduateUpdate-content-update-box">
            <label
              htmlFor=""
              className="graduateUpdate-content-update-box-label"
            >
              <input
                type="number"
                value={updateYearValue}
                onChange={updateYearHandler}
                className="graduateUpdate-content-update-box-input"
              />
              입학년도 졸업요건 추가
            </label>
            <label
              htmlFor="upload"
              className="graduateUpdate-content-update-box-upload"
            >
              <input
                id="upload"
                type="file"
                accept=".xlsx"
                className="graduateUpdate-content-update-box-upload-button"
                onChange={updateYearSubmitHandler}
              ></input>
              업로드
            </label>
          </div>
        </div>
        <div>
          <div className="graduateUpdate-content-update">
            <div className="graduateUpdate-content-update-title">
              졸업요건 삭제
            </div>
            <div className="graduateUpdate-content-update-box">
              <label
                htmlFor=""
                className="graduateUpdate-content-update-box-label"
              >
                <input
                  type="number"
                  value={deleteYearValue}
                  onChange={deleteYearHandler}
                  className="graduateUpdate-content-update-box-input"
                />
                입학년도 졸업요건 삭제
              </label>
              <label htmlFor="delete">
                {"        "}
                <button
                  id="delete"
                  className="graduateUpdate-content-delete-box-button"
                  onClick={deleteYearSubmitHandler}
                >
                  삭제
                </button>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="graduateUpdate-content-search">
            <div className="graduateUpdate-content-search-title">
              학과 졸업요건 검색
            </div>
            <div className="graduateUpdate-content-search-box">
              <label htmlFor="">
                <select
                  name="graduate"
                  id="graduate"
                  className="graduateUpdate-content-search-box-select"
                  onChange={departmentSelectHandler}
                  value={departmentSelected}
                >
                  <option value="인문과학대학">인문과학대학</option>
                  <option value="사회과학대학">사회과학대학</option>
                  <option value="경영경제대학">경영경제대학</option>
                  <option value="호텔관광대학">호텔관광대학</option>
                  <option value="자연과학대학">자연과학대학</option>
                  <option value="생명과학대학">생명과학대학</option>
                  <option value="전자정보공학대학">전자정보공학대학</option>
                  <option value="소프트웨어융합대학">소프트웨어융합대학</option>
                  <option value="공과대학">공과대학</option>
                  <option value="예체능대학">예체능대학</option>
                  <option value="대양휴머니티칼리지">대양휴머니티칼리지</option>
                  <option value="법학부">법학부</option>
                </select>
                학부
              </label>
              <label htmlFor="">
                <select
                  name="semester"
                  id="semester"
                  className="graduateUpdate-content-search-box-select"
                  onChange={majorChangeHandler}
                >
                  {selectList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                학과
              </label>
              <button
                id="search"
                className="graduateUpdate-content-search-box-button"
                onClick={searchButtonHandler}
                value={isSearched}
              >
                검색
              </button>
            </div>
          </div>
          {isSearched && (
            <div className="graduateUpdate-content-result">
              <div className="graduateUpdate-content-result-header">
                <span className="graduateUpdate-content-result-header-title">
                  컴퓨터공학과 졸업요건
                </span>
                <div>
                  <button className="graduateUpdate-content-result-header-button">
                    수정
                  </button>
                  <button className="graduateUpdate-content-result-header-button">
                    저장
                  </button>
                </div>
              </div>
              <table border="1" className="graduateUpdate-content-result-table">
                <thead>
                  <th scope="col">입학년도</th>
                  <th scope="col">총학점</th>
                  <th
                    scope="col"
                    className="graduateUpdate-content-result-table-major"
                  >
                    전공학점
                  </th>
                  <th
                    scope="col"
                    className="graduateUpdate-content-result-table-major"
                  >
                    전공필수 / 전공선택
                  </th>
                  <th
                    scope="col"
                    className="graduateUpdate-content-result-table-GE"
                  >
                    {" "}
                    교양학점
                  </th>
                  <th
                    scope="col"
                    className="graduateUpdate-content-result-table-GE"
                  >
                    공통교양 / 균형교양 / 학문기초교양
                  </th>
                </thead>
                {tempSearchList.map((item) => (
                  <tr
                    value={item.year}
                    key={item.year}
                    className="graduateUpdate-content-result-table-tr"
                  >
                    <td>{item.year}</td>
                    <td>{item.totalCredit}</td>
                    <td>{item.MajorCredit}</td>
                    <td>
                      {item.MustMajoirCredit} / {item.selectedMajorCredit}
                    </td>
                    <td>{item.GEcredit}</td>
                    <td>
                      {item.GE1credit} / {item.GE2credit} / {item.GE3credit}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GraduateUpdate;
