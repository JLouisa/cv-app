// import { useState } from "react";
import PropTypes from "prop-types";
// import { v4 as uuidv4 } from "uuid";
// import Button from "./Button.jsx";
import { FormEditEducation } from "./FormEditEducation.jsx";

function EducationList({ eduList, setEduList, editEduList, setIsActive }) {
  const changeSelected = (item) => {
    const ind = eduList.indexOf(item);
    const newList = [...eduList];
    newList[ind].selected = !newList[ind].selected;
    setEduList(newList);
  };

  return (
    <>
      {eduList.map((item) => {
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
  onAddPersonInfo: PropTypes.func,
  eduList: PropTypes.array,
  setEduList: PropTypes.func,
  editEduList: PropTypes.func,
  setIsActive: PropTypes.func,
};

export { EducationList };
