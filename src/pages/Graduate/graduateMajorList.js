import React, { useState } from "react";
import Toast from "../../UI/Toast";
import "./graduateMajorList.scss";

const GraduateMajorList = (props) => {
  const [iscopied, setIsCopied] = useState(false);
  let graduateMajorClassName;

  if (props.completed) {
    graduateMajorClassName = "graduateMajor-completed";
  } else {
    graduateMajorClassName = "graduateMajor";
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
      <li className={graduateMajorClassName}>
        <button
          className="graduateMajor-list-title"
          onClick={() => {
            navigator.clipboard.writeText(props.title);
            activeToast();
          }}
        >
          {props.title}
        </button>
      </li>
      {iscopied && <Toast text = '복사되었습니다'/>}
    </div>
  );
};

export default GraduateMajorList;
