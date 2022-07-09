import React from "react";
import "../../styles/Inputs.css";
import "../../styles/Experience.css";
import InputField from "../Input-Field";
import TextareaComponent from "../Textarea";
import ButtonComponent from "../Button-Component";

const ExperienceInputs = (props) => {
  return (
    <div id="main-Experience-Inputs" className="outline">
      <div action="#" className="centerAll">
        <InputField
          placeholder="Software Engineer"
          value={props.data.jobTitle}
          className="inputField"
          change={(e) => {
            props.changeExperience("jobTitle", e.target.value, props.dataIndex);
          }}
        />
        <br />
        <InputField
          placeholder="Company Name"
          value={props.data.company}
          className="inputField"
          change={(e) => {
            props.changeExperience("company", e.target.value, props.dataIndex);
          }}
        />
        <br />
        <InputField
          placeholder="Year Started - Year Ended"
          value={props.data.years}
          className="inputField"
          change={(e) => {
            props.changeExperience("years", e.target.value, props.dataIndex);
          }}
        />
        <br />
        <InputField
          placeholder="City, State"
          value={props.data.location}
          className="inputField"
          change={(e) => {
            props.changeExperience("location", e.target.value, props.dataIndex);
          }}
        />
        <br />
        <TextareaComponent
          placeholder="Example of Duties 1 (160 character limit)"
          maxLength="160ch"
          value={props.data.ex1}
          cols="15"
          rows="3"
          onChange={(e) => {
            props.changeExperience("ex1", e.target.value, props.dataIndex);
          }}
        />

        <br />

        <TextareaComponent
          placeholder="Example of Duties 2 (160 character limit)"
          maxLength="160ch"
          value={props.data.ex2}
          cols="15"
          rows="3"
          onChange={(e) => {
            props.changeExperience("ex2", e.target.value, props.dataIndex);
          }}
        />
        <br />
        <TextareaComponent
          placeholder="Example of Duties 3 (160 character limit)"
          maxLength="160ch"
          value={props.data.ex3}
          cols="15"
          rows="3"
          onChange={(e) => {
            props.changeExperience("ex3", e.target.value, props.dataIndex);
          }}
        />

        <TextareaComponent
          placeholder="Example of Duties 4 (160 character limit)"
          maxLength="160ch"
          value={props.data.ex4}
          cols="15"
          rows="3"
          class="hide"
          id={"ex4-input" + props.dataIndex}
          onChange={(e) => {
            props.changeExperience("ex4", e.target.value, props.dataIndex);
          }}
        />

        <TextareaComponent
          placeholder="Example of Duties 5 (160 character limit)"
          maxLength="160ch"
          value={props.data.ex5}
          cols="15"
          rows="3"
          class="hide"
          id={"ex5-input" + props.dataIndex}
          onChange={(e) => {
            props.changeExperience("ex5", e.target.value, props.dataIndex);
          }}
        />

        <ButtonComponent
          class="eduBtn"
          add={props.addExperience}
          delete={() => {
            props.deleteExperience(props.dataIndex);
          }}
        />
      </div>
    </div>
  );
};

export default ExperienceInputs;
