import React from "react";
import './ChangePwForm1.scss'
import { useState } from "react";

const ChangePwForm1 = (props) => {
  const [EnteredInput, setEnteredInput] = useState({
    password: "",
    passwordCheck: "",
  });
  const [EnteredInputIsValid, setEnteredInputIsValid] = useState({
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
    const specialLetter = EnteredInput.password.search(
      /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/
    );

    if (EnteredInput.password.trim().length >= 10 && specialLetter >= 1) {
      setEnteredInputIsValid((prev) => {
        return { ...prev, password: true };
      });
    } else {
      setEnteredInputIsValid((prev) => {
        return { ...prev, password: false };
      });
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

    console.log(EnteredInput.password);
    window.location.replace('/');
    alert('비밀번호를 변경하였습니다. 다시 로그인해주세요');
  }

  const pwInputClassName = EnteredInputIsValid.password
    ? ""
    : "changepw-form-input-invalid";
  const pwHelpClassName = EnteredInputIsValid.password
    ? "changepw-form-pw-help"
    : "changepw-form-pw-help-invalid";
  const pwCheckClassName =
    (pwIsValid.match && pwIsValid.touched) || !pwIsValid.touched
      ? ""
      : "changepw-form-input-invalid";
  const buttonActivate = EnteredInputIsValid.password && pwIsValid.match;

  return (
    <form className="changepw-form" onSubmit={submitHandler}>
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
          <p className="changepw-form-input-invalid-pwtxt">
            비밀번호가 일치하지않습니다
          </p>
        )}
      </div>
      <button
        className={
          buttonActivate ? "changepw-form-button" : "changepw-form-button-disabled"
        }
        disabled={!buttonActivate}
      >
        비밀번호 변경
      </button>
    </form>
  );
};

export default ChangePwForm1;
