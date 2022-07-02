import { Component } from "react";
import "../../styles/Inputs.css";
import EducationInputs from "./Education-inputs";
import SkillsInputs from "./Skills-Inputs";
import ExperienceInputs from "./Experience-Inputs";
import GeneralInputs from "./General-Inputs";

class Inputs extends Component {
  render() {
    return (
      <div id="main-Inputs">
        <GeneralInputs
          changeGeneral={this.props.changeGeneral}
          data={this.props.dataGeneral}
        />
        <SkillsInputs skillChange={this.props.skillChange} />
        {this.props.education.map((formData, i) => (
          <EducationInputs
            dataIndex={i}
            data={formData}
            addEducation={this.props.addEducation}
            deleteEducation={this.props.deleteEducation}
            educationChange={this.props.educationChange}
            key={`education-input-section-${i}`}
          />
        ))}
        {this.props.experience.map((formData, i) => (
          <ExperienceInputs
            data={formData}
            dataIndex={i}
            key={`experience-input-section-${i}`}
            addExperience={this.props.addExperience}
            deleteExperience={this.props.deleteExperience}
            changeExperience={this.props.changeExperience}
          />
        ))}
      </div>
    );
  }
}

export default Inputs;
