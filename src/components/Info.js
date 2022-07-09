import React from "react";
import "../styles/Info.css";
import Education from "./Education-Info";
import Skills from "./Skills-Info";
import H3Header from "./H3-header";

const Info = (props) => {
  return (
    <div id="main-Info">
      <Skills skills={props.skills} />
      <H3Header header="Education" />
      {props.education.map((formData, i) => (
        <Education data={formData} key={`education-info-section-${i}`} />
      ))}
    </div>
  );
};

export default Info;
