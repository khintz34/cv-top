import React from "react";
import "../styles/Work.css";
import Experience from "./Experience";
import HeaderInputs from "./input-components/Header-input";

const Work = (props) => {
  return (
    <div id="main-Work">
      <HeaderInputs header="Work Experience" id="workExp" />
      {props.experience.map((formData, i) => (
        <Experience
          data={formData}
          key={`experience-info-section-${i}`}
          index={i}
        />
      ))}
    </div>
  );
};

export default Work;
