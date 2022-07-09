import "../styles/App.css";
import React, { useState, useEffect } from "react";
import General from "./general.js";
import Work from "./Work";
import Info from "./Info";
import Inputs from "./input-components/Inputs";

const FuncApp = () => {
  const [general, setGeneral] = useState({
    name: "",
    overview: "",
    email: "",
    cell: "",
    city: "",
    state: "",
    gitHub: "",
    linkedIn: "",
    website: "",
  });

  const [skills, setSkills] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    skill7: "",
    skill8: "",
  });

  const [experience, setExperience] = useState([
    {
      jobTitle: "",
      company: "",
      years: "",
      location: "",
      ex1: "",
      ex2: "",
      ex3: "",
      ex4: "",
      ex5: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      type: "",
      institute: "",
      years: "",
    },
  ]);

  const changeGeneral = (type, value) => {
    setGeneral({ ...general, [type]: value }, () => {
      checkInfo(type);
    });
  };

  const checkInfo = (type) => {
    showWeb();

    if (general.cell.length === 10 || general.cell.length === 11) {
      let num = general.cell.length;
      formatCell(num, type);
    }
  };

  const showWeb = () => {
    let webDiv = document.querySelector("#webDiv");
    if (webDiv.textContent === "" || webDiv.textContent === "Website") {
      webDiv.classList.add("hide");
    } else {
      webDiv.classList.remove("hide");
    }
  };

  const formatCell = (num, type) => {
    if (num === 10) {
      var cleaned = ("" + general.cell).replace(/\D/g, "");
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        let newNum = "(" + match[1] + ") " + match[2] + "-" + match[3];
        changeGeneral("cell", newNum);
      }
    }
  };

  const changeSkills = (type, value) => {
    setSkills({ ...skills, [type]: value }, () => {
      checkCounts(type);
    });
  };

  const checkCounts = (item) => {
    let skillItem = document.querySelector(`#${item}-Info`);

    if (skillItem.textContent !== "") {
      skillItem.classList.add("skillShow");
    } else {
      skillItem.classList.remove("skillShow");
    }
  };

  const changeEducation = (type, value) => {
    setEducation({ ...education, [type]: value });
  };

  const addEducation = () => {
    setEducation({...education, {
      type: "",
      institute: "",
      years: "",
    }})

  //   this.setState((previousEducationData) => {
  //     const { education } = previousEducationData;

  //     return {
  //       ...previousEducationData,
  //       education: [
  //         ...education,
  //         {
  //           type: "",
  //           institute: "",
  //           years: "",
  //         },
  //       ],
  //     };
  //   });
  // }

  // const changeExperience = (type, value, index) => {
  //   setExperience({...experience, experience[index][type]: value})
  // }

  return (
    <div id="main">
      <h1 id="mainTitle">Resume Builder</h1>
      <div id="inputSection">
        <Inputs
          changeGeneral={changeGeneral}
          educationChange={changeEducation}
          changeExperience={changeExperience}
          addEducation={addEducation}
          addExperience={addExperience}
          deleteEducation={deleteEducation}
          deleteExperience={deleteExperience}
          dataGeneral={general}
          dataSkills={skills}
          education={education}
          experience={experience}
          skills={skills}
          changeSkills={changeSkills}
        />
      </div>
      <div id="template">
        <General dataGeneral={this.state.general} />
        <div id="bottomSection">
          <Work experience={this.state.experience} />
          <Info education={this.state.education} skills={this.state.skills} />
        </div>
      </div>
    </div>
  );
};

export default FuncApp;
