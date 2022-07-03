import { Component } from "react";
import "../../styles/Inputs.css";
import InputField from "../Input-Field";

class EducationInputs extends Component {
  render() {
    return (
      <div id="main-Education-Inputs" className="outline">
        <div className="centerAll">
          <InputField
            placeholder="Bachelors"
            value={this.props.data.type}
            change={(e) => {
              this.props.educationChange(
                "type",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />

          <br />
          <InputField
            placeholder="The University of Odin"
            value={this.props.data.institute}
            change={(e) => {
              this.props.educationChange(
                "institute",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />

          <br />

          <InputField
            placeholder="2020 - Present"
            value={this.props.data.years}
            change={(e) => {
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
