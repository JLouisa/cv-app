// import { useState } from "react";
import Personalia from "./Personalia.jsx";
import EducationInfo from "./EducationInfo.jsx";
import PracticalExperience from "./PracticalExperience.jsx";

function InfoSection() {
  return (
    <section className="infoPart">
      <Personalia />
      <hr></hr>
      <EducationInfo />
      <hr></hr>
      <PracticalExperience />
      <hr></hr>
    </section>
  );
}

export default InfoSection;
