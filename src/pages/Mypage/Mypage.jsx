import React from "react";
import MainNavigation from "../../UI/MainNavigation";
import './Mypage.scss';

const Mypage = () => {
  return (
    <div>
      <MainNavigation />
      <div>
        본인확인을 위해 비밀번호 입력
        아이디 확인
        학년, 입학년도 수정
        엑셀파일 업로드 / 갱신
        회원탈퇴
      </div>
    </div>
  )
}

export default Mypage;