import React from "react";
import "../../styles/Inputs.css";
import ButtonComponent from "../Button-Component";
import InputField from "../Input-Field";

const EducationInputs = (props) => {
  return (
    <div id="main-Education-Inputs" className="outline">
      <div className="centerAll">
        <InputField
          placeholder="Bachelors"
          value={props.data.type}
          className="inputField"
          change={(e) => {
            props.educationChange("type", e.target.value, props.dataIndex);
          }}
        />

        <br />
        <InputField
          placeholder="The University of Odin"
          value={props.data.institute}
          className="inputField"
          change={(e) => {
            props.educationChange("institute", e.target.value, props.dataIndex);
          }}
        />

        <br />

        <InputField
          placeholder="2020 - Present"
          value={props.data.years}
          className="inputField"
          change={(e) => {
            props.educationChange("years", e.target.value, props.dataIndex);
          }}
        />

        <ButtonComponent
          class="eduBtn"
          add={props.addEducation}
          delete={() => {
            props.deleteEducation(props.dataIndex);
          }}
        />

        <br />
      </div>
    </div>
  );
};

export default EducationInputs;
