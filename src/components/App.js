import "../styles/App.css";
import React, { useState, useEffect } from "react";
import General from "./general.js";
import Work from "./Work";
import Info from "./Info";
import Inputs from "./input-components/Inputs";

const App = () => {
  const [general, setGeneral] = useState(() => {
    return {
      name: localStorage.getItem("name") || "",
      overview: localStorage.getItem("overview") || "",
      email: localStorage.getItem("email") || "",
      cell: localStorage.getItem("cell") || "",
      city: localStorage.getItem("city") || "",
      state: localStorage.getItem("state") || "",
      gitHub: localStorage.getItem("gitHub") || "",
      linkedIn: localStorage.getItem("linkedIn") || "",
      website: localStorage.getItem("website") || "",
    };
  });

  const [skills, setSkills] = useState(() => {
    return {
      skill1: localStorage.getItem("skill1") || "",
      skill2: localStorage.getItem("skill2") || "",
      skill3: localStorage.getItem("skill3") || "",
      skill4: localStorage.getItem("skill4") || "",
      skill5: localStorage.getItem("skill5") || "",
      skill6: localStorage.getItem("skill6") || "",
      skill7: localStorage.getItem("skill7") || "",
      skill8: localStorage.getItem("skill8") || "",
    };
  });

  const [experience, setExperience] = useState(() => {
    return [
      {
        jobTitle: localStorage.getItem("jobTitle0") || "",
        company: localStorage.getItem("company0") || "",
        years: localStorage.getItem("years0") || "",
        location: localStorage.getItem("location0") || "",
        ex1: localStorage.getItem("ex10") || "",
        ex2: localStorage.getItem("ex20") || "",
        ex3: localStorage.getItem("ex30") || "",
        ex4: localStorage.getItem("ex40") || "",
        ex5: localStorage.getItem("ex50") || "",
      },
    ];
  });

  const [education, setEducation] = useState(() => {
    return [
      {
        type: localStorage.getItem("type-0") || "",
        institute: localStorage.getItem("institute-0") || "",
        years: localStorage.getItem("years-0") || "",
      },
    ];
  });

  const changeGeneral = (type, value) => {
    setGeneral({ ...general, [type]: value });
    localStorage.setItem(type, value);
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
    localStorage.setItem(type, value);
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

    localStorage.setItem(type + "-" + index, value);

    setEducation(items);
  };

  const addEducation = () => {
    let num = education.length;
    setEducation([
      ...education,
      {
        type: localStorage.getItem("type-" + num) || "",
        institute: localStorage.getItem("institute-" + num) || "",
        years: localStorage.getItem("years-" + num) || "",
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
    let num = experience.length;
    setExperience([
      ...experience,
      {
        jobTitle: localStorage.getItem("jobTitle" + num) || "",
        company: localStorage.getItem("company" + num) || "",
        years: localStorage.getItem("years" + num) || "",
        location: localStorage.getItem("location" + num) || "",
        ex1: localStorage.getItem("ex1" + num) || "",
        ex2: localStorage.getItem("ex2" + num) || "",
        ex3: localStorage.getItem("ex3" + num) || "",
        ex4: localStorage.getItem("ex4" + num) || "",
        ex5: localStorage.getItem("ex5" + num) || "",
      },
    ]);
  };

  const changeExperience = (type, value, index) => {
    let items = [...experience];
    let item = items[index];
    item[type] = value;
    items[item] = item;

    localStorage.setItem(type + index, value);

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
