import React from "react";
import { useState } from "react";
import "./SignupForm.scss";

const SignupForm = (props) => {
  const [EnteredInput, setEnteredInput] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    username: "",
    adyear: 2022,
    grade: 1,
    semester: 1,
  });
  const [EnteredInputIsValid, setEnteredInputIsValid] = useState({
    id: true,
    password: true,
  });
  const [pwIsValid, setPwIsValid] = useState({ touched: false, match: false });
  const [currentPage, setCurrentPage] = useState({
    first: true,
    second: false,
  });
  const [inputIsValid, setInputIsValid] = useState(false);


  const inputHandler = (event) => {
    setEnteredInput((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });

    if (event.target.id === "username") {
      if (event.target.value.trim() !== "") {
        setInputIsValid(true);
      } else {
        setInputIsValid(false);
      }
    }
  };

  
  const inputChangeHandler = (event) => {
    setEnteredInput((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
    
    if (event.target.id === "passwordCheck") {
      setPwIsValid((prev) => {
        return { ...prev, touched: true };
      });
    }
  };
  
  const inputBlurHandler = (e) => {
    const selectedId = e.target.id;
    const specialLetter = EnteredInput.password.search(
      /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/
      );
      
      if (selectedId === "id") {
        if (
          EnteredInput.id.trim() === "" ||
          isNaN(EnteredInput.id) ||
          EnteredInput.id.trim().length !== 8
          ) {
            setEnteredInputIsValid((prev) => {
              return { ...prev, id: false };
            });
          } else {
        setEnteredInputIsValid((prev) => {
          return { ...prev, id: true };
        });
      }
    } else {
      if (EnteredInput.password.trim().length >= 10 && specialLetter >= 1) {
        setEnteredInputIsValid((prev) => {
          return { ...prev, password: true };
        });
      } else {
        setEnteredInputIsValid((prev) => {
          return { ...prev, password: false };
        });
      }
    }
  };
  
  const passwordBlurHandler = () => {
    if (pwIsValid.touched === true) {
      if (EnteredInput.passwordCheck !== EnteredInput.password) {
        setPwIsValid((prev) => {
          return { ...prev, match: false };
        });
      } else {
        setPwIsValid((prev) => {
          return { ...prev, match: true };
        });
      }
    }
  };
  
  const nextButtonHandler = () => {
    setCurrentPage({
      first: false,
      second: true,
    })
  }
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(EnteredInput);

    window.location.replace('/signupend');
  };

  const idInputClassName = EnteredInputIsValid.id
    ? ""
    : "signup-form-input-invalid";
  const pwInputClassName = EnteredInputIsValid.password
    ? ""
    : "signup-form-input-invalid";
  const pwHelpClassName = EnteredInputIsValid.password
    ? "signup-form-pw-help"
    : "signup-form-pw-help-invalid";
  const pwCheckClassName =
    (pwIsValid.match && pwIsValid.touched) || !pwIsValid.touched
      ? ""
      : "signup-form-input-invalid";
  const buttonActivate =
    EnteredInputIsValid.id && EnteredInputIsValid.password && pwIsValid.match;

  return (
    <form className="signup-form" onSubmit={formSubmitHandler}>
      {currentPage.first &&
        <div>
          <div>
            <label htmlFor="id">아이디(학번)</label>
            <input
              id="id"
              type="text"
              className={idInputClassName}
              onBlur={inputBlurHandler}
              onChange={inputChangeHandler}
              value={EnteredInput.id}
              tabIndex = '1'
            />
            {!EnteredInputIsValid.id && (
              <p className="signup-form-input-invalid-idtxt">
                8자리의 학번을 입력해주세요
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              className={pwInputClassName}
              onBlur={inputBlurHandler}
              onChange={inputChangeHandler}
              value={EnteredInput.password}
              tabIndex = '2'
            />
            <div className={pwHelpClassName}>
              <p>최소 10자리 이상</p>
              <p>(특수문자 포함 10글자 이상으로 구성)</p>
            </div>
          </div>
          <div>
            <label htmlFor="passwordCheck">비밀번호확인</label>
            <input
              className={pwCheckClassName}
              id="passwordCheck"
              type="password"
              onBlur={passwordBlurHandler}
              onChange={inputChangeHandler}
              value={EnteredInput.passwordCheck}
              tabIndex = '3'
            />
            {!pwIsValid.match && pwIsValid.touched && (
              <p className="signup-form-input-invalid-pwtxt">
                비밀번호가 일치하지않습니다
              </p>
            )}
          </div>
          <button
          type="button"
          onClick={nextButtonHandler}
            className={
              buttonActivate
                ? "signup-form-button"
                : "signup-form-button-disabled"
            }
            disabled={!buttonActivate}
            value={EnteredInput.passwordCheck}
            to="/signup2"
            tabIndex='4'
          >
            다음
          </button>
        </div>
      }
      {currentPage.second &&
        <div>
        <div className="signup-form-nameinput">
        <label htmlFor="username">이름</label>
        <input
          type="text"
          id="username"
          onChange={inputHandler}
          value={EnteredInput.username}
          tabIndex= '5'
        />
      </div>
      <div className="signup-form-adyear">
        <label htmlFor="adyear">입학년도</label>
        <select id="adyear" onChange={inputHandler} tabIndex = '6' >
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
          <option value={2018}>2018</option>
          <option value={2017}>2017</option>
        </select>
      </div>
      <div>
        <label htmlFor="grade">학년</label>
        <select id="grade" onChange={inputHandler} tabIndex = '7'>
          <option value={1}>1학년</option>
          <option value={2}>2학년</option>
          <option value={3}>3학년</option>s
          <option value={4}>4학년</option>
        </select>
        <label htmlFor="semester">학기</label>
        <select id="semester" onChange={inputHandler} tabIndex = '8'>
          <option value={1}>1학기</option>
          <option value={2}>2학기</option>
        </select>
      </div>
      <button
        disabled={!inputIsValid}
        className={
          inputIsValid ? "signup-form-button" : "signup-form-button-disabled"
        }
        tabIndex = '9'
      >
        회원가입
      </button></div>
      }
    </form>
  );
};

export default SignupForm;
