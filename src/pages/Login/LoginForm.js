import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  const EnteredId = useRef();
  const EnteredPw = useRef();
  const [EnteredIdisValid, setEnteredIdisValid] = useState(true);
  const [EnteredPwisValid, setEnteredPwisValid] = useState(true);
  const [pwInputisTouched, setpwInputisTouched] = useState(false);
  const [IdInputisTouched, setIdInputisTouched] = useState(false);

  const idInputHandler = () => {
    setIdInputisTouched(true);
    const id = EnteredId.current.value;

    if (id.trim() === "" || isNaN(id)) {
      setEnteredIdisValid(false);
    } else {
      setEnteredIdisValid(true);
    }
  };
  const pwInputHandler = () => {
    setpwInputisTouched(true);
    const pw = EnteredPw.current.value;

    if (pw.trim() === "") {
      setEnteredPwisValid(false);
    } else {
      setEnteredPwisValid(true);
    }
  };

  const LoginSubmitHandler = (event) => {
    event.preventDefault();

    if (
      (!EnteredIdisValid &&
        IdInputisTouched &&
        !EnteredPwisValid &&
        pwInputisTouched) ||
      !IdInputisTouched || !pwInputisTouched
    ) {
      setEnteredIdisValid(false);
      setEnteredPwisValid(false);
      return;
    } else if ((!EnteredIdisValid && IdInputisTouched) || !IdInputisTouched) {
      setEnteredIdisValid(false);
      return;
    } else if ((!EnteredPwisValid && pwInputisTouched) || !pwInputisTouched) {
      setEnteredPwisValid(false);
      return;
    }

    const EnteredUserInfo = {
      id: EnteredId.current.value,
      pw: EnteredPw.current.value,
    };
    console.log(EnteredUserInfo);
  };

  const idInputClassName = EnteredIdisValid ? "" : "login-invalid-input";
  const pwInputClassName = EnteredPwisValid ? "" : "login-invalid-input";

  return (
    <form onSubmit={LoginSubmitHandler} className = 'login-formbox'>
      <p>학번/아이디</p>
      <input
        className={idInputClassName}
        type="text"
        id="id"
        onBlur={idInputHandler}
        ref={EnteredId}
      />
      {!EnteredIdisValid && (
        <p className="login-invalid">아이디(학번)를 입력해주세요</p>
      )}
      <p>비밀번호</p>
      <input
        className={pwInputClassName}
        type="password"
        id="pw"
        onBlur={pwInputHandler}
        ref={EnteredPw}
      />
      {!EnteredPwisValid && (
        <p className="login-invalid">비밀번호를 입력해주세요</p>
      )}
      <div className="login-formbox-help">
        <span>
          <Link to="/findid">아이디 찾기</Link>
        </span>
        <span>
          <Link to="/findpw">비밀번호 찾기</Link>
        </span>
        <span>
          <Link to="/signup">회원가입</Link>
        </span>
      </div>
      <button>로그인</button>
    </form>
  );
};

export default LoginForm;
