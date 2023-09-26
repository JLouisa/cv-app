import { useState } from "react";
import InfoSection from "./components/InfoSection.jsx";
import { DisplaySection } from "./components/DisplaySection.jsx";
// import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";

function App() {
  //! The Main Object
  const mainObj = {
    personalia: {},
    education: {},
    pracExp: {},
    extra: {},
  };

  const [main, setMain] = useState(mainObj);

  //! Display Personalia
  const [displayPersonalia, setDisplayPersonalia] = useState([]);

  //! Display Education
  const [displayEducationInfo, setDisplayEducationInfo] = useState([]);
  function addEducationInfo(info) {
    setDisplayEducationInfo([...displayEducationInfo, /*{ id: uuidv4(), info }*/ info]);
  }
  function editEducationInfo(info) {
    setDisplayEducationInfo(info);
  }

  //! Display Work Experience
  const [displayPracExpInfo, setdisplayPracExpInfo] = useState([]);
  function addPracExpInfo(info) {
    setdisplayPracExpInfo([...displayPracExpInfo, /*{ id: uuidv4(), info }*/ info]);
  }

  //! Edit Practical Experience
  function editPracExp(item, newItem) {
    displayPracExpInfo.forEach((exp) => {
      if (exp.id === item.id) {
        const ind = displayPracExpInfo.indexOf(exp);
        const newArr = [...displayPracExpInfo];
        if (newItem.yourFunction !== "") {
          newArr[ind].yourFunction = newItem.yourFunction;
        }
        if (newItem.yourEmployer !== "") {
          newArr[ind].yourEmployer = newItem.yourEmployer;
        }
        if (newItem.yourLocation !== "") {
          newArr[ind].yourLocation = newItem.yourLocation;
        }
        if (newItem.yourStartDate !== "") {
          newArr[ind].yourStartDate = newItem.yourStartDate;
        }
        if (newItem.yourEndDate !== "") {
          newArr[ind].yourEndDate = newItem.yourEndDate;
        }
        if (newItem.yourDescription !== "") {
          newArr[ind].yourDescription = newItem.yourDescription;
        }
        if (newItem.selected !== "") {
          newArr[ind].selected = newItem.selected;
        }
        setdisplayPracExpInfo(newArr);
      }
    });
  }

  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>
      <main>
        <InfoSection
          onAddPersonaliaInfo={setDisplayPersonalia}
          onAddEducationInfo={addEducationInfo}
          onAddPracExpInfo={addPracExpInfo}
          onEditPracExp={editPracExp}
          onEditEducationInfo={editEducationInfo}
        />
        <DisplaySection
          thePersonaliaInfo={displayPersonalia}
          theEducationInfo={displayEducationInfo}
          thePracExpInfo={displayPracExpInfo}
        />
      </main>
    </>
  );
}

export default App;
