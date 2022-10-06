import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignupForm.scss";

const SignupForm = (props) => {
  

  return ( 
      <div className="signup-form">
      <div>
        <label htmlFor="id">아이디(학번)</label>
        <input id="id" type="text" />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" className="signup-form-pw-input" />
        <div className="signup-form-pw-help">
          <p>최소 10자리 이상</p>
          <p>(영대문자, 영소문자, 숫자 및 특수문자 중 2종류 이상으로 구성)</p>
        </div>
      </div>
      <div>
        <label htmlFor="pw">비밀번호확인</label>
        <input id="pw" type="password" />
      </div>
      <button className="signup-form-button" onClick={props.showSecondPage}>다음</button>
    </div>
  );
};

export default SignupForm;
