import React, { Component } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faEnvelope,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
  render() {
    return (
      <div id="main-Contact">
        <div className="side">
          <FontAwesomeIcon icon={faMap} className="iconWidth" />
          <p className="field-Item">
            {this.props.dataGeneral.city}, {this.props.dataGeneral.state}
          </p>
        </div>
        <div className="side">
          <FontAwesomeIcon icon={faMobileScreen} className="iconWidth" />
          <p className="field-Item">{this.props.dataGeneral.cell}</p>
        </div>
        <div className="side">
          <FontAwesomeIcon icon={faEnvelope} className="iconWidth" />
          <p className="field-Item">{this.props.dataGeneral.email}</p>
        </div>
        <div className="side" id="webDiv">
          <FontAwesomeIcon icon={faLaptop} className="iconWidth" />
          <p className="field-Item">{this.props.dataGeneral.website}</p>
        </div>
        <div className="side">
          <FontAwesomeIcon icon={faGithub} className="iconWidth" />
          <p className="field-Item">{this.props.dataGeneral.gitHub}</p>
        </div>
        <div className="side">
          <FontAwesomeIcon icon={faLinkedin} className="iconWidth" />
          <p className="field-Item">{this.props.dataGeneral.linkedIn}</p>
        </div>
      </div>
    );
  }
}

export default Contact;
