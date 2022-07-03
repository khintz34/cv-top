import { Component } from "react";
import "../../styles/Inputs.css";
import HeaderInputs from "./Header-input";

class SkillsInputs extends Component {
  render() {
    return (
      <div id="main-Skills-Inputs" className="outline">
        <HeaderInputs header="Relevant Skills / Attributes" />
        <form
          action=""
          id="fSkills"
          onChange={this.props.skillChange}
          className="centerAll"
        >
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
