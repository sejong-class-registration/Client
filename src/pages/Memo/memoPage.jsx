import React from "react";
import MainNavigation from "../../UI/MainNavigation";
import MemoContent from "./memoContent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MemoPage = () => {
  const navigate = useNavigate();
  
  useEffect (() => {
    const getToken = localStorage.getItem('token');

    if(!getToken){
      navigate('/');
    }
  }, []);

  return(
    <div>
      <MainNavigation onPage = {6}></MainNavigation>
      <MemoContent/>
    </div>
  )
}

export default MemoPage;