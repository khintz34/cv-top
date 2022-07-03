import { Component } from "react";
import "../../styles/Inputs.css";
import "../../styles/Experience.css";
import InputField from "../Input-Field";
import TextareaComponent from "../Textarea";
import ButtonComponent from "../Button-Component";

class ExperienceInputs extends Component {
  render() {
    return (
      <div id="main-Experience-Inputs" className="outline">
        <div action="#" className="centerAll">
          <InputField
            placeholder="Software Engineer"
            value={this.props.data.jobTitle}
            className="inputField"
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
            className="inputField"
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
            className="inputField"
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
            className="inputField"
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

          <TextareaComponent
            placeholder="Example of Duties 4 (160 character limit)"
            maxLength="160ch"
            value={this.props.data.ex4}
            cols="15"
            rows="3"
            class="hide"
            id={"ex4-input" + this.props.dataIndex}
            onChange={(e) => {
              this.props.changeExperience(
                "ex4",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />

          <TextareaComponent
            placeholder="Example of Duties 5 (160 character limit)"
            maxLength="160ch"
            value={this.props.data.ex5}
            cols="15"
            rows="3"
            class="hide"
            id={"ex5-input" + this.props.dataIndex}
            onChange={(e) => {
              this.props.changeExperience(
                "ex5",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />

          <ButtonComponent
            class="eduBtn"
            add={this.props.addExperience}
            delete={() => {
              this.props.deleteExperience(this.props.dataIndex);
            }}
          />
        </div>
      </div>
    );
  }
}

export default ExperienceInputs;
