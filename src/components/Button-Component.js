import React from "react";
import "../styles/Inputs.css";

const ButtonComponent = (props) => {
  return (
    <div className="btnLine">
      <button className={props.class} type="button" onClick={props.add}>
        Add
      </button>
      <button type="button" className={props.class} onClick={props.delete}>
        Delete
      </button>
    </div>
  );
};
export default ButtonComponent;
