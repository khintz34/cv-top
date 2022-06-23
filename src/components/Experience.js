import React, { Component } from "react";
import "../styles/Experience.css";

class Experience extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="main-Exp">
        <div className="seperateLines">
          <h4 id="jobTitle">{this.props.experience.jobTitle}</h4>
          <h4 id="companyName">{this.props.experience.company}</h4>
        </div>
        <div className="seperateLines">
          <h4 id="years">{this.props.experience.years}</h4>
          <h4 id="location">{this.props.experience.location}</h4>
        </div>
        <ol>
          <li id="ex1" className="expWrap">
            {this.props.experience.ex1}
          </li>
          <li id="ex2" className="expWrap">
            {this.props.experience.ex2}
          </li>
          <li id="ex3" className="expWrap">
            {this.props.experience.ex3}
          </li>
        </ol>
      </div>
    );
  }
}

export default Experience;
