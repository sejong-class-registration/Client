import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CHANGEPW_PATH, FINDPW_PATH, GRADUATE_PATH, LECTURE_PATH, MAIN_PATH, MYPAGE_PATH, ROOT_PATH, SIGNUPFINSH_PATH, SIGNUP_PATH, DDAY_PATH, } from "./common/constants/path.const";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
