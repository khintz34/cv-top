import React, { Component } from "react";
import "../styles/Skills.css";
import H3Header from "./H3-header";

class Skills extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="main-Skills">
        <H3Header header="Technical Skills" />
        <div className="skillDiv" id="skill1-Info">
          {this.props.skills.skill1}
        </div>
        <div className="skillDiv" id="skill2-Info">
          {this.props.skills.skill2}
        </div>
        <div className="skillDiv" id="skill3-Info">
          {this.props.skills.skill3}
        </div>
        <div className="skillDiv" id="skill4-Info">
          {this.props.skills.skill4}
        </div>
        <div className="skillDiv" id="skill5-Info">
          {this.props.skills.skill5}
        </div>
        <div className="skillDiv" id="skill6-Info">
          {this.props.skills.skill6}
        </div>
        <div className="skillDiv" id="skill7-Info">
          {this.props.skills.skill7}
        </div>
        <div className="skillDiv" id="skill8-Info">
          {this.props.skills.skill8}
        </div>
      </div>
    );
  }
}

export default Skills;
