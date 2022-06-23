import React, { Component } from "react";
import "../styles/Contact.css";
import "boxicons";

class Contact extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id="main-Contact">
        <p className="field-Item" id="cityState">
          {this.props.contact.city}, {this.props.contact.state}
        </p>
        <p className="field-Item">{this.props.contact.cell}</p>
        <p className="field-Item">{this.props.contact.email}</p>
        <p className="field-Item">{this.props.contact.website}</p>
        <p className="field-Item">{this.props.contact.gitHub}</p>
        <p className="field-Item">{this.props.contact.linkedIn}</p>
      </div>
    );
  }
}

export default Contact;
