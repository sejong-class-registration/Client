import React from "react";
import "./memoInput.scss";

const MemoInput = () => {
  return (
    <div className="memoInput">
      <div className="memoInput-header">
        <div className="memoInput-header-title">1학년 1학기</div>
        <div className="memoInput-header-buttons">
          <button className="memoInput-header-button">수정</button>
          <button className="memoInput-header-button">저장</button>
          <button className="memoInput-header-button">초기화</button>
        </div>
      </div>
      <div className="memoInput-input">
        <textarea
          className="memoInput-input-textarea"
          placeholder="계획을 입력하세요"
        ></textarea>
      </div>
    </div>
  );
};

export default MemoInput;
