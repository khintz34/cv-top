import { Component } from "react";
import "../styles/Inputs.css";

class InputField extends Component {
  render() {
    return (
      <input
        type="text"
        className="inputField"
        placeholder={this.props.placeholder}
        onChange={this.props.change}
        value={this.props.value}
      />
    );
  }
}
export default InputField;
