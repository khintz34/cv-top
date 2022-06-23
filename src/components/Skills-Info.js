import React, { Component } from "react";
import "../styles/Skills.css";

class Skills extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="main-Skills">
        <h3 id="header-Skills">Technical Skills</h3>
        <p>{this.props.skills.fSkill1}</p>
        <p>{this.props.skills.fSkill2}</p>
        <p>{this.props.skills.fSkill3}</p>
        <p>{this.props.skills.fSkill4}</p>
        <p>{this.props.skills.fSkill5}</p>
        <p>{this.props.skills.fSkill6}</p>
        <p>{this.props.skills.fSkill7}</p>
        <p>{this.props.skills.fSkill8}</p>
      </div>
    );
  }
}

export default Skills;
