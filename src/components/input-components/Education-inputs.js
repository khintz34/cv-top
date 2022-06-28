import { Component } from "react";
import "/Users/KevinHintz/the_oden_project/react-top/cv-top/src/styles/Inputs.css";

class EducationInputs extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    // const { task, tasks } = this.state;
    // console.log(this.props.data);
    // console.log(this.props.education[0]);
    return (
      <div id="main-Education-Inputs" className="outline">
        <h2>Education</h2>
        <form
          action="#"
          id={this.props.data.main.formIDs.formID}
          className="centerAll"
          data-num={this.props.data.main.num}
        >
          <input
            type="text"
            id={this.props.data.main.formIDs.type}
            name={this.props.data.main.formIDs.type}
            className="inputField"
            placeholder="Bachelors"
            defaultValue={this.props.data.main.data.type}
          />
          <br />

          <input
            type="text"
            id={this.props.data.main.formIDs.institute}
            name={this.props.data.main.formIDs.institute}
            className="inputField"
            placeholder="The University of Odin"
            defaultValue={this.props.data.main.data.institute}
          />
          <br />

          <input
            type="text"
            id={this.props.data.main.formIDs.years}
            name={this.props.data.main.formIDs.years}
            className="inputField"
            placeholder="2021-Present"
            defaultValue={this.props.data.main.data.years}
          />
          <br />
          <div className="btnLine">
            <button
              type="button"
              id="eduSubmit"
              className="eduBtn"
              onClick={this.props.educationChange}
            >
              Submit
            </button>
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
