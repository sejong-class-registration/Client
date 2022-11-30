import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./Loading.scss";

const Loading2 = (props) => {
  return (
      <BeatLoader
        color="#c3002f"
        size={15}
        margin={10}
        speedMultiplier = {1.3}
      />
  );
};

export default Loading2;
