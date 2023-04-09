import React from "react";
import "./memoList.scss";

const MemoList = () => {
  return (
    <div className="memoList">
      <span className="memoList-title">LIST</span>
      <ul className="memoList-ul">
        <li className="memoList-li">
          <button className="memoList-li-button" style={{
          backgroundColor: "#FFF2CC",
        }}>1학년 1학기</button>
        </li>
        <li className="memoList-li">
          <button className="memoList-li-button" style={{
          backgroundColor: "#FFF2CC",
        }}>1학년 2학기</button>
        </li>
        <li className="memoList-li">
          <button className="memoList-li-button" style={{
          backgroundColor: "#FFD966",
        }}>2학년 1학기</button>
        </li>
        <li className="memoList-li">
          <button className="memoList-li-button"  style={{
          backgroundColor: "#FFD966",
        }}>2학년 2학기</button>
        </li>
        <li className="memoList-li"> 
          <button className="memoList-li-button"  style={{
          backgroundColor: "#F4B183",
        }}>3학년 1학기</button>
        </li>
        <li className="memoList-li">
          <button className="memoList-li-button"  style={{
          backgroundColor: "#F4B183",
        }}>3학년 2학기</button>
        </li>
        <li className="memoList-li">
          <button className="memoList-li-button"  style={{
          backgroundColor: "#DFA67B",
        }}>4학년 1학기</button>
        </li>
        <li className="memoList-li">
          <button className="memoList-li-button"  style={{
          backgroundColor: "#DFA67B",
        }}>4학년 2학기</button>
        </li>
        <li className="memoList-li">
          <button className="memoList-li-button" style={{
          backgroundColor: "#867070",
          color: "white",
        }}>여름 계절학기</button>
        </li>
        <li className="memoList-li">
          <button className="memoList-li-button" style={{
          backgroundColor: "#867070",
          color: "white",
        }}>겨울 계절학기</button>
        </li>
        <li className="memoList-li">
          <button className="memoList-li-button">ETC</button>
        </li>
      </ul>
    </div>
  );
};

export default MemoList;
