import React from "react";
import "../styles/Inputs.css";

const InputField = (props) => {
  return (
    <input
      type="text"
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.change}
      value={props.value}
      maxLength={props.maxLength}
    />
  );
};
export default InputField;
