import React from "react";
import "../../styles/Inputs.css";
import InputField from "../Input-Field";
import TextareaComponent from "../Textarea";
import HeaderInputs from "./Header-input";

const GeneralInputs = (props) => {
  return (
    <div id="main-Personal-Inputs" className="outline">
      <HeaderInputs header="General Information" />
      <div className="centerAll">
        <InputField
          placeholder="Name"
          value={props.data.name}
          className="inputField"
          change={(e) => {
            props.changeGeneral("name", e.target.value);
          }}
        />
        <br />
        <InputField
          placeholder="Email"
          value={props.data.email}
          className="inputField"
          change={(e) => {
            props.changeGeneral("email", e.target.value);
          }}
        />
        <br />
        <InputField
          placeholder="Cell Phone Number: 8005553231"
          className="inputField"
          value={props.data.cell}
          change={(e) => {
            props.changeGeneral("cell", e.target.value);
          }}
        />
        <br />
        <InputField
          placeholder="City"
          className="inputField"
          value={props.data.city}
          change={(e) => {
            props.changeGeneral("city", e.target.value);
          }}
        />
        <br />
        <InputField
          placeholder="State"
          className="inputField"
          value={props.data.state}
          change={(e) => {
            props.changeGeneral("state", e.target.value);
          }}
        />
        <br />
        <InputField
          placeholder="GitHub"
          className="inputField"
          value={props.data.gitHub}
          change={(e) => {
            props.changeGeneral("gitHub", e.target.value);
          }}
        />
        <br />
        <InputField
          placeholder="LinkedIn"
          className="inputField"
          value={props.data.linkedIn}
          change={(e) => {
            props.changeGeneral("linkedIn", e.target.value);
          }}
        />
        <br />
        <InputField
          placeholder="Website: Optional"
          className="inputField"
          value={props.data.website}
          change={(e) => {
            props.changeGeneral("website", e.target.value);
          }}
        />
        <br />

        <TextareaComponent
          placeholder="Overview Paragraph (300 Character Limit)"
          className="inputField"
          maxLength="350ch"
          class="inputField"
          value={props.data.overview}
          onChange={(e) => {
            props.changeGeneral("overview", e.target.value);
          }}
        />
        <br />
      </div>
    </div>
  );
};

export default GeneralInputs;
