import { NavLink } from "react-router-dom";
import "./SignupForm.scss";

const SignupForm3 = (props) => {
  return (
    <div className="signup-form-welcome">
      <div className="signup-form-welcome-txt">
        <p>홍길동님</p>
        <p>가입을 환영합니다!</p>
      </div>
      <NavLink className="signup-form-welcome-button" to="/">
        <span>로그인하러가기</span>
      </NavLink>
    </div>
  );
};

export default SignupForm3;