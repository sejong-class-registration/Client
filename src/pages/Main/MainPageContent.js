import "./MainPageContent.scss";
import searchIcon from "../../common/icons/searchIcon.svg";
import Modal from "./Modal";
import { useState } from "react";

const MainPageContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const lecture = {
    title: "알고리즘및실습",
    type: "전필",
    score: 3,
    time: "화 10:30 - 12:30",
    prof: "노재춘",
  };
  return (
    <div className="body">
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
          {modalOpen && <Modal close={closeModal}></Modal>}
          <button className="filter-button" onClick={openModal}>
            <img className="filter-button-img" src={searchIcon}></img>
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
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
            <div className="lecture">
              <div className="lecture_title">{lecture.title}</div>
              <div className="lecture_type">{lecture.type}</div>
              <div className="lecture_score">{lecture.score + "학점"}</div>
              <div className="lecture_time">{lecture.time}</div>
              <div className="lecture_prof">{lecture.prof}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPageContent;
