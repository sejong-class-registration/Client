import React from "react";
import AdminNavigation from "../../../UI/adminNavigation";
import "./scheduleUpdate.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ScheduleUpdate = (props) => {
  const [updateInputValue, setUpdateInputValue] = useState({
    lectureYear: "2023",
    lectureSemester: "1",
  });
  const [deleteInputValue, setdeleteInputValue] = useState({
    year: "2023",
    semester: "1",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempFile = e.target.files[0];
    const formData = new FormData();
    formData.append("xlsx", tempFile);
    formData.append("lectureYear", updateInputValue.lectureYear);
    formData.append("lectureSemester", updateInputValue.lectureSemester);
    const response = await axios.post(
      `https://port-0-sejong-enrollment-1jvasx23lbaoi6rj.gksl2.cloudtype.app/admin/lectures`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ); 
    if(response.status === 200){
      alert(response.data.message);
    }
    else{
      alert(response.data.message);
    }
  };

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    if (!getToken) {
      navigate("/admin");
    }
  }, []);

  const updateInputChangeHandler = (event) => {
    setUpdateInputValue((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

  const deleteInputChangeHandler = (event) => {
    setdeleteInputValue((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

  const deleteFetchHandler = async () => {
    const response = await axios.delete(
      "https://port-0-sejong-enrollment-1jvasx23lbaoi6rj.gksl2.cloudtype.app/admin/lectures",
      {
        data: {
          lectureYear: deleteInputValue.year,
          lectureSemester: deleteInputValue.semester,
        },
      }
    );
    if (response.status === 201) {
      alert("해당 시간표가 삭제되었습니다");
    } else {
      alert(response.data.message);
    }
  };

  const deleteButtonHandler = () => {
    console.log(deleteInputValue);
    deleteFetchHandler();
  };
  return (
    <div className="scheduleUpdate">
      <AdminNavigation onPage={10} />
      <div className="scheduleUpdate-content">
        <div className="scheduleUpdate-content-title">시간표 갱신</div>
        <div className="scheduleUpdate-content-update">
          <div className="scheduleUpdate-content-update-title">
            시간표 추가 / 수정
            <span className="scheduleUpdate-content-update-title-exp">엑셀파일만 업로드 가능합니다</span>
          </div>
          <div className="scheduleUpdate-content-update-box">
            <label
              htmlFor="lectureYear"
              className="scheduleUpdate-content-update-box-label"
            >
              <input
                id="lectureYear"
                type="number"
                className="scheduleUpdate-content-update-box-input"
                value={updateInputValue.lectureYear}
                onChange={updateInputChangeHandler}
              />
              년도
            </label>
            <label htmlFor="lectureSemester">
              <select
                name="semester"
                id="lectureSemester"
                className="scheduleUpdate-content-update-box-select"
                value={updateInputValue.lectureSemester}
                onChange={updateInputChangeHandler}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="summer">여름계절</option>
                <option value="winter">겨울계절</option>
              </select>
              학기
            </label>
            <label
              htmlFor="upload"
              className="scheduleUpdate-content-update-box-upload"
            >
              업로드
              <input
                onChange={handleSubmit}
                id="upload"
                type="file"
                accept=".xlsx"
                className="scheduleUpdate-content-update-box-upload-button"
              ></input>
            </label>
          </div>
        </div>
        <div>
          <div className="scheduleUpdate-content-update">
            <div className="scheduleUpdate-content-update-title">
              시간표 삭제
            </div>
            <div className="scheduleUpdate-content-update-box">
              <label
                htmlFor="year"
                className="scheduleUpdate-content-update-box-label"
              >
                <input
                  id="year"
                  type="number"
                  className="scheduleUpdate-content-update-box-input"
                  onChange={deleteInputChangeHandler}
                  value={deleteInputValue.year}
                />
                년도
              </label>
              <label htmlFor="semester">
                <select
                  name="semester"
                  id="semester"
                  className="scheduleUpdate-content-update-box-select"
                  onChange={deleteInputChangeHandler}
                  value={deleteInputValue.semester}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="summer">여름계절</option>
                  <option value="winter">겨울계절</option>
                </select>
                학기
              </label>
              <label htmlFor="delete">
                {"        "}
                <button
                  id="delete"
                  className="scheduleUpdate-content-delete-box-button"
                  onClick={deleteButtonHandler}
                >
                  삭제
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleUpdate;
