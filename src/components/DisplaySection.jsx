// import { useState } from "react";
import PropTypes from "prop-types";

function DisplaySection({ thePersnInfo, theEducationInfo }) {
  return (
    <section>
      <div className="displayPersonalia">
        <h1>Personalia Information</h1>
        <p>{thePersnInfo[0]}</p>
        <p>{thePersnInfo[1]}</p>
        <p>{thePersnInfo[2]}</p>
        <p>{thePersnInfo[3]}</p>
        {thePersnInfo[4] && <hr></hr>}
      </div>
      <div className="displayEducation">
        <h2>Education Information</h2>
        {theEducationInfo.map((edu) => {
          return (
            <div key={edu.id}>
              <p>{edu.title}</p>
              <p>{edu.school}</p>
              <p>{edu.date}</p>
              <hr></hr>
            </div>
          );
        })}
      </div>
      <div className="displayPracticalExperience">
        <h3>Practical Experience</h3>
      </div>
    </section>
  );
}

DisplaySection.propTypes = {
  thePersnInfo: PropTypes.array,
  theEducationInfo: PropTypes.array,
};

export default DisplaySection;
