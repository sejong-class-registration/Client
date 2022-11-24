import React from "react";
import "./LectureList.scss";

const LectureList = (props) => {
  let listClassName;
  
  if(props.rank === 1){
    listClassName = 'lecture-list-rank1';
  }else if(props.rank === 2){
    listClassName = 'lecture-list-rank2';
  }else if(props.rank === 3){
    listClassName = 'lecture-list-rank3';
  }else{
    listClassName = 'lecture-list';
  }
  
  return (
    <li className='lecture-list'>
      {/* <span className="lecture-list-rank">{props.rank}</span> */}
      <span className="lecture-list-title">{props.title}</span>
      <span className="lecture-list-exp"><span className="lecture-list-exp-txt">학번</span> {props.number_code}</span>
      <span className="lecture-list-exp">{props.field}</span>
      <span className="lecture-list-exp">{props.grade}학점</span>
      <span className="lecture-list-standard">{props.standard}회</span>
    </li>
  )
};

export default LectureList;
