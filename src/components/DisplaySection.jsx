// import { useState } from "react";
import PropTypes from "prop-types";

function DisplaySection({ thePersnInfo, theEducationInfo, thePracExpInfo }) {
  return (
    <section>
      <div className="displayPersonalia">
        <h1>Personalia Information</h1>
        <p>{thePersnInfo[0]}</p>
        <p>{thePersnInfo[1]}</p>
        <p>{thePersnInfo[2]}</p>
        <p>{thePersnInfo[3]}</p>
        {thePersnInfo[4]}
      </div>
      <hr></hr>
      <div className="displayEducation">
        <h2>Education Information</h2>
        {theEducationInfo.map((edu) => {
          return (
            <div key={edu.id}>
              <p className="eduTitle">{edu.title}</p>
              <p>{edu.school}</p>
              <p>{edu.date}</p>
            </div>
          );
        })}
      </div>
      <div className="displayPracticalExperience">
        <hr></hr>
        <h3>Practical Experience</h3>
        {thePracExpInfo.map((exp) => {
          return (
            <div className="eduDivs" key={exp.id}>
              <p className="eduTitle">
                <span>{exp.yourFunction}</span>{" "}
                <span>
                  From {exp.yourStartDate} to {exp.yourEndDate}
                </span>
              </p>
              <p>
                {exp.yourEmployer}, {exp.yourLocation}
              </p>
              <p>{exp.yourDescription}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

DisplaySection.propTypes = {
  thePersnInfo: PropTypes.array,
  theEducationInfo: PropTypes.array,
  thePracExpInfo: PropTypes.array,
};

export { DisplaySection };
