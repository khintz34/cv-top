import { Component } from "react";
import "../../styles/Inputs.css";
import InputField from "../Input-Field";
import TextareaComponent from "../Textarea";

class ExperienceInputs extends Component {
  render() {
    return (
      <div id="main-Experience-Inputs" className="outline">
        <h2>Experience</h2>
        <div action="#" className="centerAll">
          <InputField
            placeholder="Software Engineer"
            value={this.props.data.jobTitle}
            change={(e) => {
              this.props.changeExperience(
                "jobTitle",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />
          <InputField
            placeholder="Company Name"
            value={this.props.data.company}
            change={(e) => {
              this.props.changeExperience(
                "company",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />
          <InputField
            placeholder="Year Started - Year Ended"
            value={this.props.data.years}
            change={(e) => {
              this.props.changeExperience(
                "years",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />
          <InputField
            placeholder="City, State"
            value={this.props.data.location}
            change={(e) => {
              this.props.changeExperience(
                "location",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />
          <TextareaComponent
            placeholder="Example of Duties 1 (160 character limit)"
            maxLength="160ch"
            value={this.props.data.ex1}
            cols="15"
            rows="3"
            onChange={(e) => {
              this.props.changeExperience(
                "ex1",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />

          <br />

          <TextareaComponent
            placeholder="Example of Duties 2 (160 character limit)"
            maxLength="160ch"
            value={this.props.data.ex2}
            cols="15"
            rows="3"
            onChange={(e) => {
              this.props.changeExperience(
                "ex2",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />
          <TextareaComponent
            placeholder="Example of Duties 3 (160 character limit)"
            maxLength="160ch"
            value={this.props.data.ex3}
            cols="15"
            rows="3"
            onChange={(e) => {
              this.props.changeExperience(
                "ex3",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />

          <div className="btnLine">
            <button
              className="eduBtn"
              type="button"
              onClick={this.props.addExperience}
            >
              Add
            </button>
            <button
              type="button"
              className="eduBtn"
              onClick={() => {
                console.log("on click");
                this.props.deleteExperience(this.props.dataIndex);
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

export default ExperienceInputs;
