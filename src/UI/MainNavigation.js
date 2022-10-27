import { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../common/icons/logo.png";
import "./MainNavigation.scss";

const MainNavigation = (props) => {
  const logoClickHandler =()=>{
    window.location.replace('/main');
    
  }

  return (
    <header className="header">
      <div className="title" onClick={logoClickHandler}>
        <img className="title-img" src={img} alt=""/>
        <div className="logo">
          <div className="logo-first">세종대학교</div>
          <div>수강신청도우미</div>
        </div>
      </div>
      <nav className="nav">
        <div className="nav-userInfo">
          <div>이기성님 안녕하세요</div>
          <button className="nav-userInfo-logout">로그아웃</button>
        </div>
        <ul className="nav-buttons">
          <button
            className={`nav-buttons-button${
              props.onPage === 1 ? "" : "_false"
            }`}
          >
            <NavLink
              to="/main"
              className={`nav-buttons-button${
                props.onPage === 1 ? "" : "_false"
              }-a`}
            >
              시간표 짜기
            </NavLink>
          </button>
          <button
            className={`nav-buttons-button${
              props.onPage === 2 ? "" : "_false"
            }`}
          >
            <NavLink
              to=""
              className={`nav-buttons-button${
                props.onPage === 2 ? "" : "_false"
              }-a`}
            >
              수강신청 대비
            </NavLink>
          </button>
          <button
            className={`nav-buttons-button${
              props.onPage === 3 ? "" : "_false"
            }`}
          >
            <NavLink
              to="/recommendedlecture"
              className={`nav-buttons-button${
                props.onPage === 3 ? "" : "_false"
              }-a`}
            >
              강의 추천
            </NavLink>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
