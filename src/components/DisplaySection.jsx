// import { useState } from "react";
import PropTypes from "prop-types";

function DisplaySection({ thePersonaliaInfo, theEducationInfo, thePracExpInfo }) {
  return (
    <section>
      <div className="displayPersonalia">
        <h1>Personalia Information</h1>
        <div>
          <p>{thePersonaliaInfo.firstName}</p>
          <p>{thePersonaliaInfo.lastName}</p>
          <p>{thePersonaliaInfo.email}</p>
          <p>{thePersonaliaInfo.phoneNum}</p>
        </div>
      </div>
      <hr></hr>
      <div className="displayEducation">
        <h2>Education Information</h2>
        {theEducationInfo.map((edu) => {
          return (
            <div key={edu.id}>
              <p className="eduTitle">
                <span>{edu.title}</span> <span>{edu.date}</span>
              </p>
              <p>{edu.school}</p>
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
  thePersonaliaInfo: PropTypes.array,
  thePersnInfo: PropTypes.array,
  theEducationInfo: PropTypes.array,
  thePracExpInfo: PropTypes.array,
};

export { DisplaySection };
