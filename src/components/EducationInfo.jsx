import { useState } from "react";
import Button from "./Button.jsx";

function EducationInfo() {
  const [show, setShow] = useState(false);

  const onHandlerBtn = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="educationTitle">
        <h1>Education</h1>
        <Button color={"green"} text={show ? "⌃" : "⌄"} onClick={onHandlerBtn} />
      </div>
      {show && (
        <form>
          <label htmlFor="schoolName">
            {"What is your school Name?"}
            <input type="text" placeholder="School Name" id="schoolName" autoComplete="off" />
          </label>
          <div>
            <label htmlFor="titleStudy">
              {"What is your Study Title?"}
              <input type="text" placeholder="Study Title" id="titleStudy" autoComplete="off" />
            </label>
          </div>
          <div>
            <label htmlFor="date">
              {"Date of Study"}
              <input type="date" id="date" autoComplete="off" />
            </label>
          </div>
        </form>
      )}
    </>
  );
}

export default EducationInfo;
