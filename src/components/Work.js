import React, { Component } from "react";
import "../styles/Work.css";
import Experience from "./Experience";

class Work extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="main-Work">
        <h2 id="workExp">Work Experience</h2>
        <Experience {...this.props} />
        {/* <Experience />
        <Experience /> */}
      </div>
    );
  }
}

export default Work;
