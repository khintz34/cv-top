import { Component } from "react";
import "../styles/Inputs.css";

class InputField extends Component {
  render() {
    return (
      <input
        type="text"
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this.props.change}
        value={this.props.value}
        maxLength={this.props.maxLength}
      />
    );
  }
}
export default InputField;
