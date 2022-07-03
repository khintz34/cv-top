import React, { Component } from "react";
import "../styles/Work.css";
import Experience from "./Experience";
import HeaderInputs from "./input-components/Header-input";

class Work extends Component {
  render() {
    return (
      <div id="main-Work">
        <HeaderInputs header="Work Experience" id="workExp" />
        {this.props.experience.map((formData, i) => (
          <Experience
            data={formData}
            key={`experience-info-section-${i}`}
            index={i}
          />
        ))}
      </div>
    );
  }
}

export default Work;
