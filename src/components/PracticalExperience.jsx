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
      (this.selected = false),
      (this.id = uuidv4());
  }
}

function PracticalExperience({ theMain, onMainPracExp, onEditMainPracExp, setIsActive }) {
  const [work, setWork] = useState([]);

  const [show, setShow] = useState(false);
  const onHandler = () => {
    setShow(!show);
  };

  const [showBtn, setShowBtn] = useState(false);
  const onHandlerBtn = () => {
    setShowBtn(!showBtn);
  };

  function onEditPracExp(item, newItem) {
    const foundIndex = theMain.main.pracExp.findIndex((x) => x.id === item.id);
    const newArr = [...theMain.main.pracExp];
    // console.log("newArr in onEditPracExp");
    // console.log(newArr);

    if (newItem.yourFunction !== "") {
      newArr[foundIndex].yourFunction = newItem.yourFunction;
    }
    if (newItem.yourEmployer !== "") {
      newArr[foundIndex].yourEmployer = newItem.yourEmployer;
    }
    if (newItem.yourLocation !== "") {
      newArr[foundIndex].yourLocation = newItem.yourLocation;
    }
    if (newItem.yourStartDate !== "") {
      newArr[foundIndex].yourStartDate = newItem.yourStartDate;
    }
    if (newItem.yourEndDate !== "") {
      newArr[foundIndex].yourEndDate = newItem.yourEndDate;
    }
    if (newItem.yourDescription !== "") {
      newArr[foundIndex].yourDescription = newItem.yourDescription;
    }
    if (newItem.selected !== "") {
      newArr[foundIndex].selected = newItem.selected;
    }
    console.log(theMain.main.pracExp[foundIndex]);
    console.log(newArr[foundIndex]);
    onEditMainPracExp(theMain.main.pracExp[foundIndex], newArr[foundIndex]);
  }

  return (
    <>
      <div className="practicalExperience">
        <h1>Practical experience</h1>
        <Button color={"green"} text={show ? "⌃" : "⌄"} onClick={onHandler} />
      </div>
      {show && (
        <div>
          <div>
            {theMain.main.pracExp.map((item) => (
              <div
                key={item.id}
                className="workTitle"
                onDoubleClick={() => {
                  item.selected = !item.selected;
                  setIsActive(item.selected);
                }}
              >
                {item.yourFunction}
                {item.selected && (
                  <FormEditPracExp
                    // theMain={theMain}
                    onEditPracExp={onEditPracExp}
                    // editMainPracExp={editMainPracExp}
                    item={item}
                    setIsActive={setIsActive}
                    onHandler={onHandler}
                  />
                )}
              </div>
            ))}
          </div>
          <div>
            {showBtn && (
              <>
                <FormAddPracExp
                  onMainPracExp={onMainPracExp}
                  // onAddPracExpInfo={onAddPracExpInfo}
                  work={work}
                  setWork={setWork}
                  onHandlerBtn={onHandlerBtn}
                />
              </>
            )}
          </div>
          <div className="btnAddExp">
            <Button color={"green"} text={showBtn ? "Cancel" : "Add Work Experience"} onClick={onHandlerBtn} />
          </div>
        </div>
      )}
    </>
  );
}

PracticalExperience.propTypes = {
  theMain: PropTypes.object,
  onMainPracExp: PropTypes.func,
  editMainPracExp: PropTypes.func,
  onEditPracExp: PropTypes.func,
  setIsActive: PropTypes.func,
};

export { PracticalExperience, NewPracExp };
