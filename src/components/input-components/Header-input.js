import React from "react";
import "../../styles/Inputs.css";
import "../../styles/Work.css";

const HeaderInputs = (props) => {
  return <h2 id={props.id}>{props.header}</h2>;
};
export default HeaderInputs;
