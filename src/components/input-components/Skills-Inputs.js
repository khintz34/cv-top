import React from "react";
import "../../styles/Inputs.css";
import InputField from "../Input-Field";
import HeaderInputs from "./Header-input";

const SkillsInputs = (props) => {
  return (
    <div id="main-Skills-Inputs" className="outline">
      <HeaderInputs header="Relevant Skills / Attributes" />
      <form action="" id="fSkills" className="centerAll">
        <InputField
          placeholder="Skill1"
          className="skillInput"
          value={props.skills.skill1}
          maxLength="16ch"
          change={(e) => {
            props.changeSkills("skill1", e.target.value);
          }}
        />
        <br />

        <InputField
          placeholder="Skill2"
          className="skillInput"
          value={props.skills.skill2}
          maxLength="16ch"
          change={(e) => {
            props.changeSkills("skill2", e.target.value);
          }}
        />
        <br />
        <InputField
          placeholder="Skill3"
          className="skillInput"
          value={props.skills.skill3}
          maxLength="16ch"
          change={(e) => {
            props.changeSkills("skill3", e.target.value);
          }}
        />

        <br />
        <InputField
          placeholder="Skill4"
          className="skillInput"
          value={props.skills.skill4}
          maxLength="16ch"
          change={(e) => {
            props.changeSkills("skill4", e.target.value);
          }}
        />
        <br />
        <InputField
          placeholder="Skill5"
          className="skillInput"
          value={props.skills.skill5}
          maxLength="16ch"
          change={(e) => {
            props.changeSkills("skill5", e.target.value);
          }}
        />

        <br />
        <InputField
          placeholder="Skill6"
          className="skillInput"
          value={props.skills.skill6}
          maxLength="16ch"
          change={(e) => {
            props.changeSkills("skill6", e.target.value);
          }}
        />

        <br />

        <InputField
          placeholder="Skill7"
          className="skillInput"
          value={props.skills.skill7}
          maxLength="16ch"
          change={(e) => {
            props.changeSkills("skill7", e.target.value);
          }}
        />

        <br />

        <InputField
          placeholder="Skill8"
          className="skillInput"
          value={props.skills.skill8}
          maxLength="16ch"
          change={(e) => {
            props.changeSkills("skill8", e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SkillsInputs;
