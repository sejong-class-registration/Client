import React from "react";
import "./memoInput.scss";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { memoListActions } from "../../redux/slice/memoList";

const MemoInput = () => {
  const dispatch = useDispatch();
  const memoListId = useSelector((state) => state.memoList);
  const [inputValue, setInputValue] = useState({ content: memoListId.content });
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  var color = memoListId.color;
 
  // const onChange = useCallback(
  //   ({ target }) => {
  //     setInputValue({ content: target.value });
  //   },
  //   [inputValue, memoListId]
  // );

  console.log(memoListId.content);

  const saveMemoHandler = () => {
    // // console.log(inputValue);
    // patchMemo();
  };

  const clearMemoHandler = () => {
    // setInputValue({ content: "" });
  };

  const patchMemo = async () => {
    // const response = await axios
    //   .patch(
    //     `https://port-0-sejong-enrollment-1jvasx23lbaoi6rj.gksl2.cloudtype.app/memo/${userInfo.studentId}/${memoListId.num}`,{
    //       content : inputValue.content,
    //     }
    //   )
    //   .then((response) => {
    //     if (response.status === 200) {
    //       dispatch(memoListActions.saveMemoContent(inputValue.content));
    //     } else {
    //     }
    //   });
  };

  return (
    <div className="memoInput">
      <div className="memoInput-header" style={{ backgroundColor: color }}>
        <div className="memoInput-header-title">{memoListId.name}</div>
        <div className="memoInput-header-buttons">
          <button className="memoInput-header-button" onClick={saveMemoHandler}>
            저장
          </button>
          <button
            className="memoInput-header-button"
            onClick={clearMemoHandler}
          >
            초기화
          </button>
        </div>
      </div>
      <div className="memoInput-input">
        <textarea
          className="memoInput-input-textarea"
          placeholder="계획을 입력하세요"
          value={inputValue.content}
          // onChange={onChange}
          spellCheck="false"
          maxLength={5000}
          id={memoListId.num}
        >{inputValue.content}
        </textarea>
      </div>
    </div>
  );
};

export default MemoInput;
