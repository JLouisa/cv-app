import { useState } from "react";
import InfoSection from "./components/InfoSection.jsx";
import DisplaySection from "./components/DisplaySection.jsx";
import "./styles/App.css";

function App() {
  const [personInfo, setPersonInfo] = useState("");

  const addPersonInfo = (info) => {
    console.log(info);
    setPersonInfo(info);
  };

  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>
      <main>
        <InfoSection onAddPersonInfo={addPersonInfo} />
        <DisplaySection thePersnInfo={personInfo} />
      </main>
    </>
  );
}

export default App;
