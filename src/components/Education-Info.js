import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  render() {
    return (
      <div id="main-Education">
        <div>{this.props.data.type}</div>
        <div>{this.props.data.institute}</div>
        <div>{this.props.data.years}</div>
      </div>
    );
  }
}

export default Education;
