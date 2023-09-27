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
  editMain,
}) {
  const [isActive, setIsActive] = useState(false);

  const clickedFunc = (item, branch) => {
    const newItem = { ...item };
    newItem.selected = !newItem.selected;

    editMain(newItem, branch);
  };

  return (
    <section className="infoSection">
      <Personalia theMain={theMain} onMainPersonalia={onMainPersonalia} />
      <hr></hr>
      <EducationInfo
        theMain={theMain}
        onMainEducation={onMainEducation}
        onEditMainEducation={onEditMainEducation}
        setIsActive={setIsActive}
        isActive={isActive}
        clickedFunc={clickedFunc}
      />
      <hr></hr>
      <PracticalExperience
        theMain={theMain}
        onMainPracExp={onMainPracExp}
        onEditMainPracExp={onEditMainPracExp}
        setIsActive={setIsActive}
        isActive={isActive}
        clickedFunc={clickedFunc}
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
  editMain: PropTypes.func,
};

export default InfoSection;
