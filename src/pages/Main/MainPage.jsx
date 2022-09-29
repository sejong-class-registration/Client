import React from "react";
import MainNavigation from "../../UI/MainNavigation";
import MainPageContent from "./MainPageContent";


function MainPage() {
  return (
    <>
      <MainNavigation onPage = {1}></MainNavigation>
      <MainPageContent></MainPageContent>
    </>
  );
}

export default MainPage;
