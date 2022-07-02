import React, { Component } from "react";
import "../styles/Work.css";
import Experience from "./Experience";

class Work extends Component {
  render() {
    return (
      <div id="main-Work">
        <h2 id="workExp">Work Experience</h2>
        {this.props.experience.map((formData, i) => (
          <Experience data={formData} key={`experience-info-section-${i}`} />
        ))}
      </div>
    );
  }
}

export default Work;
