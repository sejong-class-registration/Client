import "./MainPageContent.scss";

const MainPageContent = () => {
  return (
    <div>
      <label className="calendar-label">2022-2학기</label>
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
          <div>
            <div>졸업까지 남은 학점: 20</div>
            <div>이번학기 남은 학점: 6</div>
          </div>
          <div>
            <ul>
              <button>A</button>
              <button>B</button>
              <button>C</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageContent;
