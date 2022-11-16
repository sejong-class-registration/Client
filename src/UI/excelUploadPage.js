import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { excelFileactions } from "../redux/slice/excelfileSlice";

const ExcelUploadPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(excelFileactions.uploadExcelfile());
    const tempFile = e.target.files[0];
    console.log(tempFile);
    e.preventDefault();
    const formData = new FormData();
    formData.append("xlsx", tempFile);
    axios.post(
      `https://sejong-enrollment.herokuapp.com/users/1233/excel`,

      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  return (
    <input
      type="file"
      onChange={handleSubmit}
      name="photo"

      // className="modal-contents-third-profName-input"
      // onChange={profNameChangeHandler}
      // placeholder={profName}
    ></input>
  );
};

export default ExcelUploadPage;