import React from "react";
import "../styles/Experience.css";

const Experience = (props) => {
  return (
    <div id="main-Exp">
      <div className="seperateLines">
        <h4>{props.data.jobTitle}</h4>
        <h4>{props.data.company}</h4>
      </div>
      <div className="seperateLines">
        <h4>{props.data.years}</h4>
        <h4>{props.data.location}</h4>
      </div>
      <ul>
        <li className="expWrap hide" id={"ex1-" + props.index}>
          {props.data.ex1}
        </li>
        <li className="expWrap hide" id={"ex2-" + props.index}>
          {props.data.ex2}
        </li>
        <li className="expWrap hide" id={"ex3-" + props.index}>
          {props.data.ex3}
        </li>
        <li className="expWrap hide" id={"ex4-" + props.index}>
          {props.data.ex4}
        </li>
        <li className="expWrap hide" id={"ex5-" + props.index}>
          {props.data.ex5}
        </li>
      </ul>
    </div>
  );
};

export default Experience;
