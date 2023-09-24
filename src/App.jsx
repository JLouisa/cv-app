import { useState } from "react";
import InfoSection from "./components/InfoSection.jsx";
import DisplaySection from "./components/DisplaySection.jsx";
import "./styles/App.css";

function App() {
  //! Display Personalia
  const [displayFirstName, setDisplayFirstName] = useState("No info provided");
  const [displayLastName, setDisplayLastName] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayPhoneNum, setDisplayPhoneNum] = useState("");
  const addPersonInfo = (info) => {
    // setPersonInfo(info);
    setDisplayFirstName(info.firstName);
    setDisplayLastName(info.lastName);
    setDisplayEmail(info.email);
    setDisplayPhoneNum(info.phoneNum);
  };

  //! Display Education

  //! Display Work Experience

  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>
      <main>
        <InfoSection onAddPersonInfo={addPersonInfo} />
        <DisplaySection thePersnInfo={[displayFirstName, displayLastName, displayEmail, displayPhoneNum]} />
      </main>
    </>
  );
}

export default App;
