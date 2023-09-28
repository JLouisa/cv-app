import PropTypes from "prop-types";
import { SubmitBtn } from "./SubmitBtn.jsx";
import { useState } from "react";
import { NewPracExp } from "./PracticalExperience.jsx";

function FormAddPracExp({ onMainPracExp, work, setWork, onHandlerBtn }) {
  const [yourFunction, setYourFunction] = useState("");
  const [yourEmployer, setYourEmployer] = useState("");
  const [yourLocation, setYourLocation] = useState("");
  const [yourStartDate, setYourStartDate] = useState("");
  const [yourEndDate, setYourEndDate] = useState("");
  const [yourDescription, setYourDescription] = useState("");

  const onSubmit = () => {
    const newItem = new NewPracExp(
      yourFunction,
      yourEmployer,
      yourLocation,
      yourStartDate,
      yourEndDate,
      yourDescription
    );

    onMainPracExp(newItem);

    setWork([...work, newItem]);
    onHandlerBtn();
  };

  return (
    <form
      id="pracExpFormAdd"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div>
        <label htmlFor="function">
          {"Function"}
          <input
            type="text"
            placeholder="Function"
            id="function"
            autoComplete="off"
            value={yourFunction}
            onChange={(e) => {
              setYourFunction(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="employer">
          {"Employer"}
          <input
            type="text"
            placeholder="Employer"
            id="employer"
            autoComplete="off"
            value={yourEmployer}
            onChange={(e) => {
              setYourEmployer(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="location">
          {"Location"}
          <input
            type="text"
            placeholder="Location"
            id="location"
            autoComplete="off"
            value={yourLocation}
            onChange={(e) => {
              setYourLocation(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="startDate">
          {"Start Date"}
          <input
            type="month"
            id="startDate"
            autoComplete="off"
            value={yourStartDate}
            onChange={(e) => {
              setYourStartDate(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="endDate">
          {"End Date"}
          <input
            type="month"
            id="endDate"
            autoComplete="off"
            value={yourEndDate}
            onChange={(e) => {
              setYourEndDate(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">{"Description"}</label>
        <textarea
          id="description"
          name="description"
          rows="33"
          cols="33"
          value={yourDescription}
          onChange={(e) => {
            setYourDescription(e.target.value);
          }}
        />
      </div>
      <SubmitBtn typeBtn="submit" classNameBtn={"btn"} text={"Add"} />
    </form>
  );
}

FormAddPracExp.propTypes = {
  onMainPracExp: PropTypes.func,
  item: PropTypes.array,
  setWork: PropTypes.func,
  onHandlerBtn: PropTypes.func,
  work: PropTypes.array,
};

export { FormAddPracExp };
