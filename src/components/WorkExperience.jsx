import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function WorkExperience() {
  const workList = ["Hello", "World"];
  const workListRender = workList.map((work) => <li key={uuidv4()}>{work}</li>);
  const [showBtn, setShowBtn] = useState(false);
  const [show, setShow] = useState(false);
  let [testArr, setTestArr] = useState(workListRender);

  const addWork = (work) => {
    let change = [...workListRender];
    let add = <li key={uuidv4()}>{work}</li>;
    change.push(add);
    setTestArr(change);
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
        <button onClick={onHandler}>v</button>
      </div>
      {show && (
        <div>
          <ul>{testArr}</ul>
          <button onClick={onHandlerBtn}>Add Work Experience</button>
          <div>
            {showBtn && (
              <div>
                <button onClick={addWork}>Add</button>
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

export default WorkExperience;
