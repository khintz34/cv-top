import { Component } from "react";
import "../../styles/Inputs.css";

class GeneralInputs extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="main-Personal-Inputs" className="outline">
        <h2>General Information</h2>
        <div className="centerAll">
          <input
            type="text"
            className="inputField"
            placeholder="Name"
            value={this.props.data.name}
            onChange={(e) => {
              this.props.changeGeneral("name", e.target.value);
            }}
          />
          <br />

          <input
            type="email"
            className="inputField"
            placeholder="Email"
            value={this.props.data.email}
            onChange={(e) => {
              this.props.changeGeneral("email", e.target.value);
            }}
          />
          <br />

          <input
            type="tel"
            className="inputField"
            placeholder="Cell Phone Number"
            value={this.props.data.cell}
            onChange={(e) => {
              this.props.changeGeneral("cell", e.target.value);
            }}
          />
          <br />

          <input
            type="text"
            className="inputField"
            placeholder="City"
            value={this.props.data.city}
            onChange={(e) => {
              this.props.changeGeneral("city", e.target.value);
            }}
          />
          <br />

          <input
            type="text"
            className="inputField"
            placeholder="State"
            value={this.props.data.state}
            onChange={(e) => {
              this.props.changeGeneral("state", e.target.value);
            }}
          />
          <br />

          <input
            type="url"
            className="inputField"
            placeholder="GitHub"
            value={this.props.data.gitHub}
            onChange={(e) => {
              this.props.changeGeneral("gitHub", e.target.value);
            }}
          />
          <br />

          <input
            type="url"
            className="inputField"
            placeholder="LinkedIn"
            value={this.props.data.linkedIn}
            onChange={(e) => {
              this.props.changeGeneral("linkedIn", e.target.value);
            }}
          />
          <br />

          <input
            type="text"
            className="inputField"
            placeholder="Website"
            value={this.props.data.website}
            onChange={(e) => {
              this.props.changeGeneral("website", e.target.value);
            }}
          />
          <br />

          <textarea
            className="inputField"
            placeholder="Overview Paragraph (300 Character Limit)"
            maxLength="350ch"
            value={this.props.data.overview}
            onChange={(e) => {
              this.props.changeGeneral("overview", e.target.value);
            }}
          ></textarea>
          <br />
        </div>
      </div>
    );
  }
}
export default GeneralInputs;
