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
      </li>
    </div>
  );
};

export default GraduateGEList;
