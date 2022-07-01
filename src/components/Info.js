import React, { Component } from "react";
import "../styles/Info.css";
import Education from "./Education-Info";
import Skills from "./Skills-Info";

class Info extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    // let test =
    //   this.props && this.props.education.length > 0 ? (
    //     this.props.education.map((formData, i) => (
    //       <Education
    //         data={formData}
    //         educationChange={this.props.educationChange}
    //         key={`education-input-section-${i}`}
    //       />
    //     ))
    //   ) : (
    //     <span>ERROR - INFO.JS</span>
    //   );

    return (
      <div id="main-Info">
        <Skills {...this.props} />
        {/* {this.props.education.map((formData) => (
          <Education data={formData} {...this.props} key={uniqid()} />
        ))} */}
        {/* {test} */}
        {this.props.education.map((formData, i) => (
          <Education data={formData} key={`education-info-section-${i}`} />
        ))}
      </div>
    );
  }
}

export default Info;
