// import { useState } from "react";

function DisplaySection({ thePersnInfo }) {
  return (
    <section>
      <h1>Personalia Information</h1>
      <p>{thePersnInfo[0]}</p>
      <p>{thePersnInfo[1]}</p>
      <p>{thePersnInfo[2]}</p>
      <p>{thePersnInfo[3]}</p>
    </section>
  );
}

export default DisplaySection;
