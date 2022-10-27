import React from "react";
import "./FindPw.scss";
import FindPwForm1 from "./FindPwForm1";

const FindPw = () => {
  const logoClickHandler = () => {
    window.location.replace('/');
  }

  return (
    <div className="findpw-background">
      <img
        src="https://portal.sejong.ac.kr/content/02comm/css/images/login/login_logo.png"
        alt="logo"
        className="login-logo"
        onClick={logoClickHandler}
      />
      <div className="findpw-text">
        <p>수강신청 도우미</p>
        <p>비밀번호 찾기</p>
      </div>
      <div className="findpw-text-exp">
        <p>학생 인증을 위해</p>
        <span>세종대학교 학사정보시스템</span> 학번과 비밀번호를
        <p>입력해주시기 바랍니다</p>
      </div>
      <div className="findpw-formbox">
        <FindPwForm1 />
      </div>
      <div className="login-copyright">
        <p>copyright ⓒ 2022 열일곱스물하나</p>
        <p>이기성 김찬규 최가빈 김윤희</p>
      </div>
    </div>
  );
};

export default FindPw;
