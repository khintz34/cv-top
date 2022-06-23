import { Component } from "react";
import "/Users/KevinHintz/the_oden_project/react-top/cv-top/src/styles/Inputs.css";
import EducationInputs from "./Education-inputs";
import SkillsInputs from "./Skills-Inputs";
import ExperienceInputs from "./Experience-Inputs";
import GeneralInputs from "./General-Inputs";

class Inputs extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    // const { task, tasks } = this.state;

    return (
      <div id="main-Inputs">
        <GeneralInputs {...this.props} />
        <SkillsInputs {...this.props} />
        <EducationInputs {...this.props} />
        <ExperienceInputs {...this.props} />
      </div>
    );
  }
}

export default Inputs;
