import { Component } from "react";
import "../styles/Inputs.css";

class TextareaComponent extends Component {
  render() {
    return (
      <textarea
        className={this.props.class}
        placeholder={this.props.placeholder}
        maxLength={this.props.maxLength}
        value={this.props.value}
        onChange={this.props.onChange}
        cols={this.props.cols}
        rows={this.props.rows}
        id={this.props.id}
      ></textarea>
    );
  }
}
export default TextareaComponent;
