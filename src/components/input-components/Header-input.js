import { Component } from "react";
import "../../styles/Inputs.css";
import "../../styles/Work.css";

class HeaderInputs extends Component {
  render() {
    return <h2 id={this.props.id}>{this.props.header}</h2>;
  }
}
export default HeaderInputs;
