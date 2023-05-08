import React, { useState } from "react";
import "./memoList.scss";
import { useDispatch, useSelector } from "react-redux";
import { memoListActions } from "../../redux/slice/memoList";
import { useEffect } from "react";
import axios from "axios";

const MemoList = (props) => {
  const dispatch = useDispatch();
  const memoListId = useSelector((state) => state.memoList);
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [memoListInfo, setMemoListInfo] = useState(memoListId);

  const getMemoContent = async () => {
    const response = await axios
      .get(
        `https://port-0-sejong-enrollment-1jvasx23lbaoi6rj.gksl2.cloudtype.app/memo/${userInfo.studentId}/${memoListId.num}`
      )
      .then((response) => {
        if (response.status === 200) {
          setMemoListInfo((prev) => {
            return { ...prev, content: response.data.data.content[0] };
          });
        } else {
          setMemoListInfo((prev) => {
            return { ...prev, content: "" };
          });
        }
      });
    
  };
  const buttonHandler = (e) => {
    console.log(memoListId[--e.target.id]);
  };
  useEffect(() => {
    
    // console.log(memoListId)
  }, [memoListInfo, memoListId]);

  return (
    <div className="memoList">
      <span className="memoList-title">LIST</span>
      <ul className="memoList-ul">
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            style={{
              backgroundColor: "#FFF2CC",
            }}
            name="1학년 1학기"
            id="1"
            value="#FFF2CC"
            onClick={buttonHandler}
          >
            1학년 1학기
          </button>
        </li>
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            style={{
              backgroundColor: "#FFF2CC",
            }}
            name="1학년 2학기"
            id="2"
            value="#FFF2CC"
            onClick={buttonHandler}
          >
            1학년 2학기
          </button>
        </li>
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            style={{
              backgroundColor: "#FFD966",
            }}
            name="2학년 1학기"
            id="3"
            value="#FFD966"
            onClick={buttonHandler}
          >
            2학년 1학기
          </button>
        </li>
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            style={{
              backgroundColor: "#FFD966",
            }}
            name="2학년 2학기"
            id="4"
            value="#FFD966"
            onClick={buttonHandler}
          >
            2학년 2학기
          </button>
        </li>
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            style={{
              backgroundColor: "#F4B183",
            }}
            name="3학년 1학기"
            id="5"
            value="#F4B183"
            onClick={buttonHandler}
          >
            3학년 1학기
          </button>
        </li>
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            style={{
              backgroundColor: "#F4B183",
            }}
            name="3학년 2학기"
            id="6"
            value="#F4B183"
            onClick={buttonHandler}
          >
            3학년 2학기
          </button>
        </li>
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            style={{
              backgroundColor: "#DFA67B",
            }}
            name="4학년 1학기"
            id="7"
            value="#DFA67B"
            onClick={buttonHandler}
          >
            4학년 1학기
          </button>
        </li>
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            style={{
              backgroundColor: "#DFA67B",
            }}
            name="4학년 2학기"
            id="8"
            value="#DFA67B"
            onClick={buttonHandler}
          >
            4학년 2학기
          </button>
        </li>
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            style={{
              backgroundColor: "#867070",
              color: "white",
            }}
            name="여름 계절학기"
            id="9"
            value="#9e8c8c"
            onClick={buttonHandler}
          >
            여름 계절학기
          </button>
        </li>
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            style={{
              backgroundColor: "#867070",
              color: "white",
            }}
            name="겨울 계절학기"
            id="10"
            value="#9e8c8c"
            onClick={buttonHandler}
          >
            겨울 계절학기
          </button>
        </li>
        <li className="memoList-li">
          <button
            className="memoList-li-button"
            name="ETC"
            id="11"
            value="#ccc"
            onClick={buttonHandler}
          >
            ETC
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MemoList;
