import "../styles/App.css";
import { Component } from "react";
import General from "./general.js";
import Work from "./Work";
import Info from "./Info";
import Inputs from "./input-components/Inputs";
// import Experience from "./Experience";

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
        fSkill1: "",
        fSkill2: "",
        fSkill3: "",
        fSkill4: "",
        fSkill5: "",
        fSkill6: "",
        fSkill7: "",
        fSkill8: "",
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
    this.skillChange = this.skillChange.bind(this);
    this.educationChange = this.educationChange.bind(this);
    this.changeExperience = this.changeExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  changeGeneral = (type, value) => {
    this.setState((previousData) => {
      const { general } = previousData;
      general[type] = value;

      return {
        ...previousData,
        general,
      };
    });
    this.showWeb();
  };

  showWeb() {
    let webDiv = document.querySelector("#webDiv");
    if (webDiv.textContent === "" || webDiv.textContent === "Website") {
      webDiv.classList.add("hide");
    } else {
      webDiv.classList.remove("hide");
    }
  }

  skillChange(e) {
    const skillArray = [
      "fSkill1",
      "fSkill2",
      "fSkill3",
      "fSkill4",
      "fSkill5",
      "fSkill6",
      "fSkill7",
      "fSkill8",
    ];

    let indexNum = skillArray.indexOf(e.target.id);
    let arrayItem = skillArray[indexNum];

    this.setState(
      {
        skills: {
          ...this.state.skills,
          [arrayItem]: e.target.value,
        },
      },
      () => {
        this.checkCounts(arrayItem);
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
    this.setState((previousEducationData) => {
      const { education } = previousEducationData;

      return {
        ...previousEducationData,
        education: education.filter((item, i) => i !== index),
      };
    });
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
          },
        ],
      };
    });
  }

  changeExperience(type, value, index) {
    this.setState((previousExpData) => {
      const { experience } = previousExpData;
      experience[index][type] = value;

      return {
        ...previousExpData,
        experience,
      };
    });
  }

  deleteExperience(index) {
    this.setState((previousExpData) => {
      const { experience } = previousExpData;

      return {
        ...previousExpData,
        experience: experience.filter((item, i) => i !== index),
      };
    });
  }

  render() {
    return (
      <div id="main">
        <h1 id="mainTitle">Resume Builder</h1>
        <div id="inputSection">
          <Inputs
            changeGeneral={this.changeGeneral}
            skillChange={this.skillChange}
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
  }
}

export default App;
