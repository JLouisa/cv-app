// import { useState } from "react";
import Personalia from "./Personalia.jsx";
import EducationInfo from "./EducationInfo.jsx";
import PracticalExperience from "./PracticalExperience.jsx";

function InfoSection({ onAddPersonInfo }) {
  return (
    <section className="infoSection">
      <Personalia onAddPersonInfo={onAddPersonInfo} />
      <hr></hr>
      <EducationInfo />
      <hr></hr>
      <PracticalExperience />
      <hr></hr>
    </section>
  );
}

export default InfoSection;
