import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../common/icons/logo.png";
import { userInfoActions } from "../redux/slice/userSlice";
import "./MainNavigation.scss";

const AdminNavigation = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo.userInfo);

  const logoClickHandler = () => {
    navigate("/adminschedule");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };


  return (
    <header className="header">
      <div className="title" onClick={logoClickHandler}>
        <img className="title-img" src={img} alt="" />
        <div className="logo">
          <div className="logo-first">세종대학교</div>
          <div>수강신청도우미 관리자</div>
        </div>
      </div>
      <nav className="nav">
        <div className="nav-userInfo">
          <div>
            관리자님 안녕하세요
          </div>
          <button className="nav-userInfo-logout" onClick={logoutHandler}>
            로그아웃
          </button>
        </div>
        <ul className="nav-buttons">
          <button
            className={`nav-buttons-button${
              props.onPage === 10 ? "" : "_false"
            }`}
          >
            <NavLink
              to="/adminschedule"
              className={`nav-buttons-button${
                props.onPage === 10 ? "" : "_false"
              }-a`}
            >
              시간표 갱신
            </NavLink>
          </button>
          <button
            className={`nav-buttons-button${
              props.onPage === 11 ? "" : "_false"
            }`}
          >
            <NavLink
              to="/admingraduate"
              className={`nav-buttons-button${
                props.onPage === 11 ? "" : "_false"
              }-a`}
            >
              졸업요건 갱신
            </NavLink>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default AdminNavigation;
