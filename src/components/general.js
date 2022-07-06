import React, { Component } from "react";
import "../styles/general.css";
import Contact from "./Contact-Info";

class General extends Component {
  render() {
    return (
      <div id="main-General">
        <h1 id="nameField">{this.props.dataGeneral.name} </h1>
        <p id="overviewPara">{this.props.dataGeneral.overview}</p>
        <Contact dataGeneral={this.props.dataGeneral} />
      </div>
    );
  }
}

export default General;
