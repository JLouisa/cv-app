import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfoSection from "./components/InfoSection.jsx";
import { DisplaySection } from "./components/DisplaySection.jsx";
import "./styles/App.css";
import DownloadSection from "./components/DownloadSection.jsx";
import FooterInfo from "./components/FooterInfo.jsx";

function App() {
  //! The Main Object
  const mainObj = {
    side: { extra: [] },
    main: { personalia: {}, education: [], pracExp: [], extra: [] },
  };
  // const exampleObj = {
  //   side: {
  //     extra: [],
  //   },
  //   main: {
  //     personalia: {
  //       firstName: "John",
  //       lastName: "Doe",
  //       email: "john.doe@gmail.com",
  //       phoneNum: "0645678901",
  //     },
  //     education: [
  //       {
  //         title: "Fiscal Law",
  //         school: "Erasmus University",
  //         date: "2023-01",
  //         selected: false,
  //         deleted: false,
  //         id: "998898a6-b1fe-4e72-b858-2b129ed229ca",
  //       },
  //       {
  //         title: "Web Developer",
  //         school: "The Odin Project",
  //         date: "2023-05",
  //         selected: false,
  //         deleted: false,
  //         id: "b035a984-7836-48af-9d6c-825d8b7f5ba2",
  //       },
  //     ],
  //     pracExp: [
  //       {
  //         yourFunction: "Police Officer",
  //         yourEmployer: "Police Department",
  //         yourLocation: "Amsterdam",
  //         yourStartDate: "2023-01",
  //         yourEndDate: "2023-02",
  //         yourDescription: "Beating Criminals",
  //         selected: false,
  //         deleted: false,
  //         id: "26cdd90c-6240-4934-ac47-0818ea67afa6",
  //       },
  //       {
  //         yourFunction: "Lawyer",
  //         yourEmployer: "Law Center",
  //         yourLocation: "Rotterdam",
  //         yourStartDate: "2023-02",
  //         yourEndDate: "2023-03",
  //         yourDescription: "Protecting Criminals",
  //         selected: false,
  //         deleted: false,
  //         id: "2d91020c-bbd3-4cbf-9f32-37d946715d33",
  //       },
  //     ],
  //     extra: [],
  //   },
  // };

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

  const editMain = (item, branch) => {
    if (branch === mainInfo.main.education) {
      const newObj = Object.assign({}, mainInfo);
      const newBranch = [...branch];

      const foundIndex = newBranch.findIndex((x) => x.id === item.id);
      newBranch[foundIndex] = { ...item };
      newObj.main.education = [...newBranch];
      setMain(newObj);
      saving(newObj);
    }
    if (branch === mainInfo.main.pracExp) {
      const newObj = Object.assign({}, mainInfo);
      const newBranch = [...branch];

      const foundIndex = newBranch.findIndex((x) => x.id === item.id);
      newBranch[foundIndex] = { ...item };
      newObj.main.pracExp = [...newBranch];
      setMain(newObj);
      saving(newObj);
    }
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
          editMain={editMain}
        />
        <DisplaySection theMain={mainInfo} thePracExpInfo={displayPracExpInfo} />
      </main>
      <DownloadSection />
      <footer>
        <FooterInfo />
      </footer>
    </>
  );
}

App.propTypes = {
  theJsonCV: PropTypes.object,
};

export { App };
