import React from "react";
import { useState } from "react";
import axios from "axios";
import "./SignupForm.scss";

const SignupForm = (props) => {
  const [EnteredInput, setEnteredInput] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    username: "",
    major: '컴퓨터공학과',
    doubleMajor: '',
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
  const [checkboxOn, setCheckboxOn] = useState(false);

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

  const doubleMajorHandler = () => {
    setCheckboxOn((prev)=>!prev);
  }
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(EnteredInput);

    // window.location.replace('/signupend');
  };

  // const signupFetchHandler = async () => {
  //   const response = await axios.post("https://sejong-enrollment.herokuapp.com/users/signin", {
  //     name: EnteredInput.username,
  //     userId: EnteredInput.id,
  //     password: EnteredInput.password,
  //     userGrade: EnteredInput.grade,
  //     major: EnteredInput.major,
  //     dobuleMajor: EnteredInput.doubleMajor,
  //   })
  // }

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
      <div >
        <label htmlFor="major">전공과목</label>
        <span>
          <label htmlFor="doubleMajorCheck" className="signup-form-doublemajor-label">복수전공</label>
          <input id = 'doubleMajorCheck'type="checkbox" className="signup-form-doublemajor-checkbox" onChange={doubleMajorHandler}/>
        </span>
        <select id="major" onChange={inputHandler} tabIndex = '6' >
          <option value='컴퓨터공학과'>컴퓨터공학과</option>
          <option value='소프트웨어학과'>소프트웨어학과</option>
          <option value='정보보호학과'>정보보호학과</option>
          <option value='데이터사이언스학과'>데이터사이언스학과</option>
          <option value='지능기전공학부'>지능기전공학부</option>
          <option value='인공지능학과'>인공지능학과</option>
        </select>
        {checkboxOn && <select id="doublemajor" onChange={inputHandler} className = 'signup-form-doublemajor-input'>
          <option value='컴퓨터공학과'>컴퓨터공학과</option>
          <option value='소프트웨어학과'>소프트웨어학과</option>
          <option value='정보보호학과'>정보보호학과</option>
          <option value='데이터사이언스학과'>데이터사이언스학과</option>
          <option value='지능기전공학부'>지능기전공학부</option>
          <option value='인공지능학과'>인공지능학과</option>
        </select>}
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
