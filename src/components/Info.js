import React, { Component } from "react";
import "../styles/Info.css";
import Education from "./Education-Info";
import Skills from "./Skills-Info";
import H3Header from "./H3-header";

class Info extends Component {
  render() {
    return (
      <div id="main-Info">
        <Skills skills={this.props.skills} />
        <H3Header header="Education" />
        {this.props.education.map((formData, i) => (
          <Education data={formData} key={`education-info-section-${i}`} />
        ))}
      </div>
    );
  }
}

export default Info;
