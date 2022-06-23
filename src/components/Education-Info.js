import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="main-Education">
        <h3 id="header-Education">Education</h3>
        <div>
          <p id="eduInst">Institute</p>
          <p id="eduType">Type</p>
          <p id="eduYears">Years</p>
        </div>
        {/* <div>
          <p>Institute</p>
          <p>Type</p>
          <p>Years</p>
        </div> */}
      </div>
    );
  }
}

export default Education;
