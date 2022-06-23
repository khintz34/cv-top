import { Component } from "react";
import "/Users/KevinHintz/the_oden_project/react-top/cv-top/src/styles/Inputs.css";

class SkillsInputs extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    // const { task, tasks } = this.state;
    return (
      <div id="main-Education-Inputs" className="outline">
        <h2>Relevant Skills / Attributes</h2>
        <form action="" id="fSkills" onChange={this.props.skillChange}>
          <input
            type="text"
            id="fSkill1"
            name="fSkill1"
            className="skillInput"
            placeholder="Skill1"
            maxLength="16ch"
          />
          <br />

          <input
            type="text"
            id="fSkill2"
            name="fSkill2"
            className="skillInput"
            placeholder="Skill2"
            maxLength="16ch"
          />
          <br />

          <input
            type="text"
            id="fSkill3"
            name="fSkill3"
            className="skillInput"
            placeholder="Skill3"
            maxLength="16ch"
          />
          <br />

          <input
            type="text"
            id="fSkill4"
            name="fSkill4"
            className="skillInput"
            placeholder="Skill4"
            maxLength="16ch"
          />
          <br />

          <input
            type="text"
            id="fSkill5"
            name="fSkill5"
            className="skillInput"
            placeholder="Skill5"
            maxLength="16ch"
          />
          <br />

          <input
            type="text"
            id="fSkill6"
            name="fSkill6"
            className="skillInput"
            placeholder="Skill6"
            maxLength="16ch"
          />
          <br />

          <input
            type="text"
            id="fSkill7"
            name="fSkill7"
            className="skillInput"
            placeholder="Skill7"
            maxLength="16ch"
          />
          <br />

          <input
            type="text"
            id="fSkill8"
            name="fSkill8"
            className="skillInput"
            placeholder="Skill8"
            maxLength="16ch"
          />
        </form>
      </div>
    );
  }
}

export default SkillsInputs;
