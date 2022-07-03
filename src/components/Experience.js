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
        <ul>
          <li className="expWrap hide" id={"ex1-" + this.props.index}>
            {this.props.data.ex1}
          </li>
          <li className="expWrap hide" id={"ex2-" + this.props.index}>
            {this.props.data.ex2}
          </li>
          <li className="expWrap hide" id={"ex3-" + this.props.index}>
            {this.props.data.ex3}
          </li>
          <li className="expWrap hide" id={"ex4-" + this.props.index}>
            {this.props.data.ex4}
          </li>
          <li className="expWrap hide" id={"ex5-" + this.props.index}>
            {this.props.data.ex5}
          </li>
        </ul>
      </div>
    );
  }
}

export default Experience;
