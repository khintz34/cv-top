import { Component } from "react";
import "/Users/KevinHintz/the_oden_project/react-top/cv-top/src/styles/Inputs.css";

class ExperienceInputs extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    // const { task, tasks } = this.state;

    return (
      <div id="main-Experience-Inputs" className="outline">
        <h2>Experience</h2>
        <form
          action="#"
          id="fExperience"
          onChange={this.props.experienceChange}
        >
          <input
            type="text"
            id="fTitle"
            name="fTitle"
            className="inputField"
            placeholder="Software Engineer"
          />
          <br />

          <input
            type="text"
            id="fCompany"
            name="fCompany"
            className="inputField"
            placeholder="Company Name"
          />
          <br />

          <input
            type="text"
            id="fYearsExp"
            name="fYearsExp"
            className="inputField"
            placeholder="Year Started - Year Ended"
          />
          <br />

          <input
            type="text"
            id="fLocation"
            name="fLocation"
            className="inputField"
            placeholder="City, State"
          />
          <br />

          <textarea
            name="fExample1"
            id="fExample1"
            cols="15"
            rows="3"
            placeholder="Example of Duties 1 (160 character limit)"
            maxLength="160ch"
          ></textarea>
          <br />

          <textarea
            name="fExample2"
            id="fExample2"
            cols="15"
            rows="3"
            placeholder="Example of Duties 2 (160 character limit)"
            maxLength="160ch"
          ></textarea>
          <br />

          <textarea
            name="fExample3"
            id="fExample3"
            cols="15"
            rows="3"
            placeholder="Example of Duties 3 (160 character limit)"
            maxLength="160ch"
          ></textarea>
          <div className="btnLine">
            <button className="eduBtn" id="eduAdd" type="button">
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

export default ExperienceInputs;
