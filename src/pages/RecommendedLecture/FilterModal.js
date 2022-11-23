import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkboxActions } from "../../redux/slice/checkboxSlice";
import "./FilterModal.scss";

const GRADES_CHECKBOX_LIST = [
  { id: "0.5g", data: 0.5 },
  { id: "1g", data: 1 },
  { id: "2g", data: 2 },
  { id: "3g", data: 3 },
];
const SELECTION_CHECKBOX_LIST = [
  { id: "1s", data: "사상과역사" },
  { id: "2s", data: "사회와문화" },
  { id: "3s", data: "자기계발과진로" },
  { id: "4s", data: "자연과과학기술" },
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

  const onGradesCheckedElement = (i) => {
    dispatch(checkboxActions.gradeChecked(i));
  };

  const onSelectionCheckedElemnet = (i) => {
    dispatch(checkboxActions.selectionChecked(i));
  };


  const filterSubmitHandler = () => {
    // let checkedList = {
    //   grades: savedGradesCheckboxList,
    //   selection: savedSelectionCheckboxList,
    // };
    let convertedList = {
      convertedGrades: [0.5, 1, 2, 3],
      convertedSelections: ['사상과역사', '사회와문화', '자기계발과진로', '자연과과학기술', '세계와지구촌',  '예술과체육'],
    }
  
    if(savedGradesCheckboxList[0] === true){
      convertedList.convertedGrades.push(0.5);
    }else{
      convertedList.convertedGrades = convertedList.convertedGrades.filter((element) => element !== 0.5);
    }if(savedGradesCheckboxList[1] === true){
      convertedList.convertedGrades.push(1);
    }else{
      convertedList.convertedGrades = convertedList.convertedGrades.filter((element) => element !== 1);
    }if(savedGradesCheckboxList[2] === true){
      convertedList.convertedGrades.push(2);
    }else{
      convertedList.convertedGrades = convertedList.convertedGrades.filter((element) => element !== 2);
    }if(savedGradesCheckboxList[3] === true){
      convertedList.convertedGrades.push(3);
    }else{
      convertedList.convertedGrades = convertedList.convertedGrades.filter((element) => element !== 3);
    }

    if(savedSelectionCheckboxList[0] === true){
      convertedList.convertedSelections.push('사상과역사');
    }else{
      convertedList.convertedSelections = convertedList.convertedSelections.filter((element) => element !== '사상과역사');
    }if(savedSelectionCheckboxList[1] === true){
      convertedList.convertedSelections.push('사회와문화');
    }else{
      convertedList.convertedSelections = convertedList.convertedSelections.filter((element) => element !== '사회와문화');
    }if(savedSelectionCheckboxList[2] === true){
      convertedList.convertedSelections.push('자기계발과진로');
    }else{
      convertedList.convertedSelections = convertedList.convertedSelections.filter((element) => element !== '자기계발과진로');
    }if(savedSelectionCheckboxList[3] === true){
      convertedList.convertedSelections.push('자연과과학기술');
    }else{
      convertedList.convertedSelections = convertedList.convertedSelections.filter((element) => element !== '자연과과학기술');
    }if(savedSelectionCheckboxList[4] === true){
      convertedList.convertedSelections.push('세계와지구촌');
    }else{
      convertedList.convertedSelections = convertedList.convertedSelections.filter((element) => element !== '세계와지구촌');
    }if(savedSelectionCheckboxList[5] === true){
      convertedList.convertedSelections.push('예술과체육');
    }else{
      convertedList.convertedSelections = convertedList.convertedSelections.filter((element) => element !== '예술과체육');
    }if(savedSelectionCheckboxList[6] === true){
      convertedList.convertedSelections.push('융합과 창업', '사회와제도', '인성과도덕', '역사와문화', '생명과자연', '예술과생활', "생명과 과학");
    }else{
      convertedList.convertedSelections = convertedList.convertedSelections.filter((element) => element !== '융합과 창업', '사회와제도', '인성과도덕', '역사와문화', '생명과자연', '예술과생활', "생명과 과학");
    }

    props.onSearch(convertedList);
    props.onClose();
  };

  return (
    <div>
      <div className="filtermodal-backdrop" onClick={props.onClose} />
      <div className="filtermodal">
        <div className="filtermodal-grades">
          <p>학점</p>
          <div className="filtermodal-grades-checkboxlist">
            {GRADES_CHECKBOX_LIST.map((item, i) => {
              return (
                <label htmlFor={item.id} key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    onChange={() => {
                      onGradesCheckedElement(i);
                    }}
                    checked={savedGradesCheckboxList[i]}
                  />
                  <span>{item.data}학점</span>
                </label>
              );
            })}
          </div>
        </div>
        <div>
          <p>선택영역</p>
          {SELECTION_CHECKBOX_LIST.map((item, i) => {
            return (
              <label htmlFor={item.id} key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={() => {
                    onSelectionCheckedElemnet(i);
                  }}
                  checked={savedSelectionCheckboxList[i]}
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
