import React from "react";
import { useState } from "react";
import "./SignupForm.scss";

const SignupForm = (props) => {
  const [EnteredInput, setEnteredInput] = useState({
    id: "",
    password: "",
    passwordCheck: "",
  });
  const [EnteredInputIsValid, setEnteredInputIsValid] = useState({
    id: true,
    password: true,
  });
  const [pwIsValid, setPwIsValid] = useState({ touched: false, match: false });

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

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(EnteredInput);
    window.location.replace('/signup2');
  }

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
    <form className="signup-form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="id">아이디(학번)</label>
        <input
          id="id"
          type="text"
          className={idInputClassName}
          onBlur={inputBlurHandler}
          onChange={inputChangeHandler}
          value={EnteredInput.id}
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
        />
        {!pwIsValid.match && pwIsValid.touched && (
          <p className="signup-form-input-invalid-pwtxt">
            비밀번호가 일치하지않습니다
          </p>
        )}
      </div>
      <button
        className={
          buttonActivate ? "signup-form-button" : "signup-form-button-disabled"
        }
        disabled={!buttonActivate}
        value={EnteredInput.passwordCheck}
        to='/signup2'
      >
        다음
      </button>
    </form>
  );
};

export default SignupForm;
