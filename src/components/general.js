import React, { Component } from "react";
import "../styles/general.css";
import Contact from "./Contact-Info";

class General extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="main-General">
        <h1 id="nameField">{this.props.general.name}</h1>
        <p id="overviewPara">{this.props.general.overview}</p>
        <Contact {...this.props} />
      </div>
    );
  }
}

export default General;
