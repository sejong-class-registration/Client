import React from "react";
import './Toast.scss';

const Toast = (props) => {
  return (
    <div className="toast_container">
      <div className="toast_text">{props.text}</div>
    </div>
  )
}

export default Toast;