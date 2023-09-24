// import { useState } from "react";

function DisplaySection({ thePersnInfo, theEducationInfo }) {
  // console.log(thePersnInfo[4]);
  console.log("Here");
  console.log(theEducationInfo);
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
    </section>
  );
}

export default DisplaySection;
