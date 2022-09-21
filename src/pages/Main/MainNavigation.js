import { NavLink } from "react-router-dom";
import img from "../../common/icons/logo.png";
import "./MainNavigation.scss";

const MainNavigation = () => {
  return (
    <header className="header">
      <div className="title">
        <img className="title-img" src={img} alt="" />
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
          <button className="nav-buttons-button">
            <NavLink to="/quotes" className="nav-buttons-button-a">
              시간표 짜기
            </NavLink>
          </button>
          <button className="nav-buttons-button_false">
            <NavLink to="/new-quote" className="nav-buttons-button_false-a">
              수강신청 대비
            </NavLink>
          </button>
          <button className="nav-buttons-button_false">
            <NavLink to="/new-quote" className="nav-buttons-button_false-a">
              강의 추천
            </NavLink>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
