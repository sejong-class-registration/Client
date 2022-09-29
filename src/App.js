import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LECTURE_PATH, MAIN_PATH, ROOT_PATH } from "./common/constants/path.const";
import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import RecommendedLecturePage from "./pages/RecommendedLecture/RecommendedLecturePage";
import './App.scss';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT_PATH} element={<LoginPage/>} />
        <Route path={MAIN_PATH} element={<MainPage/>}/>
        <Route path={LECTURE_PATH} element = {<RecommendedLecturePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
