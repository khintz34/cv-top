import { Component } from "react";
import "../../styles/Inputs.css";
import ButtonComponent from "../Button-Component";
import InputField from "../Input-Field";

class EducationInputs extends Component {
  render() {
    return (
      <div id="main-Education-Inputs" className="outline">
        <div className="centerAll">
          <InputField
            placeholder="Bachelors"
            value={this.props.data.type}
            className="inputField"
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
            className="inputField"
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
            className="inputField"
            change={(e) => {
              this.props.educationChange(
                "years",
                e.target.value,
                this.props.dataIndex
              );
            }}
          />

          <ButtonComponent
            class="eduBtn"
            add={this.props.addEducation}
            delete={() => {
              this.props.deleteEducation(this.props.dataIndex);
            }}
          />

          <br />
        </div>
      </div>
    );
  }
}

export default EducationInputs;
