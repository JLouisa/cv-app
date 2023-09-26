import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button.jsx";
import { EducationList } from "./EducationList.jsx";

function EducationInfo({ theMain, onMainEducation, onEditMainEducation }) {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [schoolName, setSchoolName] = useState("");
  const [titleStudy, setTitleStudy] = useState("");
  const [date, setDate] = useState("");

  const onHandlerBtn = () => {
    setShow(!show);
  };

  class NewEdu {
    constructor(title, school, date) {
      (this.title = title), (this.school = school), (this.date = date), (this.selected = false), (this.id = uuidv4());
    }
  }

  const onSumit = () => {
    const newItem = new NewEdu(titleStudy, schoolName, date);
    onMainEducation(newItem);
    setSchoolName("");
    setTitleStudy("");
    setDate("");
  };

  const editEduList = (item, title, school, date) => {
    const foundIndex = theMain.main.education.findIndex((x) => x.id === item.id);
    const newArr = [...theMain.main.education];
    if (title !== "") {
      newArr[foundIndex].title = title;
    }
    if (school !== "") {
      newArr[foundIndex].school = school;
    }
    if (date !== "") {
      newArr[foundIndex].date = date;
    }
    onEditMainEducation(theMain.main.education[foundIndex], newArr[foundIndex]);
  };

  return (
    <>
      <div className="educationTitle">
        <h1>Education</h1>
        <Button color={"green"} text={show ? "⌃" : "⌄"} onClick={onHandlerBtn} />
      </div>
      {show && (
        <>
          <div>
            <EducationList
              theMain={theMain}
              onEditMainEducation={onEditMainEducation}
              editEduList={editEduList}
              setIsActive={setIsActive}
            />
          </div>
          {isActive && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSumit();
                setIsActive(false);
              }}
            >
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
                    type="month"
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
          <Button
            text={isActive ? "Close" : "Add Education Info"}
            onClick={() => {
              setIsActive(!isActive);
            }}
          />
        </>
      )}
    </>
  );
}

EducationInfo.propTypes = {
  theMain: PropTypes.object,
  onMainEducation: PropTypes.func,
  onEditMainEducation: PropTypes.func,
};

export default EducationInfo;
