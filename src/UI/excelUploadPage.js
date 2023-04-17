import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { excelFileactions } from "../redux/slice/excelfileSlice";
import "./excelUploadPage.scss";
import { graduateLectureSliceActions } from "../redux/slice/graduateLecture";
import { userInfoActions } from "../redux/slice/userSlice";

const ExcelUploadPage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.userInfo);

  const handleSubmit = async (e) => {
    dispatch(excelFileactions.uploadExcelfile());
    const tempFile = e.target.files[0];
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
    const { data } = response.data;
    dispatch(
      userInfoActions.saveUserGraduation({
        recommendLecture: data.recommendLecture,
        geArea: data.geArea,
        geAreaTaken: data.geAreaTaken,
        takenLectures: data.takenlectures,
        totalCredit: data.totalCredit,
      })
    );
    getGraduateData();
  };

  const getGraduateData = async () => {
    const response = await axios(
      `https://sejong-enrollment.herokuapp.com/graduation?studentId=${userInfo.studentId}`
    ).then((response) => {
      if (response.status === 200) {
        dispatch(
          graduateLectureSliceActions.saveGraduateLectures(response.data.data)
        );
      }
    });
  };


  return (
    <div className="filebox">
      <label htmlFor="ex_file">업로드</label>
      <input
        type="file"
        id="ex_file"
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
