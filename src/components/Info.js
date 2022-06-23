import React, { Component } from "react";
import "../styles/Info.css";
// import Contact from "./Contact-Info";
import Education from "./Education-Info";
import Skills from "./Skills-Info";

class Info extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="main-Info">
        {/* <Contact {...this.props} /> */}
        <Skills {...this.props} />
        <Education {...this.props} />
      </div>
    );
  }
}

export default Info;
