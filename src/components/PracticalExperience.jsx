import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button.jsx";
import { FormEditPracExp } from "./FormEditPracExp.jsx";
import { FormAddPracExp } from "./FormAddPracExp.jsx";

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
function PracticalExperience({ onAddPracExpInfo, onEditPracExp }) {
  const [show, setShow] = useState(false);
  const [work, setWork] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const editShowExp = () => {
    setIsActive(!isActive);
  };
  const onHandler = () => {
    setShow(!show);
  };

  const [showBtn, setShowBtn] = useState(false);
  const onHandlerBtn = () => {
    setShowBtn(!showBtn);
  };

  // const [yourFunction, setYourFunction] = useState("");
  // const [yourEmployer, setYourEmployer] = useState("");
  // const [yourLocation, setYourLocation] = useState("");
  // const [yourStartDate, setYourStartDate] = useState("");
  // const [yourEndDate, setYourEndDate] = useState("");
  // const [yourDescription, setYourDescription] = useState("");

  // function resetForms() {
  //   setYourFunction("");
  //   setYourEmployer("");
  //   setYourLocation("");
  //   setYourStartDate("");
  //   setYourEndDate("");
  //   setYourDescription("");
  // }

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
                  // setIsActive(true);
                  editShowExp();
                }}
              >
                {item.yourFunction}
                {isActive && (
                  <FormEditPracExp
                    onEditPracExp={onEditPracExp}
                    item={item}
                    setIsActive={setIsActive}
                    onHandler={onHandler}
                  />
                )}
              </p>
            ))}
          </div>
          <div>
            {showBtn && (
              <>
                <FormAddPracExp
                  onAddPracExpInfo={onAddPracExpInfo}
                  work={work}
                  setWork={setWork}
                  onHandlerBtn={onHandlerBtn}
                />
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

export { PracticalExperience, NewPracExp };
