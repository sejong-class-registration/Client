import React from "react";
import { useState } from "react";
import Toast from "../../UI/Toast";
import "./graduateGEList.scss";

const GraduateGEList = (props) => {
  const [iscopied, setIsCopied] = useState(false);
  let graduateGEClassName;

  if(props.completed){
    graduateGEClassName = 'graduateGE-completed';
  }else{
    graduateGEClassName = 'graduateGE';
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
      <li className={graduateGEClassName}>
        <button className="graduateGE-list-title" onClick={() => {
            navigator.clipboard.writeText(props.title);
            activeToast();
          }}>{props.title}</button>
      </li>
      {iscopied && <Toast text = '복사되었습니다'/>}
    </div>
  );
};

export default GraduateGEList;
