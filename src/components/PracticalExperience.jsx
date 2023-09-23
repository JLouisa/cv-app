import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button.jsx";

function PracticalExperience() {
  const workList = [
    {
      id: uuidv4(),
      name: "Jonathan",
      last: "Louisa",
    },
    {
      id: uuidv4(),
      name: "Adam",
      last: "Thefirst",
    },
    {
      id: uuidv4(),
      name: "Eve",
      last: "Thefirst",
    },
  ];

  const [showBtn, setShowBtn] = useState(false);
  const [show, setShow] = useState(false);
  const [work, setWork] = useState(workList);

  const addWork = () => {
    setWork([
      ...work,
      {
        id: uuidv4(),
        name: "Noa",
        last: "Ben Adam",
      },
    ]);
    console.log(work);
  };

  const onHandlerBtn = () => {
    setShowBtn(!showBtn);
  };

  const onHandler = () => {
    setShow(!show);
  };

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
              <p key={item.id} className="workTitle">
                {item.name}
              </p>
            ))}
          </div>
          <div>
            {showBtn && (
              <>
                <form>
                  <label htmlFor="addWorkExperience">
                    {"Add work Experience"}
                    <input type="text" placeholder="Add" id="addWorkExperience" autoComplete="off" />
                  </label>
                </form>
                <Button color={"green"} text={"Add"} onClick={addWork} />
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

export default PracticalExperience;
