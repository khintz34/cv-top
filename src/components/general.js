import React from "react";
import "../styles/general.css";
import Contact from "./Contact-Info";

const General = (props) => {
  return (
    <div id="main-General">
      <h1 id="nameField">{props.dataGeneral.name} </h1>
      <p id="overviewPara">{props.dataGeneral.overview}</p>
      <Contact dataGeneral={props.dataGeneral} />
    </div>
  );
};

export default General;
