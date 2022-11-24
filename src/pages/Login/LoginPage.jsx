import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./LoginPage.scss";

function LoginPage() {
  const navigate = useNavigate();
  useEffect (() => {
    const getToken = localStorage.getItem('token');

    if(getToken){
      navigate('/main');
    }
  }, []);

  const logoClickHandler = () => {
    navigate('/');
  }

  return (
    <div className="login-background">
      <img
        src="https://portal.sejong.ac.kr/content/02comm/css/images/login/login_logo.png"
        alt="logo"
        className="login-logo"
        onClick={logoClickHandler}
      />
      <div className="login-text">
        <p className="login-text-title">수강신청 도우미</p>
        <p className="login-text-exp">
          서비스 이용을 끝낸 후에는 개인정보보호를 위하여 꼭{" "}
          <span>로그아웃</span>을 해주시기 바랍니다.
        </p>
      </div>
      <div className= "loginForm">
        <LoginForm/>
      </div>
      <div className="login-copyright">
        <p>copyright ⓒ 2022 열일곱스물하나</p>
        <p>이기성 김찬규 최가빈 김윤희</p>
      </div>
    </div>
  );
}

export default LoginPage;
