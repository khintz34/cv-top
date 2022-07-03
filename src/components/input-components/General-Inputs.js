import { Component } from "react";
import "../../styles/Inputs.css";
import InputField from "../Input-Field";
import TextareaComponent from "../Textarea";
import HeaderInputs from "./Header-input";

class GeneralInputs extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="main-Personal-Inputs" className="outline">
        <HeaderInputs header="General Information" />
        <div className="centerAll">
          <InputField
            placeholder="Name"
            value={this.props.data.name}
            change={(e) => {
              this.props.changeGeneral("name", e.target.value);
            }}
          />
          <br />
          <InputField
            placeholder="Email"
            value={this.props.data.email}
            change={(e) => {
              this.props.changeGeneral("email", e.target.value);
            }}
          />
          <br />
          <InputField
            placeholder="Cell Phone Number"
            value={this.props.data.cell}
            change={(e) => {
              this.props.changeGeneral("cell", e.target.value);
            }}
          />
          <br />
          <InputField
            placeholder="City"
            value={this.props.data.city}
            change={(e) => {
              this.props.changeGeneral("city", e.target.value);
            }}
          />
          <br />
          <InputField
            placeholder="State"
            value={this.props.data.state}
            change={(e) => {
              this.props.changeGeneral("state", e.target.value);
            }}
          />
          <br />
          <InputField
            placeholder="GitHub"
            value={this.props.data.gitHub}
            change={(e) => {
              this.props.changeGeneral("gitHub", e.target.value);
            }}
          />
          <br />
          <InputField
            placeholder="LinkedIn"
            value={this.props.data.linkedIn}
            change={(e) => {
              this.props.changeGeneral("linkedIn", e.target.value);
            }}
          />
          <br />
          <InputField
            placeholder="Website"
            value={this.props.data.website}
            change={(e) => {
              this.props.changeGeneral("website", e.target.value);
            }}
          />
          <br />

          <TextareaComponent
            placeholder="Overview Paragraph (300 Character Limit)"
            maxLength="350ch"
            class="inputField"
            value={this.props.data.overview}
            onChange={(e) => {
              this.props.changeGeneral("overview", e.target.value);
            }}
          />
          <br />
        </div>
      </div>
    );
  }
}
export default GeneralInputs;
