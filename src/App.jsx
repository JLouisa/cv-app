import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfoSection from "./components/InfoSection.jsx";
import { DisplaySection } from "./components/DisplaySection.jsx";
import "./styles/App.css";

function App() {
  //! The Main Object
  const mainObj = {
    side: { extra: [] },
    main: { personalia: {}, education: [], pracExp: [], extra: [] },
  };

  const [mainInfo, setMain] = useState(mainObj);

  // //! Load JSON
  useEffect(() => {
    const loadMainCv = localStorage.getItem("mainCV");
    if (loadMainCv !== null) setMain(JSON.parse(loadMainCv));
  }, []);

  //! Save JSON
  const saving = (obj) => {
    const mainCV = JSON.stringify(obj);
    localStorage.setItem("mainCV", mainCV);
  };

  //! Display Work Experience
  const [displayPracExpInfo, setdisplayPracExpInfo] = useState([]);
  function addPracExpInfo(info) {
    setdisplayPracExpInfo([...displayPracExpInfo, info]);
  }

  //! Add to or Edit Main Object for Personalia
  const mainPersonalia = (person) => {
    const newObj = Object.assign({}, mainInfo);
    newObj.main.personalia = { ...person };
    setMain(newObj);
    saving(newObj);
  };

  //! Add to or Edit Main Object for Education
  const mainEducation = (edu) => {
    const newObj = Object.assign({}, mainInfo);
    newObj.main.education = [...newObj.main.education, edu];
    setMain(newObj);
    saving(newObj);
  };
  const editMainEducation = (item, newItem) => {
    const newObj = Object.assign({}, mainInfo);
    const foundIndex = newObj.main.education.findIndex((x) => x.id === item.id);
    newObj.main.education[foundIndex] = { ...newItem };
    const filteredList = newObj.main.education.filter((x) => x.deleted === false);
    newObj.main.education = [...filteredList];
    setMain(newObj);
    saving(newObj);
  };

  //! Add to or Edit Main Object for Practical Experience
  const mainPracExp = (exp) => {
    const newObj = Object.assign({}, mainInfo);
    newObj.main.pracExp = [...newObj.main.pracExp, exp];
    setMain(newObj);
    saving(newObj);
  };
  const editMainPracExp = (item, newItem) => {
    const newObj = Object.assign({}, mainInfo);
    const foundIndex = newObj.main.pracExp.findIndex((x) => x.id === item.id);
    newObj.main.pracExp[foundIndex] = { ...newItem };
    const filteredList = newObj.main.pracExp.filter((x) => x.deleted === false);
    newObj.main.pracExp = [...filteredList];
    setMain(newObj);
    saving(newObj);
  };

  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>
      <main>
        <InfoSection
          theMain={mainInfo}
          onMainPersonalia={mainPersonalia}
          onMainEducation={mainEducation}
          onEditMainEducation={editMainEducation}
          onMainPracExp={mainPracExp}
          onEditMainPracExp={editMainPracExp}
          onAddPracExpInfo={addPracExpInfo}
        />
        <DisplaySection theMain={mainInfo} thePracExpInfo={displayPracExpInfo} />
      </main>
    </>
  );
}

App.propTypes = {
  theJsonCV: PropTypes.object,
};

export { App };
