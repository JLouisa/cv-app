// import { useState } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Personalia from "./Personalia.jsx";
import EducationInfo from "./EducationInfo.jsx";
import { PracticalExperience } from "./PracticalExperience.jsx";

function InfoSection({ onAddPersonInfo, onAddEducationInfo, onAddPracExpInfo, onEditPracExp }) {
  const [isActive, setIsActive] = useState(false);
  // const editShowExp = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <section className="infoSection">
      <Personalia onAddPersonInfo={onAddPersonInfo} />
      <hr></hr>
      <EducationInfo onAddEducationInfo={onAddEducationInfo} />
      <hr></hr>
      <PracticalExperience
        onAddPracExpInfo={onAddPracExpInfo}
        onEditPracExp={onEditPracExp}
        setIsActive={setIsActive}
        isActive={isActive}
      />
      <hr></hr>
    </section>
  );
}

InfoSection.propTypes = {
  onAddPersonInfo: PropTypes.func,
  onAddEducationInfo: PropTypes.func,
  onAddPracExpInfo: PropTypes.func,
  onEditPracExp: PropTypes.func,
};

export default InfoSection;
