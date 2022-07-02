import React, { Component } from "react";
import "../styles/Experience.css";

class Experience extends Component {
  render() {
    return (
      <div id="main-Exp">
        <div className="seperateLines">
          <h4>{this.props.data.jobTitle}</h4>
          <h4>{this.props.data.company}</h4>
        </div>
        <div className="seperateLines">
          <h4>{this.props.data.years}</h4>
          <h4>{this.props.data.location}</h4>
        </div>
        <ol>
          <li className="expWrap">{this.props.data.ex1}</li>
          <li className="expWrap">{this.props.data.ex2}</li>
          <li className="expWrap">{this.props.data.ex3}</li>
        </ol>
      </div>
    );
  }
}

export default Experience;
