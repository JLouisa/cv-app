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

  // const addWork = () => {
  //   setWork([
  //     ...work,
  //     {
  //       id: uuidv4(),
  //       name: "Noa",
  //       last: "Ben Adam",
  //     },
  //   ]);
  //   console.log(work);
  // };

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
                  <div>
                    <label htmlFor="function">
                      {"Function"}
                      <input type="text" placeholder="Function" id="function" autoComplete="off" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="employer">
                      {"Employer"}
                      <input type="text" placeholder="Employer" id="employer" autoComplete="off" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="location">
                      {"Location"}
                      <input type="text" placeholder="Location" id="location" autoComplete="off" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="startDate">
                      {"Start Date"}
                      <input type="date" id="startDate" autoComplete="off" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="endDate">
                      {"End Date"}
                      <input type="date" id="endDate" autoComplete="off" />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="description">{"Description"}</label>
                    <textarea
                      id="description"
                      name="description"
                      defaultValue="This is a description."
                      rows="5"
                      cols="33"
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

export default PracticalExperience;
