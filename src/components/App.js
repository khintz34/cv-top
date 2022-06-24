import "../styles/App.css";
import { Component } from "react";
import General from "./general.js";
import Work from "./Work";
import Info from "./Info";
import Inputs from "./input-components/Inputs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "Name",
        overview: "Overview Paragraph",
      },
      contact: {
        email: "Email",
        cell: "Cell Number",
        city: "City",
        state: "State",
        gitHub: "GitHub",
        linkedIn: "LinkedIn",
        website: "Website",
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
      education: {
        type: "Type",
        institute: "Institute",
        years: "Years",
      },
      experience: {
        jobTitle: "Job Title",
        company: "Company",
        years: "Years",
        location: "Location",
        ex1: "Example 1",
        ex2: "Example 2",
        ex3: "Example 3",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.skillChange = this.skillChange.bind(this);
    this.educationChange = this.educationChange.bind(this);
    this.experienceChange = this.experienceChange.bind(this);
  }

  handleChange = (e) => {
    if (e.target.id === "fName") {
      this.setState({
        general: {
          ...this.state.general,
          name: e.target.value,
        },
      });
    } else if (e.target.id === "fPara") {
      this.setState({
        general: {
          ...this.state.general,
          overview: e.target.value,
        },
      });
    } else if (e.target.id === "fEmail") {
      this.setState({
        contact: {
          ...this.state.contact,
          email: e.target.value,
        },
      });
    } else if (e.target.id === "fNum") {
      this.setState({
        contact: {
          ...this.state.contact,
          cell: e.target.value,
        },
      });
    } else if (e.target.id === "fCity") {
      this.setState({
        contact: {
          ...this.state.contact,
          city: e.target.value,
        },
      });
    } else if (e.target.id === "fState") {
      this.setState({
        contact: {
          ...this.state.contact,
          state: e.target.value,
        },
      });
    } else if (e.target.id === "fLinked") {
      this.setState({
        contact: {
          ...this.state.contact,
          linkedIn: e.target.value,
        },
      });
    } else if (e.target.id === "fGit") {
      this.setState({
        contact: {
          ...this.state.contact,
          gitHub: e.target.value,
        },
      });
    } else if (e.target.id === "fWeb") {
      this.setState({
        contact: {
          ...this.state.contact,
          website: e.target.value,
        },
      });
    }

    // Need Davids Help
    const webDiv = document.querySelector("#webDiv");
    console.log(this.state.contact.website);

    if (webDiv.textContent === "" || webDiv.textContent === "Website") {
      webDiv.classList.add("hide");
    } else {
      webDiv.classList.remove("hide");
    }
  };
  // Need Davids Help
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
      this.checkCounts(arrayItem)
    );
  }
  // Need Davids Help
  checkCounts(item) {
    let skillItem = document.querySelector(`#${item}-Info`);
    console.log(skillItem.textContent);

    if (skillItem.textContent !== "") {
      skillItem.classList.add("skillShow");
    } else {
      skillItem.classList.remove("skillShow");
      console.log("HERE");
    }
  }

  educationChange(e) {
    e.preventDefault();
    const type = document.querySelector("#fType");
    const institute = document.querySelector("#fInstitute");
    const years = document.querySelector("#fYears");
    const eduType = document.querySelector("#eduType");
    const eduInst = document.querySelector("#eduInst");
    const eduYears = document.querySelector("#eduYears");

    this.setState({
      education: {
        type: type.value,
        institute: institute.value,
        years: years.value,
      },
    });

    eduType.textContent = type.value;
    eduInst.textContent = institute.value;
    eduYears.textContent = years.value;
  }

  experienceChange(e) {
    e.preventDefault();
    const fTitle = document.querySelector("#fTitle");
    const fCompany = document.querySelector("#fCompany");
    const fYearsExp = document.querySelector("#fYearsExp");
    const fLocation = document.querySelector("#fLocation");
    const fExample1 = document.querySelector("#fExample1");
    const fExample2 = document.querySelector("#fExample2");
    const fExample3 = document.querySelector("#fExample3");

    let jobTitle = document.querySelector("#jobTitle");
    let companyName = document.querySelector("#companyName");
    let years = document.querySelector("#years");
    let location = document.querySelector("#location");
    let ex1 = document.querySelector("#ex1");
    let ex2 = document.querySelector("#ex2");
    let ex3 = document.querySelector("#ex3");

    this.setState({
      experience: {
        jobTitle: fTitle.value,
        company: fCompany.value,
        years: fYearsExp.value,
        location: fLocation.value,
        ex1: fExample1.value,
        ex2: fExample2.value,
        ex3: fExample3.value,
      },
    });

    jobTitle.textContent = fTitle.value;
    companyName.textContent = fCompany.value;
    years.textContent = fYearsExp.value;
    location.textContent = fLocation.value;
    ex1.textContent = fExample1.value;
    ex2.textContent = fExample2.value;
    ex3.textContent = fExample3.value;
  }

  render() {
    // const { task, tasks } = this.state;

    return (
      <div id="main">
        <h1 id="mainTitle">Resume Builder</h1>
        <div id="inputSection">
          <Inputs
            handleChange={this.handleChange}
            skillChange={this.skillChange}
            educationChange={this.educationChange}
            experienceChange={this.experienceChange}
            {...this.state}
          />
        </div>
        <div id="template">
          <General {...this.state} />
          <div id="bottomSection">
            <Work {...this.state} />
            <Info {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
