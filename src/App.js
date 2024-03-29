import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CHANGEPW_PATH, FINDPW_PATH, GRADUATE_PATH, LECTURE_PATH, MAIN_PATH, MYPAGE_PATH, ROOT_PATH, SIGNUPFINSH_PATH, SIGNUP_PATH, DDAY_PATH, MEMO_PATH, ADMIN_SCHEDULE_PATH, ADMIN_GRADUATE_PATH, ADMIN_lOGIN_PATH, } from "./common/constants/path.const";
import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import RecommendedLecturePage from "./pages/RecommendedLecture/RecommendedLecturePage";
import Signup from "./pages/Signup/Signup";
import FindPw from "./pages/FindPw/FindPw";
import ChangePw from "./pages/ChangePw/ChangePw";
import SignupFinal from "./pages/Signup/SignupFinal";
import Graduation from "./pages/Graduate/graduate";
import Mypage from "./pages/Mypage/Mypage";
import DdayPage from "./pages/Dday/DdayPage";
import "./App.scss";
import MemoPage from "./pages/Memo/memoPage";
import ScheduleUpdate from "./pages/adminPage/scheduleUpdate.jsx/scheduleUpdate";
import GraduateUpdate from "./pages/adminPage/graduateUpdate/graduateUpdate";
import AdminLogin from "./pages/adminPage/login/adminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT_PATH} element={<LoginPage/>} />
        <Route path={MAIN_PATH} element={<MainPage/>}/>
        <Route path={DDAY_PATH} element={<DdayPage />} />
        <Route path={LECTURE_PATH} element = {<RecommendedLecturePage/>}/>
        <Route path={SIGNUP_PATH} element = {<Signup/>}/>
        <Route path={SIGNUPFINSH_PATH} element = {<SignupFinal/>}/>
        <Route path={FINDPW_PATH} element = {<FindPw/>}/>
        <Route path={CHANGEPW_PATH} element = {<ChangePw/>}/>
        <Route path={GRADUATE_PATH} element = {<Graduation/>}/>
        <Route path={MYPAGE_PATH} element = {<Mypage/>}/>
        <Route path={MEMO_PATH} element = {<MemoPage />} />
        <Route path={ADMIN_SCHEDULE_PATH} element = {< ScheduleUpdate/>}/>
        <Route path={ADMIN_GRADUATE_PATH} element = {< GraduateUpdate/>} />
        <Route path={ADMIN_lOGIN_PATH} element = {< AdminLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
