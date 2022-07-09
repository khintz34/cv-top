import React from "react";
import "../../styles/Inputs.css";
import EducationInputs from "./Education-inputs";
import SkillsInputs from "./Skills-Inputs";
import ExperienceInputs from "./Experience-Inputs";
import GeneralInputs from "./General-Inputs";
import HeaderInputs from "./Header-input";

const Inputs = (props) => {
  return (
    <div id="main-Inputs">
      <GeneralInputs
        changeGeneral={props.changeGeneral}
        data={props.dataGeneral}
      />

      <SkillsInputs skills={props.skills} changeSkills={props.changeSkills} />
      <HeaderInputs header="Education" />
      {props.education.map((formData, i) => (
        <EducationInputs
          dataIndex={i}
          data={formData}
          addEducation={props.addEducation}
          deleteEducation={props.deleteEducation}
          educationChange={props.educationChange}
          key={`education-input-section-${i}`}
        />
      ))}
      <HeaderInputs header="Work Experience" />
      {props.experience.map((formData, i) => (
        <ExperienceInputs
          data={formData}
          dataIndex={i}
          key={`experience-input-section-${i}`}
          addExperience={props.addExperience}
          deleteExperience={props.deleteExperience}
          changeExperience={props.changeExperience}
        />
      ))}
    </div>
  );
};

export default Inputs;
