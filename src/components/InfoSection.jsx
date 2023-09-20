import { useState } from "react";
import Personalia from "./Personalia.jsx";
import EducationInfo from "./EducationInfo.jsx";

function InfoSection() {
  const [show, setShow] = useState(false);

  const onHandlerBtn = () => {
    setShow(!show);
  };

  return (
    <section className="infoPart">
      <Personalia />
      <hr></hr>
      <EducationInfo />
      <hr></hr>
    </section>
  );
}

export default InfoSection;
