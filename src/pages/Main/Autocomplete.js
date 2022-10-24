import { Children, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Autocomplete.scss";

const Autocomplete = ({ name, onChange }) => {
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  const lectureList = useSelector(
    (state) => state.filteredLecture.filteredLecture
  );

  //   console.log(lectureList);

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption);
  };

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
      setOptions([]);
    } else {
      const lectureNameList = [];
      for (var lecture = 0; lecture < lectureList.length; lecture++) {
        lectureNameList.push(lectureList[lecture].name);
      }
      //   console.log(lectureNameList);
      setOptions(
        lectureNameList.filter((option) => {
          return option.includes(inputValue);
        })
      );
      //   setOptions([...new Set(options)]);
    }
  }, [inputValue]);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    setHasText(true);
    onChange(event.target.value);
  };

  return (
    <div>
      <div className="modal-contents-second">
        <label className="modal-contents-second-label">교과목명</label>
        <input
          className="modal-contents-second-input"
          onChange={inputChangeHandler}
          placeholder={name}
        ></input>
      </div>
      <div>
        {hasText && (
          <DropDown
            options={options}
            handleComboBox={handleDropDownClick}
          ></DropDown>
        )}
      </div>
    </div>
  );
};

export const DropDown = ({ options, handleComboBox, selected }) => {
  return (
    <div className="dropdownContainer">
      {options
        .filter((element, index) => options.indexOf(element) === index)
        .map((option, index) => {
          return (
            <div
              className="dropdownContainer-item"
              key={index}
              onClick={() => handleComboBox(option)}
            >
              {option}
            </div>
          );
        })}
    </div>
  );
};

export default Autocomplete;
