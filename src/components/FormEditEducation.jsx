// import { useState } from "react";
import PropTypes from "prop-types";
// import { v4 as uuidv4 } from "uuid";
// import Button from "./Button.jsx";

function FormEditEducation({ item, editEduList }) {
  let schoolValue = "";
  let titleValue = "";
  let dateValue = "";

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editEduList(item, titleValue, schoolValue, dateValue);
        }}
      >
        <label htmlFor="schoolName">
          {"What is your school Name?"}
          <input
            type="text"
            placeholder="School Name"
            id="schoolName"
            autoComplete="off"
            defaultValue={item.school}
            onChange={(e) => {
              schoolValue = e.target.value;
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
              defaultValue={item.title}
              onChange={(e) => {
                titleValue = e.target.value;
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
              defaultValue={item.date}
              onChange={(e) => {
                dateValue = e.target.value;
              }}
            />
          </label>
        </div>
        <div>
          <input type="submit" value={"Edit"} />
        </div>
      </form>
    </>
  );
}

FormEditEducation.propTypes = {
  onAddEducationInfo: PropTypes.func,
  item: PropTypes.object,
  editEduList: PropTypes.func,
};

export { FormEditEducation };
