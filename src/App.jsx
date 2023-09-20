import { useState } from "react";
import { InfoSection } from "./components/InfoSection.jsx";
import { DisplaySection } from "./components/DisplaySection.jsx";
import "./styles/App.css";

function App() {
  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>
      <main>
        <InfoSection />
        <DisplaySection />
      </main>
    </>
  );
}

export default App;
