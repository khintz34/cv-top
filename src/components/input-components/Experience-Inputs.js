import { Component } from "react";
import "../../styles/Inputs.css";

class ExperienceInputs extends Component {
  render() {
    return (
      <div id="main-Experience-Inputs" className="outline">
        <h2>Experience</h2>
        <div action="#" className="centerAll">
          <input
            type="text"
            className="inputField"
            placeholder="Software Engineer"
            value={this.props.data.jobTitle}
            onChange={(e) => {
              this.props.changeExperience(
                "jobTitle",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />

          <input
            type="text"
            className="inputField"
            placeholder="Company Name"
            value={this.props.data.company}
            onChange={(e) => {
              this.props.changeExperience(
                "company",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />

          <input
            type="text"
            className="inputField"
            placeholder="Year Started - Year Ended"
            value={this.props.data.years}
            onChange={(e) => {
              this.props.changeExperience(
                "years",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />

          <input
            type="text"
            className="inputField"
            placeholder="City, State"
            value={this.props.data.location}
            onChange={(e) => {
              this.props.changeExperience(
                "location",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />
          <br />

          <textarea
            cols="15"
            rows="3"
            placeholder="Example of Duties 1 (160 character limit)"
            maxLength="160ch"
            value={this.props.data.ex1}
            onChange={(e) => {
              this.props.changeExperience(
                "ex1",
                e.target.value,
                this.props.dataIndex
              );
            }}
          ></textarea>
          <br />

          <textarea
            cols="15"
            rows="3"
            placeholder="Example of Duties 2 (160 character limit)"
            maxLength="160ch"
            value={this.props.data.ex2}
            onChange={(e) => {
              this.props.changeExperience(
                "ex2",
                e.target.value,
                this.props.dataIndex
              );
            }}
          ></textarea>
          <br />

          <textarea
            cols="15"
            rows="3"
            placeholder="Example of Duties 3 (160 character limit)"
            maxLength="160ch"
            value={this.props.data.ex3}
            onChange={(e) => {
              this.props.changeExperience(
                "ex3",
                e.target.value,
                this.props.dataIndex
              );
            }}
          ></textarea>
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
