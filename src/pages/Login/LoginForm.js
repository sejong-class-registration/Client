import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userInfoActions } from "../../redux/slice/userSlice";
import axios from "axios";
import "./LoginForm.scss";
import Loading2 from "../../UI/Loading2";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [EnteredInput, setEnteredInput] = useState({ id: "", pw: "" });
  const [EnteredInputIsValid, setEnteredInputIsValid] = useState({
    id: true,
    pw: true,
  });
  const [inputIsTouched, setInputIsTouched] = useState({
    id: false,
    pw: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const inputChangeHandler = (event) => {
    setEnteredInput((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

  const inputBlurHandler = (e) => {
    const selectedId = e.target.id;
    setInputIsTouched((prev) => {
      return { ...prev, [selectedId]: true };
    });

    if (selectedId === "id") {
      if (EnteredInput.id.trim() === "" || isNaN(EnteredInput.id)) {
        setEnteredInputIsValid((prev) => {
          return { ...prev, id: false };
        });
      } else {
        setEnteredInputIsValid((prev) => {
          return { ...prev, id: true };
        });
      }
    } else {
      if (EnteredInput.pw.trim() === "") {
        setEnteredInputIsValid((prev) => {
          return { ...prev, pw: false };
        });
      } else {
        setEnteredInputIsValid((prev) => {
          return { ...prev, pw: true };
        });
      }
    }
  };

  const LoginSubmitHandler = (event) => {
    event.preventDefault();
    if (
      (!EnteredInputIsValid.id &&
        inputIsTouched.id &&
        !EnteredInputIsValid.pw &&
        inputIsTouched.pw) ||
      !inputIsTouched.id ||
      !inputIsTouched.pw
    ) {
      setEnteredInputIsValid({ id: false, pw: false });
      return;
    } else if (
      (!EnteredInputIsValid.id && inputIsTouched.id) ||
      !inputIsTouched.id
    ) {
      setEnteredInputIsValid((prev) => {
        return { ...prev, id: false };
      });
      return;
    } else if (
      (!EnteredInputIsValid.pw && inputIsTouched.pw) ||
      !inputIsTouched.pw
    ) {
      setEnteredInputIsValid((prev) => {
        return { ...prev, pw: false };
      });
      return;
    }

    loginFetchHandler();
  };

  const loginFetchHandler = async () => {
    // fetch("https://sejong-enrollment.herokuapp.com/users/signin", {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     studentId: EnteredInput.id * 1,
    //     password: EnteredInput.pw * 1,
    //   }),
    // }).then(response => response.json())
    // .then(result => console.log(result))
    setIsLoading(true);
    const response = await axios
      .post("https://sejong-enrollment.herokuapp.com/users/signin", {
        studentId: EnteredInput.id,
        password: EnteredInput.pw,
      })
      // .post("https://sejong-enrollment.herokuapp.com/users/signin", {
      //   studentId: EnteredInput.id,
      //   password: EnteredInput.pw,
      // })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        if (response.status === 201) {
          window.localStorage.setItem("token", response.data.token);
          dispatch(userInfoActions.saveUserInfo(response.data.data));
          navigate("/main");
        } else {
          alert(response.data.message);
        }
      });
  };

  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      inputBlurHandler(event);
    }
  };

  const idInputClassName = EnteredInputIsValid.id ? "" : "login-invalid-input";
  const pwInputClassName = EnteredInputIsValid.pw ? "" : "login-invalid-input";

  return (
    <div>
      <form
        onKeyPress={onCheckEnter}
        onSubmit={LoginSubmitHandler}
        className="login-formbox"
      >
        <p>??????/?????????</p>
        <input
          className={idInputClassName}
          type="text"
          id="id"
          onBlur={inputBlurHandler}
          onChange={inputChangeHandler}
          value={EnteredInput.id}
        />
        {!EnteredInputIsValid.id && (
          <p className="login-invalid">?????????(??????)??? ??????????????????</p>
        )}
        <p>????????????</p>
        <input
          className={pwInputClassName}
          type="password"
          id="pw"
          onBlur={inputBlurHandler}
          onChange={inputChangeHandler}
          value={EnteredInput.pw}
        />
        {!EnteredInputIsValid.pw && (
          <p className="login-invalid">??????????????? ??????????????????</p>
        )}
        <div className="login-formbox-help">
          {/* <span>
          <NavLink to="/findpw">???????????? ??????</NavLink>
        </span> */}
          <span>
            <NavLink to="/signup">????????????</NavLink>
          </span>
        </div>
        <button>?????????</button>
      </form>
      {isLoading && (
        <div className="login-loading">
          <Loading2 />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
