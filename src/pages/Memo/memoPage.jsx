import React from "react";
import MainNavigation from "../../UI/MainNavigation";
import MemoContent from "./memoContent";

const MemoPage = () => {
  return(
    <div>
      <MainNavigation onPage = {6}></MainNavigation>
      <MemoContent/>
    </div>
  )
}

export default MemoPage;