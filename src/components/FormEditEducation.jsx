import PropTypes from "prop-types";
import { SubmitBtn } from "./SubmitBtn.jsx";
import DeleteBtn from "./DeleteBtn.jsx";

function FormEditEducation({ item, editEduList, changeSelected, setIsActive, onEditMainEducation }) {
  let schoolValue = "";
  let titleValue = "";
  let dateValue = "";

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editEduList(item, titleValue, schoolValue, dateValue);
          changeSelected(item);
          setIsActive(false);
        }}
      >
        <div>
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
        </div>
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
        <div className="deleteDiv">
          <SubmitBtn typeBtn="submit" classNameBtn={"btn"} text={"Edit"} />
          <DeleteBtn item={item} onEditPracExp={onEditMainEducation} />
        </div>
      </form>
    </>
  );
}

FormEditEducation.propTypes = {
  onAddEducationInfo: PropTypes.func,
  item: PropTypes.object,
  editEduList: PropTypes.func,
  changeSelected: PropTypes.func,
  setIsActive: PropTypes.func,
  onEditMainEducation: PropTypes.func,
};

export { FormEditEducation };
