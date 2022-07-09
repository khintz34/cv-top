import React from "react";
import "../styles/Education.css";

const Education = (props) => {
  return (
    <div id="main-Education">
      <div>{props.data.type}</div>
      <div>{props.data.institute}</div>
      <div>{props.data.years}</div>
    </div>
  );
};

export default Education;
