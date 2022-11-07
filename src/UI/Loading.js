import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./Loading.scss";

const Loading = (props) => {
  return (
    <div className="loading">
      <PulseLoader
        color="#c3002f"
        size={30}
        margin={20}
        speedMultiplier = {0.7}
        className="loading-spinner"
      />
      <div className="loading-message">{props.message}</div>
    </div>
  );
};

export default Loading;
