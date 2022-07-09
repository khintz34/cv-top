import React from "react";
import "../styles/Inputs.css";

const TextareaComponent = (props) => {
  return (
    <textarea
      className={props.class}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      value={props.value}
      onChange={props.onChange}
      cols={props.cols}
      rows={props.rows}
      id={props.id}
    ></textarea>
  );
};

export default TextareaComponent;
