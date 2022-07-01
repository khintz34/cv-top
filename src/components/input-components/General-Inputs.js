import { Component } from "react";
import "../../styles/Inputs.css";

class GeneralInputs extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    // const { task, tasks } = this.state;

    return (
      <div id="main-Personal-Inputs" className="outline">
        <h2>General Information</h2>
        <form
          action=""
          id="fPersonal"
          onChange={this.props.handleChange}
          className="centerAll"
        >
          <input
            type="text"
            id="fName"
            name="fName"
            className="inputField"
            placeholder="Name"
          />
          <br />

          <input
            type="email"
            id="fEmail"
            name="fEmail"
            className="inputField"
            placeholder="Email"
          />
          <br />

          <input
            type="tel"
            id="fNum"
            name="fNum"
            className="inputField"
            placeholder="Cell Phone Number"
          />
          <br />

          <input
            type="text"
            id="fCity"
            name="fCity"
            className="inputField"
            placeholder="City"
          />
          <br />

          <input
            type="text"
            id="fState"
            name="fState"
            className="inputField"
            placeholder="State"
          />
          <br />

          <input
            type="url"
            id="fGit"
            name="fGit"
            className="inputField"
            placeholder="GitHub"
          />
          <br />

          <input
            type="url"
            id="fLinked"
            name="fLinked"
            className="inputField"
            placeholder="LinkedIn"
          />
          <br />

          <input
            type="text"
            id="fWeb"
            name="fWeb"
            className="inputField"
            placeholder="Website"
          />
          <br />

          <textarea
            id="fPara"
            name="fPara"
            className="inputField"
            placeholder="Overview Paragraph (300 Character Limit)"
            maxLength="350ch"
          >
            {/* Write an Overview Para here */}
          </textarea>
          <br />
        </form>
      </div>
    );
  }
}
export default GeneralInputs;
