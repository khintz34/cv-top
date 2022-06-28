import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  render() {
    let num = this.props.data.main.num;
    console.log(this.props.data.main);
    console.log(this.props.education[num].main);
    return (
      <div id="main-Education">
        <h3 id="header-Education">Education</h3>
        <div>
          <p id="fsdhg">{this.props.education[num].main.data.institute}</p>
          <p id={this.props.data.main.type}>
            {this.props.education[num].main.data.institute}
          </p>
          <p id={this.props.data.main.years}>
            {this.props.education[num].main.data.institute}
          </p>
        </div>
      </div>
    );
  }
}

export default Education;
