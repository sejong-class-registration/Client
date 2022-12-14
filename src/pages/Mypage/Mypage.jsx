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
    if (checkboxOn == false) {
      setCheckboxOn(true);
    } else {
      setCheckboxOn(false);
    }

    if (!checkboxOn) {
      setEnteredInput((prev) => {
        return { ...prev, doubleMajor: "??????????????????" };
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
    const response = await axios.post(
      `https://sejong-enrollment.herokuapp.com/users/${userInfo.studentId}`,
      {
        name: enteredInput.name,
        userGrade: +enteredInput.userGrade,
        major: enteredInput.major,
        doubleMajor: enteredInput.doubleMajor,
      }
    );
    if (response.status === 201) {
      alert("?????? ?????????????????????");
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
    setIsLoading(true);
    const response = await axios.delete(
      `https://sejong-enrollment.herokuapp.com/users/${userInfo.studentId}`,
      {
        data: {
          Id: userInfo.studentId,
          password: password,
        },
      }
    );
    setIsLoading(false);
    if (response.status === 201) {
      alert("???????????????????????????");
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
            ??????????????? ?????? ??????????????? ??????????????????
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
            <button className="mypage-login-form-button1">??????..</button>
            <button
              className="mypage-login-form-button2"
              onClick={secessionHandler}
            >
              ??????!!
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
              <label htmlFor="studentId">??????</label>
              <input
                id="studentId"
                type="text"
                value={enteredInput.studentId}
                readOnly
              />
              <span className="mypage-userinfo-txt">????????????</span>
            </div>
            <div>
              <label htmlFor="name">??????</label>
              <input
                id="name"
                type="text"
                value={enteredInput.name}
                onChange={formChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="userGrade">??????</label>
              <select
                id="userGrade"
                value={enteredInput.userGrade}
                onChange={formChangeHandler}
              >
                <option value={1}>1??????</option>
                <option value={2}>2??????</option>
                <option value={3}>3??????</option>
                <option value={4}>4??????</option>
              </select>
            </div>
            <div>
              <label htmlFor="major">??????</label>
              <select
                id="major"
                value={enteredInput.major}
                onChange={formChangeHandler}
              >
                <option value="??????????????????">??????????????????</option>
                <option value="?????????????????????">?????????????????????</option>
                <option value="??????????????????">??????????????????</option>
                <option value="???????????????????????????">???????????????????????????</option>
                <option value="?????????????????????">?????????????????????</option>
                <option value="??????????????????">??????????????????</option>
              </select>
            </div>
            <div>
              <label htmlFor="doubleMajor">????????????</label>
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
                    <option value="??????????????????">??????????????????</option>
                    <option value="?????????????????????">?????????????????????</option>
                    <option value="??????????????????">??????????????????</option>
                    <option value="???????????????????????????">
                      ???????????????????????????
                    </option>
                    <option value="?????????????????????">?????????????????????</option>
                    <option value="??????????????????">??????????????????</option>
                  </select>
                </div>
              )}
              <div className="mypage-userinfo-buttons">
                <button
                  className="mypage-userinfo-buttons-reset"
                  type="button"
                  onClick={onReset}
                >
                  ??????
                </button>
                <button
                  type="submit"
                  className="mypage-userinfo-buttons-submit"
                >
                  ?????? ??????
                </button>
              </div>
            </div>
          </form>
          <div className="mypage-userinfo-excel">
            <div className="mypage-userinfo-excel-title">
              <span className="mypage-userinfo-excel-title-icon">
                <SlCloudUpload />
              </span>
              ?????? ?????? ?????????
              <div className="mypage-userinfo-excel-exp">
                ??????????????? ?????? ?????? ????????? ??? ?????? / ?????? ??? ????????? ??? ?????? ??????
                ??? ????????? ?????? ?????? ??? ?????? ?????? ????????????
              </div>
              <div>
                <a
                  href="https://sjpt.sejong.ac.kr/"
                  target="_blank"
                  className="graduation-excel-upload-help-link"
                >
                  ??????????????? ????????????????????? ????????????
                </a>
              </div>
            </div>
            <ExcelUploadPage />
          </div>
          <div className="mypage-userinfo-secession">
            <div className="mypage-userinfo-secession-title">?????? ??????</div>
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
