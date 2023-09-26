// import { useState } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Personalia from "./Personalia.jsx";
import EducationInfo from "./EducationInfo.jsx";
import { PracticalExperience } from "./PracticalExperience.jsx";

function InfoSection({
  theMain,
  onMainPersonalia,
  onMainEducation,
  onEditMainEducation,
  onAddPracExpInfo,
  onEditPracExp,
  // onEditEducationInfo,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="infoSection">
      <Personalia onMainPersonalia={onMainPersonalia} />
      <hr></hr>
      <EducationInfo
        theMain={theMain}
        onMainEducation={onMainEducation}
        onEditMainEducation={onEditMainEducation}
        // onEditEducationInfo={onEditEducationInfo}
      />
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
  theMain: PropTypes.object,
  onMainPersonalia: PropTypes.func,
  onMainEducation: PropTypes.func,
  onEditMainEducation: PropTypes.func,
  onAddEducationInfo: PropTypes.func,
  onAddPracExpInfo: PropTypes.func,
  onEditPracExp: PropTypes.func,
  onEditEducationInfo: PropTypes.func,
};

export default InfoSection;
