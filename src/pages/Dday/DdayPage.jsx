import React from "react";
import MainNavigation from "../../UI/MainNavigation";
import DdayContent from "./DdayContent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function MainPage() {
  const navigate = useNavigate();
  
  useEffect (() => {
    const getToken = localStorage.getItem('token');

    if(!getToken){
      navigate('/');
    }
  }, []);
  return (
    <>
      <MainNavigation onPage={2}></MainNavigation>
      <DdayContent></DdayContent>
    </>
  );
}

export default MainPage;
