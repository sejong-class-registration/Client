import React from "react";
import MemoList from "./memoList";
import MemoInput from "./memoInput";
import "./memoContent.scss";

const MemoContent = (props) => {
  return (
    <div className="memoContent">
      <div className="memoContent-title">
        <div className="memoContent-title-title">MEMO</div>
        <span className="memoContent-title-exp">
          남은 학기 계획을 기록하고 저장하세요!
        </span>
      </div>
      <MemoList className = "memoContent-memoList"/>
      <MemoInput className = "memoContent-memoInput"/>
    </div>
  );
};

export default MemoContent;
