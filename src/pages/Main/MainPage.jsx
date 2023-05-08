import React from "react";
import MainNavigation from "../../UI/MainNavigation";
import MainPageContent from "./MainPageContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.userInfo.userInfo.name);
  // useEffect(() => {
  //   if (user.length > 0) navigate("/");
  // }, []);
  const navigate = useNavigate();
  
  useEffect (() => {
    const getToken = localStorage.getItem('token');

    if(!getToken){
      navigate('/');
    }
  }, []);

  return (
    <>
      <MainNavigation onPage={1}></MainNavigation>
      <MainPageContent></MainPageContent>
    </>
  );
}

export default MainPage;
