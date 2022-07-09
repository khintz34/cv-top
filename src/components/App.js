import "../styles/App.css";
import React, { Component, useState, useEffect } from "react";
import General from "./general.js";
import Work from "./Work";
import Info from "./Info";
import Inputs from "./input-components/Inputs";
import FuncApp from "./functionalComp";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "",
        overview: "",
        email: "",
        cell: "",
        city: "",
        state: "",
        gitHub: "",
        linkedIn: "",
        website: "",
      },
      skills: {
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
        skill5: "",
        skill6: "",
        skill7: "",
        skill8: "",
      },
      experience: [
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
      ],
      education: [
        {
          type: "",
          institute: "",
          years: "",
        },
      ],
    };
    this.changeGeneral = this.changeGeneral.bind(this);
    this.educationChange = this.educationChange.bind(this);
    this.changeExperience = this.changeExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.changeSkills = this.changeSkills.bind(this);
    this.showExperience = this.showExperience.bind(this);
    this.checkInfo = this.checkInfo.bind(this);
  }

  changeGeneral = (type, value) => {
    this.setState(
      (previousData) => {
        const { general } = previousData;
        general[type] = value;

        return {
          ...previousData,
          general,
        };
      },
      () => {
        this.checkInfo(type);
      }
    );
  };

  checkInfo(type) {
    this.showWeb();

    if (
      this.state.general.cell.length === 10 ||
      this.state.general.cell.length === 11
    ) {
      let num = this.state.general.cell.length;
      this.formatCell(num, type);
    }
  }

  showWeb() {
    let webDiv = document.querySelector("#webDiv");
    if (webDiv.textContent === "" || webDiv.textContent === "Website") {
      webDiv.classList.add("hide");
    } else {
      webDiv.classList.remove("hide");
    }
  }

  formatCell(num, type) {
    if (num === 10) {
      var cleaned = ("" + this.state.general.cell).replace(/\D/g, "");
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        let newNum = "(" + match[1] + ") " + match[2] + "-" + match[3];
        this.setState((previousData) => {
          const { general } = previousData;
          general[type] = newNum;

          return {
            ...previousData,
            general,
          };
        });
      }
    }
  }

  changeSkills(type, value) {
    this.setState(
      (previousData) => {
        const { skills } = previousData;
        skills[type] = value;

        return {
          ...previousData,
          skills,
        };
      },
      () => {
        this.checkCounts(type);
      }
    );
  }

  checkCounts(item) {
    let skillItem = document.querySelector(`#${item}-Info`);

    if (skillItem.textContent !== "") {
      skillItem.classList.add("skillShow");
    } else {
      skillItem.classList.remove("skillShow");
    }
  }

  educationChange(type, value, index) {
    this.setState((previousEducationData) => {
      const { education } = previousEducationData;
      education[index][type] = value;

      return {
        ...previousEducationData,
        education,
      };
    });
  }

  addEducation() {
    this.setState((previousEducationData) => {
      const { education } = previousEducationData;

      return {
        ...previousEducationData,
        education: [
          ...education,
          {
            type: "",
            institute: "",
            years: "",
          },
        ],
      };
    });
  }

  deleteEducation(index) {
    if (this.state.education.length !== 1) {
      this.setState((previousEducationData) => {
        const { education } = previousEducationData;

        return {
          ...previousEducationData,
          education: education.filter((item, i) => i !== index),
        };
      });
    }
  }

  addExperience(e) {
    this.setState((previousExpData) => {
      const { experience } = previousExpData;

      return {
        ...previousExpData,
        experience: [
          ...experience,
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
        ],
      };
    });
  }

  changeExperience(type, value, index) {
    this.setState(
      (previousExpData) => {
        const { experience } = previousExpData;
        experience[index][type] = value;

        return {
          ...previousExpData,
          experience,
        };
      },
      () => {
        if (
          type === "ex1" ||
          type === "ex2" ||
          type === "ex3" ||
          type === "ex4" ||
          type === "ex5"
        )
          this.showExperience(type, index);
      }
    );
  }

  showExperience(type, index) {
    if (this.state.experience[index][type] !== "") {
      let item = document.querySelector(`#${type}-${index}`);
      item.classList.remove("hide");
    } else {
      let item = document.querySelector(`#${type}-${index}`);
      item.classList.add("hide");
    }

    if (
      this.state.experience[index].ex1 !== "" &&
      this.state.experience[index].ex2 !== "" &&
      this.state.experience[index].ex3 !== ""
    ) {
      let item = document.querySelector(`#ex4-input${index}`);
      item.classList.remove("hide");
    } else {
      let item = document.querySelector(`#ex4-input${index}`);
      item.classList.add("hide");
    }

    if (
      this.state.experience[index].ex1 !== "" &&
      this.state.experience[index].ex2 !== "" &&
      this.state.experience[index].ex3 !== "" &&
      this.state.experience[index].ex4 !== ""
    ) {
      let item = document.querySelector(`#ex5-input${index}`);
      item.classList.remove("hide");
    } else {
      let item = document.querySelector(`#ex5-input${index}`);
      item.classList.add("hide");
    }
  }

  deleteExperience(index) {
    if (this.state.experience.length !== 1) {
      this.setState((previousExpData) => {
        const { experience } = previousExpData;

        return {
          ...previousExpData,
          experience: experience.filter((item, i) => i !== index),
        };
      });
    }
  }

  render() {
    return (
      <div id="main">
        <h1 id="mainTitle">Resume Builder</h1>
        <div id="inputSection">
          <Inputs
            changeGeneral={this.changeGeneral}
            educationChange={this.educationChange}
            changeExperience={this.changeExperience}
            addEducation={this.addEducation}
            addExperience={this.addExperience}
            deleteEducation={this.deleteEducation}
            deleteExperience={this.deleteExperience}
            dataGeneral={this.state.general}
            dataContact={this.state.contact}
            dataSkills={this.state.skills}
            education={this.state.education}
            experience={this.state.experience}
            skills={this.state.skills}
            changeSkills={this.changeSkills}
          />
        </div>
        <div id="template">
          <General dataGeneral={this.state.general} />
          <div id="bottomSection">
            <Work experience={this.state.experience} />
            <Info education={this.state.education} skills={this.state.skills} />
          </div>
        </div>
        {/* <FuncApp /> */}
      </div>
    );
  }
}

export default App;
