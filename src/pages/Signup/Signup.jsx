import SignupForm from "./SignupForm";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const logoClickHandler = () => {
    navigate('/');
  }

  return (
    <div className="signup-background">
      <img
        src="https://portal.sejong.ac.kr/content/02comm/css/images/login/login_logo.png"
        alt="logo"
        className="login-logo"
        onClick={logoClickHandler}
      />
      <div className="signup-text">
        <p>수강신청 도우미</p>
        <p>회원가입</p>
      </div>
      <div className="signup-box">
          <SignupForm />
      </div>
      <div className="signup-copyright">
        <p>copyright ⓒ 2022 열일곱스물하나</p>
        <p>이기성 김찬규 최가빈 김윤희</p>
      </div>
    </div>
  );
};

export default Signup;
