import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkboxActions } from "../../redux/slice/checkboxSlice";
import "./FilterModal.scss";

const GRADES_CHECKBOX_LIST = [
  { id: "1g", data: 1 },
  { id: "2g", data: 2 },
  { id: "3g", data: 3 },
];
const SELECTION_CHECKBOX_LIST = [
  { id: "1s", data: "사상과역사" },
  { id: "2s", data: "사회와문화" },
  { id: "3s", data: "자기계발과진로" },
  { id: "4s", data: "자연과학기술" },
  { id: "5s", data: "세계와지구촌" },
  { id: "6s", data: "예술과체육" },
  { id: "7s", data: "기타" },
];

const FilterModal = (props) => {
  const savedGradesCheckboxList = useSelector((state) => state.checkbox.grades);
  const savedSelectionCheckboxList = useSelector(
    (state) => state.checkbox.selection
  );
  const dispatch = useDispatch();
  const [gradesCheckedList, setGradesCheckedList] = useState(
    savedGradesCheckboxList
  );
  const [selectionCheckedList, setSelectionCheckedList] = useState(
    savedSelectionCheckboxList
  );

  const onGradesCheckedElemnet = (checked, item) => {
    if (checked) {
      setGradesCheckedList((prev) => {
        return [...prev, item];
      });
    } else if (!checked) {
      setGradesCheckedList(gradesCheckedList.filter((el) => el !== item));
    }
  };

  const onSelectionCheckedElemnet = (checked, item) => {
    if (checked) {
      setSelectionCheckedList((prev) => {
        return [...prev, item];
      });
    } else if (!checked) {
      setSelectionCheckedList(selectionCheckedList.filter((el) => el !== item));
    }
  };

  const filterSubmitHandler = () => {
    let checkedList = {
      grades: gradesCheckedList,
      selection: selectionCheckedList,
    };
    dispatch(checkboxActions.save(checkedList));
    console.log(checkedList);
    props.onClose();
  };

  return (
    <div>
      <div className="filtermodal-backdrop" onClick={props.onClose} />
      <div className="filtermodal">
        <div className="filtermodal-grades">
          <p>학점</p>
          <div className="filtermodal-grades-checkboxlist">
            {GRADES_CHECKBOX_LIST.map((item) => {
              return (
                <label htmlFor={item.id} key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    onChange={(e) => {
                      onGradesCheckedElemnet(e.target.checked, e.target.id);
                    }}
                    checked={gradesCheckedList.includes(item.id) ? true : false}
                  />
                  <span>{item.data}학점</span>
                </label>
              );
            })}
          </div>
        </div>
        <div>
          <p>선택영역</p>
          {SELECTION_CHECKBOX_LIST.map((item) => {
            return (
              <label htmlFor={item.id} key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={(e) => {
                    onSelectionCheckedElemnet(e.target.checked, e.target.id);
                  }}
                  checked={
                    selectionCheckedList.includes(item.id) ? true : false
                  }
                />
                <span>{item.data}</span>
              </label>
            );
          })}
        </div>
        <button onClick={filterSubmitHandler}>검색</button>
      </div>
    </div>
  );
};

export default FilterModal;
