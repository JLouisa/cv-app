// import { useState } from "react";
import Personalia from "./Personalia.jsx";
import EducationInfo from "./EducationInfo.jsx";
import WorkExperience from "./WorkExperience.jsx";

function InfoSection() {
  return (
    <section className="infoPart">
      <Personalia />
      <hr></hr>
      <EducationInfo />
      <hr></hr>
      <WorkExperience />
      <hr></hr>
    </section>
  );
}

export default InfoSection;
