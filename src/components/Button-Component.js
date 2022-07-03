import { Component } from "react";
import "../styles/Inputs.css";

class ButtonComponent extends Component {
  render() {
    return (
      <div className="btnLine">
        <button
          className={this.props.class}
          type="button"
          onClick={this.props.add}
        >
          Add
        </button>
        <button
          type="button"
          className={this.props.class}
          onClick={this.props.delete}
        >
          Delete
        </button>
      </div>
    );
  }
}
export default ButtonComponent;
