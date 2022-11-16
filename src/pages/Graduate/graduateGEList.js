import React from "react";
import "./graduateGEList.scss";

const GraduateGEList = (props) => {
  let graduateGEClassName;

  if(props.completed){
    graduateGEClassName = 'graduateGE-completed';
  }else{
    graduateGEClassName = 'graduateGE';
  }

  return (
    <div>
      <li className={graduateGEClassName}>
        <span className="graduateGE-list-title">{props.title}</span>
        <span className="graduateGE-list-num">{props.number_code}</span>
        <span className="graduateGE-list-grade">{props.grade}학점</span>
      </li>
    </div>
  );
};

export default GraduateGEList;
