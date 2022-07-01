import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  render() {
    return (
      <div id="main-Education">
        <h3 id="header-Education">Education</h3>
        <div>{this.props.data.type}</div>
        {/* <div>
          <p id="fsdhg">{this.props.education[num].main.data.institute}</p>
          <p id={this.props.data.main.type}>
            {this.props.education[num].main.data.institute}
          </p>
          <p id={this.props.data.main.years}>
            {this.props.education[num].main.data.institute}
          </p>
        </div> */}
      </div>
    );
  }
}

export default Education;
