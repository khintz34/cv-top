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
        <div className="skillDiv" id="fSkill1-Info">
          {this.props.skills.fSkill1}
        </div>
        <div className="skillDiv" id="fSkill2-Info">
          {this.props.skills.fSkill2}
        </div>
        <div className="skillDiv" id="fSkill3-Info">
          {this.props.skills.fSkill3}
        </div>
        <div className="skillDiv" id="fSkill4-Info">
          {this.props.skills.fSkill4}
        </div>
        <div className="skillDiv" id="fSkill5-Info">
          {this.props.skills.fSkill5}
        </div>
        <div className="skillDiv" id="fSkill6-Info">
          {this.props.skills.fSkill6}
        </div>
        <div className="skillDiv" id="fSkill7-Info">
          {this.props.skills.fSkill7}
        </div>
        <div className="skillDiv" id="fSkill8-Info">
          {this.props.skills.fSkill8}
        </div>
      </div>
    );
  }
}

export default Skills;
