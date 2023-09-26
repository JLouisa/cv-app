import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button.jsx";
import { EducationList } from "./EducationList.jsx";

function EducationInfo({ onAddEducationInfo, onEditEducationInfo }) {
  const [show, setShow] = useState(false);

  const [eduList, setEduList] = useState([]);

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

  const onSumit = (e) => {
    e.preventDefault();

    const newItem = new NewEdu(titleStudy, schoolName, date);
    setEduList([...eduList, newItem]);
    onAddEducationInfo(newItem);
    setSchoolName("");
    setTitleStudy("");
    setDate("");
  };

  const editEduList = (item, title, school, date) => {
    const foundIndex = eduList.findIndex((x) => x.id === item.id);
    const newArr = [...eduList];
    if (title !== "") {
      newArr[foundIndex].title = title;
    }
    if (school !== "") {
      newArr[foundIndex].school = school;
    }
    if (date !== "") {
      newArr[foundIndex].date = date;
    }
    setEduList(newArr);
    onEditEducationInfo(newArr);
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
            <EducationList eduList={eduList} setEduList={setEduList} editEduList={editEduList} />
          </div>
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
        </>
      )}
    </>
  );
}

EducationInfo.propTypes = {
  onAddEducationInfo: PropTypes.func,
  onEditEducationInfo: PropTypes.func,
};

export default EducationInfo;
