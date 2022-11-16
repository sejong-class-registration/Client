import React from "react";
import "./graduateMajorList.scss";

const GraduateMajorList = (props) => {
  let graduateMajorClassName;
  
  if(props.completed){
    graduateMajorClassName = 'graduateMajor-completed';
  }else{
    graduateMajorClassName = 'graduateMajor';
  }

  return (
    <li className={graduateMajorClassName}>
      <span className="graduateMajor-list-title">{props.title}</span>
      <span className="graduateMajor-list-num">{props.number_code}</span>
      <span className="graduateMajor-list-grade">{props.grade}학점</span>
    </li>
  )
};

export default GraduateMajorList;