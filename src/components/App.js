import "../styles/App.css";
import React, { useState, useEffect } from "react";
import General from "./general.js";
import Work from "./Work";
import Info from "./Info";
import Inputs from "./input-components/Inputs";

const App = () => {
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
    setGeneral({ ...general, [type]: value });
  };

  useEffect(() => {
    checkInfo();
  }, [general]);

  const checkInfo = () => {
    showWeb();

    if (general.cell.length === 10 || general.cell.length === 11) {
      let num = general.cell.length;
      formatCell(num);
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

  const formatCell = (num) => {
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
    setSkills({ ...skills, [type]: value });
  };

  useEffect(() => {
    checkCounts();
  }, [skills]);

  const checkCounts = (item) => {
    const skillsArray = [
      "skill1",
      "skill2",
      "skill3",
      "skill4",
      "skill5",
      "skill6",
      "skill7",
      "skill8",
    ];
    for (const item of skillsArray) {
      let skillItem = document.querySelector(`#${item}-Info`);

      if (skillItem.textContent !== "") {
        skillItem.classList.add("skillShow");
      } else {
        skillItem.classList.remove("skillShow");
      }
    }
  };

  const changeEducation = (type, value, index) => {
    let items = [...education];
    let item = items[index];
    item[type] = value;
    items[item] = item;

    setEducation(items);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        type: "",
        institute: "",
        years: "",
      },
    ]);
  };

  const deleteEducation = (index) => {
    if (education.length !== 1) {
      const deleteArray = education.filter((item, i) => i !== index);

      setEducation(deleteArray);
    }
  };

  const addExperience = () => {
    setExperience([
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
    ]);
  };

  const changeExperience = (type, value, index) => {
    let items = [...experience];
    let item = items[index];
    item[type] = value;
    items[item] = item;

    setExperience(items);
  };

  useEffect(() => {
    showExperience();
  }, [experience]);

  const deleteExperience = (index) => {
    if (experience.length !== 1) {
      const deleteArray = experience.filter((item, i) => i !== index);
      setExperience(deleteArray);
    }
  };

  const showExperience = () => {
    const typeArray = ["ex1", "ex2", "ex3", "ex4", "ex5"];

    for (let i = 0; i < experience.length; i++) {
      for (let j = 0; j < typeArray.length; j++) {
        let type = typeArray[j];
        if (experience[i][type] !== "") {
          let item = document.querySelector(`#${type}-${i}`);
          item.classList.remove("hide");
        } else {
          let item = document.querySelector(`#${type}-${i}`);
          item.classList.add("hide");
        }
      }
    }
  };

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
        <General dataGeneral={general} />
        <div id="bottomSection">
          <Work experience={experience} />
          <Info education={education} skills={skills} />
        </div>
      </div>
    </div>
  );
};

export default App;
