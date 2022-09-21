import React from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.scss";

function LoginPage() {
  return (
    <div className="login-background">
      <img
        src="https://portal.sejong.ac.kr/content/02comm/css/images/login/login_logo.png"
        alt="logo"
        className="login-logo"
      />
      <div className="login-text">
        <p className="login-text-title">수강신청 도우미</p>
        <p className="login-text-exp">
          서비스 이용을 끝낸 후에는 개인정보보호를 위하여 꼭{" "}
          <span>로그아웃</span>을 해주시기 바랍니다.
        </p>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
