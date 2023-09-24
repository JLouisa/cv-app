import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button.jsx";

function EducationInfo({ onAddEducationInfo }) {
  const [show, setShow] = useState(false);

  const [schoolName, setSchoolName] = useState("");
  const [titleStudy, setTitleStudy] = useState("");
  const [date, setDate] = useState("");

  const onHandlerBtn = () => {
    setShow(!show);
  };

  class NewEdu {
    constructor(title, school, date) {
      (this.title = title), (this.school = school), (this.date = date), (this.id = uuidv4());
    }
  }

  const onSumit = (e) => {
    e.preventDefault();

    // const newEdu = {
    //   id: uuidv4(),
    //   "Title of Study": titleStudy,
    //   "School Name": schoolName,
    //   "Start Date": date,
    // };

    onAddEducationInfo(new NewEdu(titleStudy, schoolName, date));
    setSchoolName("");
    setTitleStudy("");
    setDate("");
  };

  return (
    <>
      <div className="educationTitle">
        <h1>Education</h1>
        <Button color={"green"} text={show ? "⌃" : "⌄"} onClick={onHandlerBtn} />
      </div>
      {show && (
        <form onSubmit={onSumit}>
          <label htmlFor="schoolName">
            {"What is your school Name?"}
            <input
              type="text"
              placeholder="School Name"
              id="schoolName"
              autoComplete="off"
              value={schoolName}
              onChange={(e) => {
                setSchoolName(e.target.value);
              }}
            />
          </label>
          <div>
            <label htmlFor="titleStudy">
              {"What is your Study Title?"}
              <input
                type="text"
                placeholder="Study Title"
                id="titleStudy"
                autoComplete="off"
                value={titleStudy}
                onChange={(e) => {
                  setTitleStudy(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="date">
              {"Date of Study"}
              <input
                type="date"
                id="date"
                autoComplete="off"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <input type="submit" value={"Add"} />
          </div>
        </form>
      )}
    </>
  );
}

export default EducationInfo;
