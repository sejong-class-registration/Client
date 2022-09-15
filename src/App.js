import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MAIN_PATH, ROOT_PATH } from "./common/constants/path.const";
import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT_PATH} element={<LoginPage/>} />
        <Route path={MAIN_PATH} element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
