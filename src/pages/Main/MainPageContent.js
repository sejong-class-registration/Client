import "./MainPageContent.scss";
import searchIcon from "../../common/icons/searchIcon.svg";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import ClassModal from "./ClassModal";
import axios from "axios";
import LectureItem from "./LectureItem";

const MainPageContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [classModalOpen, setClassModalOpen] = useState(false);
  const [lectureList, setLectureList] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getLectureList = async () => {
    const response = await axios(
      `https://sejong-enrollment.herokuapp.com/lectures`
    );
    setLectureList(response.data.data.lectures);
  };

  // console.log(lectureList);

  useEffect(() => {
    getLectureList();
  }, []);

  const openClassModal = () => {
    setClassModalOpen(true);
    // console.log(classModalOpen);
  };
  const closeClassModal = () => {
    setClassModalOpen(false);
    // console.log(classModalOpen);
  };
  return (
    <div className="body">
      {classModalOpen && <ClassModal close={closeClassModal}></ClassModal>}
      {modalOpen && <Modal close={closeModal}></Modal>}
      <div className="frame_1">
        <div className="calendar-label">
          <label>2022-2학기</label>
        </div>
        <div className="calendar">
          <table className="calendar-table">
            <tr>
              <th className="calendar-number left_up_corner"></th>
              <td className="calendar-day">월</td>
              <td className="calendar-day">화</td>
              <td className="calendar-day">수</td>
              <td className="calendar-day">목</td>
              <td className="calendar-day right_up_corner">금</td>
            </tr>
            <tr>
              <td className="calendar-number">9</td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
            </tr>
            <tr>
              <td className="calendar-number">10</td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
            </tr>
            <tr>
              <td className="calendar-number">11</td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
            </tr>
            <tr>
              <td className="calendar-number">12</td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
            </tr>
            <tr>
              <td className="calendar-number">13</td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
            </tr>
            <tr>
              <td className="calendar-number">14</td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
            </tr>
            <tr>
              <td className="calendar-number">15</td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
            </tr>
            <tr>
              <td className="calendar-number">16</td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
            </tr>
            <tr>
              <td className="calendar-number left_down_corner">17</td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class"></td>
              <td className="calendar-class right_down_corner"></td>
            </tr>
          </table>
          <div className="calendar-info">
            <div className="calendar-info-calculator">
              <div>졸업까지 남은 학점: 20</div>
              <div>이번학기 남은 학점: 6</div>
            </div>
            <div className="calendar-info-buttons">
              <button className="calendar-info-buttons-button">A</button>
              <button className="calendar-info-buttons-button">B</button>
              <button className="calendar-info-buttons-button">C</button>
            </div>
          </div>
        </div>
      </div>
      <div className="frame_2">
        <div className="filter">
          <button className="filter-button" onClick={openModal}>
            <img className="filter-button-img" src={searchIcon} alt=""></img>
          </button>
        </div>
        <div className="content2">
          <div className="sort_selecter">
            <select className="sort_selecter-select">
              <option value="가나다 순">가나다 순</option>
              <option value="이수 구분">이수 구분</option>
              <option value="요일 순">요일 순</option>
              <option value="평점 순">평정 순</option>
              <option value="교수명 순">교수명 순</option>
            </select>
          </div>
          <div className="lecture_list">
            {lectureList.map((lecture) => (
              <LectureItem
                key={lecture._id}
                classification={lecture.classification}
                credit={lecture.credit}
                dayAndTime={lecture.dayAndTime}
                department={lecture.department}
                distrib={lecture.distrib}
                lectureGrade={lecture.lectureGrade}
                lectureId={lecture.lectureId}
                name={lecture.name}
                profName={lecture.profName}
                room={lecture.room}
                id={lecture._id}
                openClassModal={openClassModal}
              ></LectureItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPageContent;
