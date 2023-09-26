// import { useState } from "react";
import PropTypes from "prop-types";
// import { v4 as uuidv4 } from "uuid";
// import Button from "./Button.jsx";
import { FormEditEducation } from "./FormEditEducation.jsx";

function EducationList({ theMain, onEditMainEducation, editEduList, setIsActive }) {
  const changeSelected = (item) => {
    const ind = theMain.main.education.findIndex((x) => x.id === item.id);
    const newList = { ...theMain.main.education[ind] };
    newList.selected = !newList.selected;
    onEditMainEducation(theMain.main.education[ind], newList);
  };

  return (
    <>
      {theMain.main.education.map((item) => {
        return (
          <div
            className="workTitle"
            key={item.id}
            onDoubleClick={() => {
              changeSelected(item);
            }}
          >
            {item.title}
            {item.selected && (
              <FormEditEducation
                item={item}
                editEduList={editEduList}
                changeSelected={changeSelected}
                setIsActive={setIsActive}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

EducationList.propTypes = {
  theMain: PropTypes.object,
  onEditMainEducation: PropTypes.func,
  editEduList: PropTypes.func,
  setIsActive: PropTypes.func,
};

export { EducationList };
