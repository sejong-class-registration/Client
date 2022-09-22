import React from "react";
import "./FilterModal.scss";

const FilterModal = (props) => {
  return (
    <div>
      <div className="filtermodal-backdrop" onClick = {props.onClose}/>
      <div className="filtermodal">
        <div>학점 드롭다운</div>
        <div>선택영역 드롭다운</div>
        <button>검색</button>
      </div>
    </div>
  );
};

export default FilterModal;
