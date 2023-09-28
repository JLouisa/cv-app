import PropTypes from "prop-types";
import { useState } from "react";
import { SubmitBtn } from "./SubmitBtn.jsx";
import { NewPracExp } from "./PracticalExperience.jsx";
import DeleteBtn from "./DeleteBtn.jsx";

function FormEditPracExp({ onEditPracExp, item, setIsActive }) {
  const [yourFunction, setYourFunction] = useState("");
  const [yourEmployer, setYourEmployer] = useState("");
  const [yourLocation, setYourLocation] = useState("");
  const [yourStartDate, setYourStartDate] = useState("");
  const [yourEndDate, setYourEndDate] = useState("");
  const [yourDescription, setYourDescription] = useState("");

  const onEdit = (item) => {
    const newItem = new NewPracExp(
      yourFunction,
      yourEmployer,
      yourLocation,
      yourStartDate,
      yourEndDate,
      yourDescription
    );
    onEditPracExp(item, newItem);
    setIsActive(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onEdit(item);
      }}
    >
      <div>
        <label htmlFor="editFunction">
          {"Function"}
          <input
            type="text"
            id="editFunction"
            defaultValue={item.yourFunction}
            onChange={(e) => {
              setYourFunction(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="editEmployer">
          {"Employer"}
          <input
            type="text"
            id="editEmployer"
            defaultValue={item.yourEmployer}
            onChange={(e) => {
              setYourEmployer(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="editLocation">
          {"Location"}
          <input
            type="text"
            id="editLocation"
            defaultValue={item.yourLocation}
            onChange={(e) => {
              setYourLocation(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="editStartDate">
          {"Start Date"}
          <input
            type="month"
            id="editStartDate"
            defaultValue={item.yourStartDate}
            onChange={(e) => {
              setYourStartDate(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="editEndDate">
          {"End Date"}
          <input
            type="month"
            id="editEndDate"
            defaultValue={item.yourEndDate}
            onChange={(e) => {
              setYourEndDate(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="editDescription">
          {"Description"}
          <textarea
            type="text"
            id="editDescription"
            rows="33"
            cols="33"
            defaultValue={item.yourDescription}
            onChange={(e) => {
              setYourDescription(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="deleteDiv">
        <div className="">
          <SubmitBtn typeBtn="submit" classNameBtn={"btn"} text={"Edit"} />
        </div>
        <DeleteBtn item={item} onEditPracExp={onEditPracExp} />
      </div>
    </form>
  );
}

FormEditPracExp.propTypes = {
  onEditPracExp: PropTypes.func,
  item: PropTypes.object,
  setIsActive: PropTypes.func,
};

export { FormEditPracExp };
