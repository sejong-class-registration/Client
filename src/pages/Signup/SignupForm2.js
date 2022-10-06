import { useState } from "react";
import "./SignupForm.scss";

const SignupForm2 = (props) => {
  const [enteredInput, setEnteredInput] = useState({
    username: "",
    adyear: 2022,
    grade: 1,
    semester: 1,
  });
  const [inputIsValid, setInputIsValid] = useState(false);

  const inputHandler = (event) => {
    setEnteredInput((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });

    if (event.target.id === "username") {
      if (event.target.value.trim() !== "") {
        setInputIsValid(true);
      } else {
        setInputIsValid(false);
      }
    }
  };

  const formSubmitHandler = () => {
    props.userInfoHandler({
      username: enteredInput.username,
      adyear: +enteredInput.adyear,
      grade: +enteredInput.grade,
      semester: +enteredInput.semester,
    });

    props.showThirdPage();
  };

  return (
    <div className="signup-form" onSubmit={formSubmitHandler}>
      <div className="signup-form-nameinput">
        <label htmlFor="username">이름</label>
        <input
          type="text"
          id="username"
          onChange={inputHandler}
          value={enteredInput.username}
        />
      </div>
      <div className="signup-form-adyear">
        <label htmlFor="adyear">입학년도</label>
        <select id="adyear" onChange={inputHandler}>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
          <option value={2018}>2018</option>
          <option value={2017}>2017</option>
        </select>
      </div>
      <div>
        <label htmlFor="grade">학년</label>
        <select id="grade" onChange={inputHandler}>
          <option value={1}>1학년</option>
          <option value={2}>2학년</option>
          <option value={3}>3학년</option>s
          <option value={4}>4학년</option>
        </select>
        <label htmlFor="semester">학기</label>
        <select id="semester" onChange={inputHandler}>
          <option value={1}>1학기</option>
          <option value={2}>2학기</option>
        </select>
      </div>
      <button
        disabled={!inputIsValid}
        className={
          inputIsValid ? "signup-form-button" : "signup-form-button-disabled"
        }
        onClick={formSubmitHandler}
      >
        회원가입
      </button>
    </div>
  );
};

export default SignupForm2;
