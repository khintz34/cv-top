import { Component } from "react";

class H3Header extends Component {
  render() {
    return <h3 id={this.props.id}>{this.props.header}</h3>;
  }
}
export default H3Header;
