// import { useState } from "react";
import PropTypes from "prop-types";
// import { v4 as uuidv4 } from "uuid";
// import Button from "./Button.jsx";
import { FormEditEducation } from "./FormEditEducation.jsx";

function EducationList({ eduList, setEduList, editEduList }) {
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
              console.log("After Clicking");
              console.log(item);
              console.log(item.id);
              console.log(item.selected);
            }}
          >
            {item.title}
            {item.selected && <FormEditEducation item={item} editEduList={editEduList} />}
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
};

export { EducationList };
