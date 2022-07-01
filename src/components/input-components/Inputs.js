import { Component } from "react";
import "../../styles/Inputs.css";
import EducationInputs from "./Education-inputs";
import SkillsInputs from "./Skills-Inputs";
import ExperienceInputs from "./Experience-Inputs";
import GeneralInputs from "./General-Inputs";
import uniqid from "uniqid";

class Inputs extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    console.log(this.props.education);

    return (
      <div id="main-Inputs">
        <GeneralInputs {...this.props} />
        <SkillsInputs {...this.props} />
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
        {this.props.expForms.map((formData) => (
          <ExperienceInputs data={formData} {...this.props} key={uniqid()} />
        ))}
      </div>
    );
  }
}

export default Inputs;
