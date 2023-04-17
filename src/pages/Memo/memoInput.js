import React from "react";
import "./memoInput.scss";
import { useState } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const MemoInput = () => {
  const [inputValue, setInputValue] = useState({content: '',});
  const memoListId = useSelector((state) => state.memoList);
  const {content} = inputValue;
  var color = memoListId.color;

  const onChange = useCallback(({target}) => {
    setInputValue({content: target.value});
  }, [inputValue]);

  const saveMemoHandler = () => {
    console.log(inputValue);
  }

  const clearMemoHandler = () => {
    setInputValue({content: ''});
  }

  const getContent = () => {
    //content 값 가져오기
  }

  return (
    <div className="memoInput">
      <div className="memoInput-header" style={{backgroundColor: color}}>
        <div className="memoInput-header-title">{memoListId.name}</div>
        <div className="memoInput-header-buttons">
          <button className="memoInput-header-button" onClick={saveMemoHandler}>저장</button>
          <button className="memoInput-header-button" onClick={clearMemoHandler}>초기화</button>
        </div>
      </div>
      <div className="memoInput-input">
        <textarea
          className="memoInput-input-textarea"
          placeholder="계획을 입력하세요"
          value = {content}
          onChange = {onChange}
        ></textarea>
      </div>
    </div>
  );
};

export default MemoInput;
