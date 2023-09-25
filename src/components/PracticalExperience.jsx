import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button.jsx";

function PracticalExperience({ onAddPracExpInfo, onEditPracExp }) {
  const [showBtn, setShowBtn] = useState(false);
  const [show, setShow] = useState(false);
  const [work, setWork] = useState([]);

  const onHandlerBtn = () => {
    setShowBtn(!showBtn);
  };

  const onHandler = () => {
    setShow(!show);
  };

  class NewPracExp {
    constructor(yourFunction, yourEmployer, yourLocation, yourStartDate, yourEndDate, yourDescription) {
      (this.yourFunction = yourFunction),
        (this.yourEmployer = yourEmployer),
        (this.yourLocation = yourLocation),
        (this.yourStartDate = yourStartDate),
        (this.yourEndDate = yourEndDate),
        (this.yourDescription = yourDescription),
        (this.id = uuidv4());
    }
  }

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

    onAddPracExpInfo(newItem);
    setWork([...work, newItem]);
    resetForms();
    onHandlerBtn();
  };

  function resetForms() {
    setYourFunction("");
    setYourEmployer("");
    setYourLocation("");
    setYourStartDate("");
    setYourEndDate("");
    setYourDescription("");
  }

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
    resetForms();
    setIsActive(false);
  };

  const [isActive, setIsActive] = useState(false);
  // const editShowExp = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <>
      <div className="practicalExperience">
        <h1>Practical experience</h1>
        <Button color={"green"} text={show ? "⌃" : "⌄"} onClick={onHandler} />
      </div>
      {show && (
        <div>
          <div>
            {work.map((item) => (
              <p
                key={item.id}
                className="workTitle"
                onDoubleClick={() => {
                  console.log(item);
                  console.log(item.id);
                  setIsActive(true);
                }}
              >
                {item.yourFunction}
                {isActive && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      onEdit(item);
                    }}
                  >
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
                    <label htmlFor="editDescription">
                      {"Description"}
                      <textarea
                        type="text"
                        id="editDescription"
                        rows="5"
                        cols="33"
                        defaultValue={item.yourDescription}
                        onChange={(e) => {
                          setYourDescription(e.target.value);
                        }}
                      />
                    </label>
                    <div>
                      <input type="submit" value={"Edit"} />
                      <Button
                        text="Cancel"
                        onClick={() => {
                          setIsActive(false);
                        }}
                      />
                    </div>
                  </form>
                )}
              </p>
            ))}
          </div>
          <div>
            {showBtn && (
              <>
                <form
                  id="pracExpFormAdd"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                    document.getElementById("pracExpFormAdd").reset();
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
                      rows="5"
                      cols="33"
                      value={yourDescription}
                      onChange={(e) => {
                        setYourDescription(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <input type="submit" value={"Add"} />
                  </div>
                </form>
              </>
            )}
          </div>
          <div className="btnAddExp">
            <Button color={"green"} text={"Add Work Experience"} onClick={onHandlerBtn} />
          </div>
        </div>
      )}
    </>
  );
}

PracticalExperience.propTypes = {
  onAddPracExpInfo: PropTypes.func,
  onEditPracExp: PropTypes.func,
};

export default PracticalExperience;
