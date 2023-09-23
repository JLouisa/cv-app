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
      name: "Jonathan",
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
      <div className="personaliaTitle">
        <h1>Practical experience</h1>
        <Button color={"green"} text={"⌄"} onClick={onHandler} />
      </div>
      {show && (
        <div>
          <Button color={"green"} text={"add Work Experience"} onClick={onHandlerBtn} />
          <div>
            {showBtn && (
              <div>
                <Button color={"green"} text={"Add"} onClick={addWork} />
                <p>
                  <ul>
                    {work.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </p>
                <form>
                  <label htmlFor="addWorkExperience">
                    {"Add work Experience"}
                    <input type="text" placeholder="Add" id="fName" autoComplete="off" />
                  </label>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default PracticalExperience;
