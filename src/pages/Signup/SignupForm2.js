import './SignupForm.scss'

const SignupForm2 = (props) => {
  return (
    <form className="signup-form">
      <div className='signup-form-nameinput'>
        <label htmlFor="user_name">이름</label>
        <input type="text" id='user_name'/>
      </div>
      <div className="signup-form-adyear">
        <label htmlFor="adyear">입학년도</label>
        <select id="adyear">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
      <div>
        <label htmlFor="grade">학년</label>
        <select id="">
          <option value="1grade">1학년</option>
          <option value="2grade">2학년</option>
          <option value="3grade">3학년</option>s
          <option value="4grade">4학년</option>
        </select>
        <label htmlFor="semester">학기</label>
        <select id="semester">
          <option value="1st">1학기</option>
          <option value="2nd">2학기</option>
        </select>
      </div>
      <button className="signup-form-button" onClick={props.showThirdPage}>회원가입</button>
    </form>
  );
};

export default SignupForm2;