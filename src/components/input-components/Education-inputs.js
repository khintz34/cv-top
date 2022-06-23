import { Component } from "react";
import "/Users/KevinHintz/the_oden_project/react-top/cv-top/src/styles/Inputs.css";

class EducationInputs extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    // const { task, tasks } = this.state;

    return (
      <div id="main-Education-Inputs" className="outline">
        <h2>Education</h2>
        <form action="#" id="fEducation" onChange={this.props.educationChange}>
          <input
            type="text"
            id="fType"
            name="fType"
            className="inputField"
            placeholder="Bachelors"
          />
          <br />

          <input
            type="text"
            id="fInstitute"
            name="fInstitute"
            className="inputField"
            placeholder="The University of Odin"
          />
          <br />

          <input
            type="text"
            id="fYears"
            name="fYears"
            className="inputField"
            placeholder="2021-Present"
          />
          <br />
          <div className="btnLine">
            <button
              type="button"
              className="eduBtn"
              id="eduAdd"
              onClick={this.props.addEducation}
            >
              Add
            </button>
            <button type="button" className="eduBtn" id="eduDelete">
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EducationInputs;
