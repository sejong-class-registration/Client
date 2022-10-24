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
      setOptions();
    }
  }, [inputValue]);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    setHasText(true);
    onChange(event.target.value);
  };

  return (
    <input
      className="modal-contents-second-input"
      onChange={inputChangeHandler}
      placeholder={name}
    ></input>
  );
};

export default Autocomplete;
