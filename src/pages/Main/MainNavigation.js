import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.scss';

const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className='logo-first'>세종대학교</div>
        <div>수강신청도우미</div>
      </div>
      <nav className="nav">
        <div>
          <>xxx님 안녕하세요</>
          <button>로그아웃</button>
        </div>

        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              시간표 짜기
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              수강신청 대비
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              강의 추천
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
