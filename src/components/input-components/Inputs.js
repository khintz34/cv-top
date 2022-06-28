import { Component } from "react";
import "/Users/KevinHintz/the_oden_project/react-top/cv-top/src/styles/Inputs.css";
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
    // const { task, tasks } = this.state;
    // console.log(this.props.education);

    let test =
      this.props && this.props.education.length > 0 ? (
        this.props.education.map((formData) => (
          <EducationInputs data={formData} {...this.props} key={uniqid()} />
        ))
      ) : (
        <span>ERROR</span>
      );
    return (
      <div id="main-Inputs">
        <GeneralInputs {...this.props} />
        <SkillsInputs {...this.props} />
        {this.props.education.map((formData) => (
          <EducationInputs data={formData} {...this.props} key={uniqid()} />
        ))}
        {/* {test} */}
        {this.props.expForms.map((formData) => (
          <ExperienceInputs data={formData} {...this.props} key={uniqid()} />
        ))}
      </div>
    );
  }
}

export default Inputs;
