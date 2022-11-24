import React from "react";
import MainNavigation from "../../UI/MainNavigation";
import DdayContent from "./DdayContent";

function MainPage() {
  return (
    <>
      <MainNavigation onPage={2}></MainNavigation>
      <DdayContent></DdayContent>
    </>
  );
}

export default MainPage;
