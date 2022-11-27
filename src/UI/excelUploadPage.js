import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { excelFileactions } from "../redux/slice/excelfileSlice";
import './excelUploadPage.scss'

const ExcelUploadPage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.userInfo);

  const handleSubmit = async (e) => {
    dispatch(excelFileactions.uploadExcelfile());
    const tempFile = e.target.files[0];
    console.log(tempFile);
    e.preventDefault();
    const formData = new FormData();
    formData.append("xlsx", tempFile);
    const response = await axios.post(
      `https://sejong-enrollment.herokuapp.com/users/${userInfo.studentId}/excel`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  return (
    <div className="filebox">
      <label htmlFor="ex_file">업로드</label>
      <input
        type="file"
        id='ex_file'
        onChange={handleSubmit}
        name="photo"
  
        // className="modal-contents-third-profName-input"
        // onChange={profNameChangeHandler}
        // placeholder={profName}
      ></input>
    </div>
  );
};

export default ExcelUploadPage;
