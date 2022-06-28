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
      // education: {
      //   type: "",
      //   institute: "",
      //   years: "",
      // },
      experience: {
        jobTitle: "",
        company: "",
        years: "",
        location: "",
        ex1: "",
        ex2: "",
        ex3: "",
      },
      education: [
        {
          main: {
            formIDs: {
              formID: "fEducation",
              type: "fType",
              institute: "fInstitute",
              years: "fYears",
            },
            infoIDs: {
              inst: "eduInst",
              type: "eduType",
              years: "eduYears",
            },
            data: {
              type: "",
              institute: "",
              years: "",
            },
            num: 0,
          },
        },
      ],
      expForms: [
        {
          form: {
            formID: "fExperience",
            title: "fTitle",
            company: "fCompany",
            yearsExp: "fYearsExp",
            location: "fLocation",
            ex1: "fExample1",
            ex2: "fExample2",
            ex3: "fExample3",
          },
        },
      ],
      // educationInfo: [
      //   {
      //     main: {
      //       inst: "eduInst",
      //       type: "eduType",
      //       years: "eduYears",
      //     },
      //   },
      // ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.skillChange = this.skillChange.bind(this);
    this.educationChange = this.educationChange.bind(this);
    this.experienceChange = this.experienceChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
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
      this.setState(
        {
          contact: {
            ...this.state.contact,
            website: e.target.value,
          },
        },
        () => {
          this.showWeb();
        }
      );
    }
  };

  showWeb() {
    const webDiv = document.querySelector("#webDiv");

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

  educationChange(e) {
    e.preventDefault();
    let trackingNum = e.target.form.getAttribute("data-num");
    console.log(trackingNum);
    console.log(this.state.education[trackingNum]);

    let typeValue = e.target.form.firstChild;
    let instValue = typeValue.nextSibling.nextSibling;
    let yearsValue = instValue.nextSibling.nextSibling;

    // let test = this.state.education.filter((data) => data.main.num === 0);
    // console.log(`this is test: ${test}`);

    this.setState(
      {
        education: [
          // ...this.state.education,
          {
            main: {
              ...this.state.education.main,
              formIDs: {
                formID: "fEducation",
                type: "fType",
                institute: "fInstitute",
                years: "fYears",
              },
              infoIDs: {
                inst: "eduInst",
                type: "eduType",
                years: "eduYears",
              },
              data: {
                type: typeValue.value,
                institute: instValue.value,
                years: yearsValue.value,
              },
            },
          },
        ],
      },
      console.log(this.state.education)
    );
  }

  addEducation(e) {
    let num = this.state.education.length;
    this.setState({
      education: [
        ...this.state.education,
        {
          main: {
            ...this.state.education.main,
            formIDs: {
              formID: "fEducation" + num,
              type: "fType" + num,
              institute: "fInstitute" + num,
              years: "fYears" + num,
            },
            infoIDs: {
              inst: "eduInst" + num,
              type: "eduType" + num,
              years: "eduYears" + num,
            },
            data: {
              type: "",
              institute: "",
              years: "",
            },
            num: num,
          },
        },
      ],
    });
  }

  addExperience(e) {
    let num = this.state.expForms.length;
    this.setState({
      expForms: [
        ...this.state.eduForms,
        {
          form: {
            formID: "fExperience" + num,
            title: "fTitle" + num,
            company: "fCompany" + num,
            yearsExp: "fYearsExp" + num,
            location: "fLocation" + num,
            ex1: "fExample1" + num,
            ex2: "fExample2" + num,
            ex3: "fExample3" + num,
          },
        },
      ],
    });
  }

  experienceChange(e) {
    e.preventDefault();
    let titleValue = e.target.form.firstChild;
    let companyValue = titleValue.nextSibling.nextSibling;
    let yearsValue = companyValue.nextSibling.nextSibling;
    let locValue = yearsValue.nextSibling.nextSibling;
    let ex1Val = locValue.nextSibling.nextSibling;
    let ex2Val = ex1Val.nextSibling.nextSibling;
    let ex3Val = ex2Val.nextSibling.nextSibling;

    this.setState({
      experience: {
        jobTitle: titleValue.value,
        company: companyValue.value,
        years: yearsValue.value,
        location: locValue.value,
        ex1: ex1Val.value,
        ex2: ex2Val.value,
        ex3: ex3Val.value,
      },
    });
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
            addEducation={this.addEducation}
            addExperience={this.addExperience}
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
