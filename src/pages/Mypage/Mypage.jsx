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

const Mypage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [isSecession, setSecession] = useState(false);
  const [password, setPassword] = useState("");
  const [checkboxOn, setCheckboxOn] = useState(userInfo.doubleMajor);
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

  const checkboxHandler = () => {
    setCheckboxOn((prev) => !prev);

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
    // console.log(userInfo);
  };

  const userInfoFetchHandler = async () => {
    const response = await axios.patch(
      `https://sejong-enrollment.herokuapp.com/users/${userInfo.studentId}`,
      {
        data: {
          name: enteredInput.name,
          userGrade: +enteredInput.userGrade,
          major: enteredInput.major,
          doubleMajor: enteredInput.doubleMajor,
        },
      }
    );
    console.log(response);
    if (response.status === 201) {
      alert("정보 수정되었습니다");
      dispatch(userInfoActions.saveUserInfo(enteredInput));
      navigate("/mypage");
    }
  };

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
    const response = await axios.delete(
      `https://sejong-enrollment.herokuapp.com/users/${userInfo.studentId}`,
      {
        data: {
          Id: userInfo.studentId,
          password: password,
        },
      }
    );
    console.log(response);
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
              <select
                id="major"
                value={enteredInput.major}
                onChange={formChangeHandler}
              >
                <option value="컴퓨터공학과">컴퓨터공학과</option>
                <option value="소프트웨어학과">소프트웨어학과</option>
                <option value="정보보호학과">정보보호학과</option>
                <option value="데이터사이언스학과">데이터사이언스학과</option>
                <option value="지능기전공학부">지능기전공학부</option>
                <option value="인공지능학과">인공지능학과</option>
              </select>
            </div>
            <div>
              <label htmlFor="doubleMajor">복수전공</label>
              <input
                className="mypage-userinfo-checkbox"
                type="checkbox"
                value={enteredInput.doubleMajor}
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
              )}
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
