import { Component } from "react";
import "../../styles/Inputs.css";

class ExperienceInputs extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    // const { task, tasks } = this.state;
    return (
      <div id="main-Experience-Inputs" className="outline">
        <h2>Experience</h2>
        <form action="#" id={this.props.data.form.formID} className="centerAll">
          <input
            type="text"
            id={this.props.data.form.title}
            name={this.props.data.form.title}
            className="inputField"
            placeholder="Software Engineer"
            defaultValue={this.props.experience.jobTitle}
          />
          <br />

          <input
            type="text"
            id={this.props.data.form.company}
            name={this.props.data.form.company}
            className="inputField"
            placeholder="Company Name"
            defaultValue={this.props.experience.company}
          />
          <br />

          <input
            type="text"
            id={this.props.data.form.yearsExp}
            name={this.props.data.form.yearsExp}
            className="inputField"
            placeholder="Year Started - Year Ended"
            defaultValue={this.props.experience.years}
          />
          <br />

          <input
            type="text"
            id={this.props.data.form.location}
            name={this.props.data.form.location}
            className="inputField"
            placeholder="City, State"
            defaultValue={this.props.experience.location}
          />
          <br />

          <textarea
            name={this.props.data.form.ex1}
            id={this.props.data.form.ex1}
            cols="15"
            rows="3"
            placeholder="Example of Duties 1 (160 character limit)"
            maxLength="160ch"
            defaultValue={this.props.experience.ex1}
          ></textarea>
          <br />

          <textarea
            name={this.props.data.form.ex2}
            id={this.props.data.form.ex2}
            cols="15"
            rows="3"
            placeholder="Example of Duties 2 (160 character limit)"
            maxLength="160ch"
            defaultValue={this.props.experience.ex2}
          ></textarea>
          <br />

          <textarea
            name={this.props.data.form.ex3}
            id={this.props.data.form.ex3}
            cols="15"
            rows="3"
            placeholder="Example of Duties 3 (160 character limit)"
            maxLength="160ch"
            defaultValue={this.props.experience.ex3}
          ></textarea>
          <div className="btnLine">
            <button
              className="eduBtn"
              id="expSub"
              type="button"
              onClick={this.props.experienceChange}
            >
              Submit
            </button>
            <button
              className="eduBtn"
              id="eduAdd"
              type="button"
              onClick={this.props.addExperience}
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

export default ExperienceInputs;
