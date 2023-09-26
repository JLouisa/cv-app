import PropTypes from "prop-types";

function DisplaySection({ theMain }) {
  return (
    <section>
      <div className="displayPersonalia">
        <h1>Personalia Information</h1>
        <div>
          <p>{theMain.main.personalia.firstName}</p>
          <p>{theMain.main.personalia.lastName}</p>
          <p>{theMain.main.personalia.email}</p>
          <p>{theMain.main.personalia.phoneNum}</p>
        </div>
      </div>
      <hr></hr>
      <div className="displayEducation">
        <h2>Education Information</h2>
        {theMain.main.education.map((edu) => {
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
        {theMain.main.pracExp.map((exp) => {
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
  theMain: PropTypes.object,
};

export { DisplaySection };
