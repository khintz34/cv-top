import { Component } from "react";
import "../../styles/Inputs.css";

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
        <div>
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
          {/* <br />

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
          /> */}
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
