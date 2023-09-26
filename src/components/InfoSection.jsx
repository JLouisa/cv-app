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
  onMainPracExp,
  onEditMainPracExp,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="infoSection">
      <Personalia onMainPersonalia={onMainPersonalia} />
      <hr></hr>
      <EducationInfo theMain={theMain} onMainEducation={onMainEducation} onEditMainEducation={onEditMainEducation} />
      <hr></hr>
      <PracticalExperience
        theMain={theMain}
        onMainPracExp={onMainPracExp}
        onEditMainPracExp={onEditMainPracExp}
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
  onMainPracExp: PropTypes.func,
  onEditMainPracExp: PropTypes.func,
};

export default InfoSection;
