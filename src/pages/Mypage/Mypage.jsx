import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainNavigation from "../../UI/MainNavigation";
import { SlLockOpen, SlUser } from "react-icons/sl";
import "./Mypage.scss";
import axios from "axios";
import ExcelUploadPage from "../../UI/excelUploadPage";
import { userInfoActions } from "../../redux/slice/userSlice";

const Mypage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [isCertification, setIsCertification] = useState(false);
  const [password, setPassword] = useState("");
  const [checkboxOn, setCheckboxOn] = useState(userInfo.dobuleMajor);
  const [enteredInput, setEnteredInput] = useState({
    name: userInfo.name,
    studentId: userInfo.studentId,
    userGrade: userInfo.userGrade,
    major: userInfo.major,
    doubleMajor: userInfo.doubleMajor,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    loginFetchHandler();
  };

  const inputChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginFetchHandler = async () => {
    const response = await axios.post(
      "https://sejong-enrollment.herokuapp.com/users/signin",
      {
        studentId: userInfo.studentId,
        password: password,
      }
    );
    if (response.status === 201) {
      setIsCertification(true);
    } else {
      alert(response.data.message);
    }
  };

  const formChangeHandler = (event) => {
    setEnteredInput((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

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
    dispatch(userInfoActions.saveUserInfo(enteredInput));
    console.log(userInfo);
    //다시 수정하는거 보내주어야댐
  };

  const onReset = () => {
    setEnteredInput({
      name: userInfo.name,
      studentId: userInfo.studentId,
      userGrade: userInfo.userGrade,
      major: userInfo.major,
      dobuleMajor: userInfo.dobuleMajor,
    });
  };

  return (
    <div className="mypage">
      <MainNavigation />
      <div className="mypage-title">My Page</div>
      {!isCertification && (
        <form className="mypage-login-form" onSubmit={submitHandler}>
          <div className="mypage-login-form-txt">
            개인정보 보호를 위해 비밀번호를 입력해주세요
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
          <button>인증</button>
        </form>
      )}
      {isCertification && (
        <div>
          <form className="mypage-userinfo" onSubmit={userinfoChangeHandler}>
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
                value={enteredInput.dobuleMajor}
                onChange={checkboxHandler}
              />
              {checkboxOn && (
                <div>
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
                <button className="mypage-userinfo-buttons-submit">
                  정보 수정
                </button>
              </div>
            </div>
          </form>
          <div>
            <div>엑셀 파일 업로드</div>
            <ExcelUploadPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mypage;
