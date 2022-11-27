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
    <div>
      <li className={graduateMajorClassName}>
        <span className="graduateMajor-list-title">{props.title}</span>
      </li>
    </div>
  );
};

export default GraduateMajorList;
