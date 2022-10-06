import { useState } from "react";
import "./Signup.scss";
import SignupForm from "./SignupForm";
import SignupForm2 from "./SignupForm2";
import SignupForm3 from "./SignupForm3";

const Signup = () => {
  const [signupPage, setSignupPage] = useState({
    first: true,
    second: false,
    third: false,
  });
  const [userinfo, setUserinfo] = useState({
    id: "",
    password: "",
    username: "",
    adyear: 2022,
    grade: 1,
    semester: 1,
  });

  const showSecondPage = (info) => {
    Object.assign(userinfo, info);
    setSignupPage({ first: false, second: true, third: false });
  };

  const showThirdPage = () => {
    setSignupPage({ first: false, second: false, third: true });
  };

  const userInfoHandler = (info) => {
    Object.assign(userinfo, info);
    console.log(userinfo);
  }

  return (
    <div className="signup-background">
      <img
        src="https://portal.sejong.ac.kr/content/02comm/css/images/login/login_logo.png"
        alt="logo"
        className="login-logo"
      />
      <div className="signup-text">
        <p>수강신청 도우미</p>
        <p>회원가입</p>
      </div>
      <div className="signup-box">
        {signupPage.first && (
          <SignupForm
            showSecondPage={showSecondPage}
          />
        )}
        {signupPage.second && (
          <SignupForm2
            showThirdPage={showThirdPage}
            userInfoHandler = {userInfoHandler}
          />
        )}
        {signupPage.third && <SignupForm3  username = {userinfo.username}/>}
      </div>
      <div className="signup-copyright">
        <p>copyright ⓒ 2022 열일곱스물하나</p>
        <p>이기성 김찬규 최가빈 김윤희</p>
      </div>
    </div>
  );
};

export default Signup;
