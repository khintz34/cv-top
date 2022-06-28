import React, { Component } from "react";
import "../styles/Info.css";
import uniqid from "uniqid";
import Education from "./Education-Info";
import Skills from "./Skills-Info";

class Info extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    let test =
      this.props && this.props.education.length > 0 ? (
        this.props.education.map((formData) => (
          <Education data={formData} {...this.props} key={uniqid()} />
        ))
      ) : (
        <span>ERROR - INFO.JS</span>
      );

    return (
      <div id="main-Info">
        <Skills {...this.props} />
        {/* {this.props.education.map((formData) => (
          <Education data={formData} {...this.props} key={uniqid()} />
        ))} */}
        {test}
      </div>
    );
  }
}

export default Info;
