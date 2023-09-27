import PropTypes from "prop-types";
import { EditBtn } from "./EditBtn.jsx";
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
          <div className="workTitle" key={item.id}>
            <div className="educationTitle">
              {item.title}
              <EditBtn item={item} setIsActive={setIsActive} />
            </div>
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
