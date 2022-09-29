import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  const [EnteredInput, setEnteredInput] = useState({id: '', pw: ''});
  const [EnteredInputIsValid, setEnteredInputIsValid] = useState({id: true, pw: true});
  const [inputIsTouched, setInputIsTouched] = useState({id: false, pw: false});

  const inputChangeHandler = (event) => {
    setEnteredInput((prev)=>{
      return (
        {...prev, [event.target.id] : event.target.value}
      )
    })
  }

  const inputBlurHandler = (e) => {
    const selectedId = e.target.id;
    setInputIsTouched((prev)=>{
      return {...prev, [selectedId]: true};
    })

    if(selectedId === 'id'){
      if (EnteredInput.id.trim() === "" || isNaN(EnteredInput.id)) {
        setEnteredInputIsValid((prev)=>{
          return {...prev, id : false}
        });
      } else {
        setEnteredInputIsValid((prev)=>{
          return {...prev, id : true}
        });
      }
    }else{
      if (EnteredInput.pw.trim() === "") {
        setEnteredInputIsValid((prev)=>{
          return {...prev, pw : false}
        });
      } else {
        setEnteredInputIsValid((prev)=>{
          return {...prev, pw : true}
        });
      }
    }

  };

  const LoginSubmitHandler = (event) => {
    event.preventDefault();

    if (
      (!EnteredInputIsValid.id &&
        inputIsTouched.id &&
        !EnteredInputIsValid.pw &&
        inputIsTouched.pw) ||
      !inputIsTouched.id || !inputIsTouched.pw
    ) {
      setEnteredInputIsValid({id: false, pw: false});
      return;
    } else if ((!EnteredInputIsValid.id && inputIsTouched.id) || !inputIsTouched.id) {
      setEnteredInputIsValid((prev)=>{
        return {...prev, id : false}
      });
      return;
    } else if ((!EnteredInputIsValid.pw && inputIsTouched.pw) || !inputIsTouched.pw) {
      setEnteredInputIsValid((prev)=>{
        return {...prev, pw : false}
      });
      return;
    }

    console.log(EnteredInput);
  };

  const idInputClassName = EnteredInputIsValid.id ? "" : "login-invalid-input";
  const pwInputClassName = EnteredInputIsValid.pw ? "" : "login-invalid-input";

  return (
    <form onSubmit={LoginSubmitHandler} className = 'login-formbox'>
      <p>학번/아이디</p>
      <input
        className={idInputClassName}
        type="text"
        id="id"
        onBlur={inputBlurHandler}
        onChange = {inputChangeHandler}
        value = {EnteredInput.id}
      />
      {!EnteredInputIsValid.id && (
        <p className="login-invalid">아이디(학번)를 입력해주세요</p>
      )}
      <p>비밀번호</p>
      <input
        className={pwInputClassName}
        type="password"
        id="pw"
        onBlur={inputBlurHandler}
        onChange = {inputChangeHandler}
        value = {EnteredInput.pw}
      />
      {!EnteredInputIsValid.pw && (
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
