import { useState } from "react";
import InfoSection from "./components/InfoSection.jsx";
import DisplaySection from "./components/DisplaySection.jsx";
// import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";

function App() {
  //! Display Personalia
  const [displayFirstName, setDisplayFirstName] = useState("No info provided");
  const [displayLastName, setDisplayLastName] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayPhoneNum, setDisplayPhoneNum] = useState("");
  const [displaySeparator, setDisplaySeparator] = useState(false);
  function addPersonInfo(info) {
    setDisplayFirstName(info.firstName);
    setDisplayLastName(info.lastName);
    setDisplayEmail(info.email);
    setDisplayPhoneNum(info.phoneNum);
    setDisplaySeparator(true);
  }

  //! Display Education
  const [displayEducationInfo, setDisplayEducationInfo] = useState([]);
  function addEducationInfo(info) {
    setDisplayEducationInfo([...displayEducationInfo, /*{ id: uuidv4(), info }*/ info]);
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
        console.log("finding index");
        console.log(ind);
        const newArr = [...displayPracExpInfo];
        newArr.splice(ind, 1, newItem);
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
          onAddPersonInfo={addPersonInfo}
          onAddEducationInfo={addEducationInfo}
          onAddPracExpInfo={addPracExpInfo}
          onEditPracExp={editPracExp}
        />
        <DisplaySection
          thePersnInfo={[displayFirstName, displayLastName, displayEmail, displayPhoneNum, displaySeparator]}
          theEducationInfo={displayEducationInfo}
          thePracExpInfo={displayPracExpInfo}
        />
      </main>
    </>
  );
}

export default App;
