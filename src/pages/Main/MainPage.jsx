import React from "react";
import MainNavigation from "../../UI/MainNavigation";
import MainPageContent from "./MainPageContent";

function MainPage() {
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.userInfo.userInfo.name);
  // useEffect(() => {
  //   if (user.length > 0) navigate("/");
  // }, []);
  return (
    <>
      <MainNavigation onPage={1}></MainNavigation>
      <MainPageContent></MainPageContent>
    </>
  );
}

export default MainPage;
