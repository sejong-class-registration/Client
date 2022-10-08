import React from "react";
import "./ChangePw.scss";
import ChangePwForm1 from "./ChangePwForm1";

const ChangePw = () => {
  return (
    <div className="findpw-background">
      <img
        src="https://portal.sejong.ac.kr/content/02comm/css/images/login/login_logo.png"
        alt="logo"
        className="login-logo"
      />
      <div className="findpw-text">
        <p>수강신청 도우미</p>
        <p>비밀번호 변경</p>
      </div>
      <div className="findpw-text-exp">
        <p>비밀번호는 <span>특수문자를 포함한 10자 이상</span>으로 구성해아합니다</p>
      </div>
      <div className="findpw-formbox">
        <ChangePwForm1 />
      </div>
      <div className="login-copyright">
        <p>copyright ⓒ 2022 열일곱스물하나</p>
        <p>이기성 김찬규 최가빈 김윤희</p>
      </div>
    </div>
  );
};

export default ChangePw;
