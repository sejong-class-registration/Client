import React, { useState } from "react";
import Toast from "../../UI/Toast";
import "./LectureList.scss";

const LectureList = (props) => {
  const [iscopied, setIsCopied] = useState(false);
  let listClassName;
  let number_code = String(props.number_code).padStart(6, '0');

  if (props.rank === 1) {
    listClassName = "lecture-list-rank1";
  } else if (props.rank === 2) {
    listClassName = "lecture-list-rank2";
  } else if (props.rank === 3) {
    listClassName = "lecture-list-rank3";
  } else {
    listClassName = "lecture-list";
  }

  const activeToast = () => {
    setIsCopied(true);
    let timer = setTimeout(() => {
      setIsCopied(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    }
  }

  return (
    <div>
      <li className={listClassName}>
        <button
          className="lecture-list-rank"
        >
          {props.rank}
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(props.title);
            activeToast();
          }}
          className="lecture-list-title"
        >
          {props.title}
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(number_code);
            activeToast();
          }}
          className="lecture-list-exp"
        >
          {number_code}
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(props.field);
            activeToast();
          }}
          className="lecture-list-exp"
        >
          {props.field}
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(props.grade);
            activeToast();
          }}
          className="lecture-list-exp"
        >
          {props.grade}학점
        </button>
        <button
          className="lecture-list-standard"
        >
          {props.standard}회
        </button>
      </li>
      {iscopied && <Toast text = '복사되었습니다'/>}
    </div>
  );
};

export default LectureList;
