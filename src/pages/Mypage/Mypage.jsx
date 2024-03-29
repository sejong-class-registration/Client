import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainNavigation from "../../UI/MainNavigation";
import {
  SlLockOpen,
  SlUser,
  SlUserUnfollow,
  SlCloudUpload,
} from "react-icons/sl";
import "./Mypage.scss";
import axios from "axios";
import ExcelUploadPage from "../../UI/excelUploadPage";
import { userInfoActions } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import Loading2 from "../../UI/Loading2";

const Mypage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [isSecession, setSecession] = useState(false);
  const [password, setPassword] = useState("");
  const [checkboxOn, setCheckboxOn] = useState(!!userInfo.doubleMajor);
  const [isLoading, setIsLoading] = useState(false);
  const [enteredInput, setEnteredInput] = useState({
    name: userInfo.name,
    studentId: userInfo.studentId,
    userGrade: userInfo.userGrade,
    major: userInfo.major,
    doubleMajor: userInfo.doubleMajor,
    recommendLecture: userInfo.recommendLecture,
    takenLectures: userInfo.takenLectures,
    geArea: userInfo.geArea,
    geAreaTaken: userInfo.geAreaTaken,
    totalCredits: userInfo.totalCredits,
  });
  const majorList = [
    "건설환경공학과",
    "건축공학과",
    "건축학과",
    "경영학부",
    "경제학과",
    "교육학과",
    "국방시스템공학과",
    "국어국문학과",
    "국제학부-영어영문학",
    "국제학부-일어일문학",
    "국제학부-중국통상학",
    "글로벌조리학과",
    "기계공학과",
    "나노신소재공학과",
    "데이터사이언스학과",
    "무용과",
    "물리천문학과",
    "미디어커뮤니케이션학과",
    "반도체시스템공학과",
    "법학부",
    "생명시스템학부-바이오산업자원공학",
    "생명시스템학부-바이오융합공학",
    "생명시스템학부-식품생명공학전공",
    "소프트웨어학과",
    "수학통계학과",
    "스마트생명산업융합학과",
    "양자원자력공학과",
    "역사학과",
    "영화예술학과",
    "우주항공시스템공학부-우주항공공학전공",
    "우주항공시스템공학부-항공시스템공학전공",
    "음악과",
    "인공지능학과",
    "전자정보통신공학과",
    "정보보호학과",
    "지구자원시스템공학과",
    "지능기전공학과",
    "창의소프트학부-디자인이노베이션",
    "창의소프트학부-만화애니메이션텍",
    "체육학과",
    "컴퓨터공학과",
    "패션디자인학과",
    "항공시스템공학과",
    "행정학과",
    "호텔관광외식경영학부-외식경영",
    "호텔관광외식경영학부-호텔관광경영",
    "호텔외식관광프랜차이즈경영학과",
    "호텔외식비즈니스학과",
    "화학과",
    "환경에너지공간융합학과",
    "회화과",
  ];

  const inputChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const formChangeHandler = (event) => {
    setEnteredInput((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

  useEffect(() => {
    setEnteredInput({
      name: enteredInput.name,
      studentId: userInfo.studentId,
      userGrade: enteredInput.userGrade,
      major: enteredInput.major,
      doubleMajor: enteredInput.doubleMajor,
      recommendLecture: userInfo.recommendLecture,
      takenLectures: userInfo.takenLectures,
      geArea: userInfo.geArea,
      geAreaTaken: userInfo.geAreaTaken,
      totalCredits: userInfo.totalCredits,
    });
  }, [
    enteredInput.name,
    enteredInput.userGrade,
    enteredInput.major,
    enteredInput.doubleMajor,
  ]);

  useEffect(() => {}, [enteredInput.doubleMajor]);

  const checkboxHandler = () => {
    if (checkboxOn == false) {
      setCheckboxOn(true);
    } else {
      setCheckboxOn(false);
    }

    if (!checkboxOn) {
      setEnteredInput((prev) => {
        return { ...prev, doubleMajor: "컴퓨터공학과" };
      });
    } else {
      setEnteredInput((prev) => {
        return { ...prev, doubleMajor: "" };
      });
    }
  };

  const userinfoChangeHandler = (event) => {
    event.preventDefault();
    userInfoFetchHandler();
  };

  const userInfoFetchHandler = async () => {
    const response = await axios.post(
      `https://port-0-sejong-enrollment-1jvasx23lbaoi6rj.gksl2.cloudtype.app/users/${userInfo.studentId}`,
      {
        name: enteredInput.name,
        userGrade: +enteredInput.userGrade,
        major: enteredInput.major,
        doubleMajor: enteredInput.doubleMajor,
      }
    );
    if (response.status === 201) {
      alert("정보 수정되었습니다");
      dispatch(userInfoActions.saveUserInfo(enteredInput));
      navigate("/mypage");
    }
  };

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    if (!getToken) {
      navigate("/");
    }

    var e = {
      target: {
        value: userInfo.department,
      },
    };
  }, []);

  const onReset = () => {
    setEnteredInput({
      name: userInfo.name,
      studentId: userInfo.studentId,
      userGrade: userInfo.userGrade,
      major: userInfo.major,
      doubleMajor: userInfo.doubleMajor,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    secessionFetchHandler();
  };

  const secessionFetchHandler = async () => {
    setIsLoading(true);
    const response = await axios.delete(
      `https://port-0-sejong-enrollment-1jvasx23lbaoi6rj.gksl2.cloudtype.app/users/${userInfo.studentId}`,
      {
        data: {
          Id: userInfo.studentId,
          password: password,
        },
      }
    );
    setIsLoading(false);
    if (response.status === 201) {
      alert("탈퇴되었습니다ㅠㅠ");
      localStorage.removeItem("token");
      dispatch(userInfoActions.clearUserInfo());
      navigate("/");
    } else {
      alert(response.data.message);
    }
  };

  const secessionHandler = () => {
    setSecession((prev) => !prev);
  };

  return (
    <div className="mypage">
      <MainNavigation />
      <div className="mypage-title">My Page</div>
      {isSecession && (
        <form className="mypage-login-form" onSubmit={submitHandler}>
          <div className="mypage-login-form-txt">
            회원탈퇴를 위해 비밀번호를 입력해주세요
          </div>
          <div className="mypage-login-form-id">
            <label htmlFor="id">
              <SlUser size={25} />
            </label>
            <input type="text" value={userInfo.studentId} />
          </div>
          <div className="mypage-login-form-pw">
            <label htmlFor="pw">
              <SlLockOpen size={25} />
            </label>
            <input
              type="password"
              id="pw"
              placeholder="password"
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <button className="mypage-login-form-button1">탈퇴..</button>
            <button
              className="mypage-login-form-button2"
              onClick={secessionHandler}
            >
              취소!!
            </button>
          </div>
          {isLoading && (
            <div className="mypage-login-form-loading">
              <Loading2 />
            </div>
          )}
        </form>
      )}
      {!isSecession && (
        <div>
          <form className="mypage-userinfo" onSubmit={userinfoChangeHandler}>
            <div>
              <label htmlFor="studentId">학번</label>
              <input
                id="studentId"
                type="text"
                value={enteredInput.studentId}
                readOnly
              />
              <span className="mypage-userinfo-txt">수정불가</span>
            </div>
            <div>
              <label htmlFor="name">이름</label>
              <input
                id="name"
                type="text"
                value={enteredInput.name}
                onChange={formChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="userGrade">학년</label>
              <select
                id="userGrade"
                value={enteredInput.userGrade}
                onChange={formChangeHandler}
              >
                <option value={1}>1학년</option>
                <option value={2}>2학년</option>
                <option value={3}>3학년</option>
                <option value={4}>4학년</option>
              </select>
            </div>
            <div>
              <label htmlFor="major">전공</label>
              {/* <select
                id="major"
                value={enteredInput.major}
                onChange={formChangeHandler}
              > */}
              <select
                id="major"
                onChange={formChangeHandler}
                tabIndex="6"
                defaultValue={userInfo.major}
              >
                {majorList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              {/* </select> */}
            </div>
            <div>
              {/* <label htmlFor="doubleMajor">복수전공</label>
              <input
                className="mypage-userinfo-checkbox"
                type="checkbox"
                checked={checkboxOn}
                onChange={checkboxHandler}
              />
              {checkboxOn && (
                <div className="mypage-userinfo-doublemajor">
                  <select
                    id="doubleMajor"
                    value={enteredInput.doubleMajor}
                    onChange={formChangeHandler}
                  >
                    <option value="컴퓨터공학과">컴퓨터공학과</option>
                    <option value="소프트웨어학과">소프트웨어학과</option>
                    <option value="정보보호학과">정보보호학과</option>
                    <option value="데이터사이언스학과">
                      데이터사이언스학과
                    </option>
                    <option value="지능기전공학부">지능기전공학부</option>
                    <option value="인공지능학과">인공지능학과</option>
                  </select>
                </div>
              )} */}
              <div className="mypage-userinfo-buttons">
                <button
                  className="mypage-userinfo-buttons-reset"
                  type="button"
                  onClick={onReset}
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="mypage-userinfo-buttons-submit"
                >
                  정보 수정
                </button>
              </div>
            </div>
          </form>
          <div className="mypage-userinfo-excel">
            <div className="mypage-userinfo-excel-title">
              <span className="mypage-userinfo-excel-title-icon">
                <SlCloudUpload />
              </span>
              엑셀 파일 업로드
              <div className="mypage-userinfo-excel-exp">
                세종대학교 학사 정보 시스템 ▷ 수업 / 성적 ▷ 기성적 및 강의 평가
                ▷ 기이수 성적 조회 ▷ 성적 엑셀 다운로드
              </div>
              <div>
                <a
                  href="https://sjpt.sejong.ac.kr/"
                  target="_blank"
                  className="graduation-excel-upload-help-link"
                >
                  세종대학교 학사정보시스템 바로가기
                </a>
              </div>
            </div>
            <ExcelUploadPage />
          </div>
          <div className="mypage-userinfo-secession">
            <div className="mypage-userinfo-secession-title">회원 탈퇴</div>
            <button
              className="mypage-userinfo-secession-button"
              onClick={secessionHandler}
            >
              <SlUserUnfollow size={25} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mypage;
