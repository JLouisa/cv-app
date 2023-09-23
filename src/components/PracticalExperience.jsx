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
  ];

  const workList2 = [
    {
      id: uuidv4(),
      name: "Eve",
      last: "Thefirst",
    },
  ];

  function renderlist(list) {
    return list.map((work) => <li key={work.id}>{work}</li>);
  }

  const workListRender = workList.map((work) => <li key={work.id}>{work}</li>);
  const [showBtn, setShowBtn] = useState(false);
  const [show, setShow] = useState(false);
  let [testArr, setTestArr] = useState(workListRender);
  console.log(testArr);

  const addWork = (work) => {
    workList.push(work);
    setTestArr(testArr.push(renderlist(workList)));
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
          <ul>
            {testArr.map((work) => (
              <li key={work.id}>
                {work.name}
                {work.last}
              </li>
            ))}
          </ul>
          <Button color={"green"} text={"add Work Experience"} onClick={onHandlerBtn} />
          <div>
            {showBtn && (
              <div>
                <Button color={"green"} text={"Add"} onClick={onHandlerBtn} />
                {/* <form>
                  <label htmlFor="addWorkExperience">
                    {"Add work Experience"}
                    <input type="text" placeholder="Add" id="fName" autoComplete="off" />
                  </label>
                </form> */}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default PracticalExperience;
