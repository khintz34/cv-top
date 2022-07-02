import { Component } from "react";
import "../../styles/Inputs.css";

class EducationInputs extends Component {
  render() {
    return (
      <div id="main-Education-Inputs" className="outline">
        <h2>Education</h2>
        <div className="centerAll">
          <input
            type="text"
            className="inputField"
            placeholder="Bachelors"
            value={this.props.data.type}
            onChange={(e) => {
              this.props.educationChange(
                "type",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />

          <input
            type="text"
            className="inputField"
            placeholder="The University of Odin"
            value={this.props.data.institute}
            onChange={(e) => {
              this.props.educationChange(
                "institute",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />

          <input
            type="text"
            className="inputField"
            placeholder="2021-Present"
            value={this.props.data.years}
            onChange={(e) => {
              this.props.educationChange(
                "years",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />
          <div className="btnLine">
            <button
              type="button"
              className="eduBtn"
              onClick={this.props.addEducation}
            >
              Add
            </button>
            <button
              type="button"
              className="eduBtn"
              onClick={() => {
                console.log("on click");
                this.props.deleteEducation(this.props.dataIndex);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationInputs;
