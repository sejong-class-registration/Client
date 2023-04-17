import React from "react";
import AdminNavigation from "../../../UI/adminNavigation";
import "./scheduleUpdate.scss";

const ScheduleUpdate = (props) => {
  return (
    <div className="scheduleUpdate">
      <AdminNavigation onPage={10} />
      <div className="scheduleUpdate-content">
        <div className="scheduleUpdate-content-title">시간표 갱신</div>
        <div className="scheduleUpdate-content-update">
          <div className="scheduleUpdate-content-update-title">
            시간표 추가 / 수정
          </div>
          <div className="scheduleUpdate-content-update-box">
            <label
              htmlFor=""
              className="scheduleUpdate-content-update-box-label"
            >
              <input
                type="number"
                defaultValue={2023}
                className="scheduleUpdate-content-update-box-input"
              />
              년도
            </label>
            <label htmlFor="">
              <select
                name="semester"
                id="semester"
                className="scheduleUpdate-content-update-box-select"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="summer">여름계절</option>
                <option value="winter">겨울계절</option>
              </select>
              학기
            </label>
            <label htmlFor="upload" className="scheduleUpdate-content-update-box-upload">
              엑셀파일 업로드<button id="upload" className="scheduleUpdate-content-update-box-upload-button">업로드</button>
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
                htmlFor=""
                className="scheduleUpdate-content-update-box-label"
              >
                <input
                  type="number"
                  defaultValue={2023}
                  className="scheduleUpdate-content-update-box-input"
                />
                년도
              </label>
              <label htmlFor="">
                <select
                  name="semester"
                  id="semester"
                  className="scheduleUpdate-content-update-box-select"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="summer">여름계절</option>
                  <option value="winter">겨울계절</option>
                </select>
                학기
              </label>
              <label htmlFor="delete">
                {"        "}<button id="delete" className="scheduleUpdate-content-delete-box-button">삭제</button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleUpdate;
