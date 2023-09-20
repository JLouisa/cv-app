import { useState } from "react";

function EducationInfo() {
  const [show, setShow] = useState(false);

  const onHandlerBtn = () => {
    setShow(!show);
  };
  return (
    <section>
      <div className="educationTitle">
        <h1>Education</h1>
        <button onClick={onHandlerBtn}>v</button>
      </div>
      {show && (
        <form>
          <label htmlFor="fName">
            {"First Name "}
            <input type="text" placeholder="First Name" id="fName" autoComplete="given-name" />
          </label>
          <div>
            <label htmlFor="lName">
              {"Last Name "}
              <input type="text" placeholder="Last Name" id="lName" autoComplete="family-name" />
            </label>
          </div>
          <div>
            <label htmlFor="eMail">
              {"E-mail address "}
              <input type="email" placeholder="john@doe.nl" id="eMail" autoComplete="off" />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              {"Phone Number "}
              <input type="number" placeholder="+316 555 5555" id="phone" autoComplete="phone" />
            </label>
          </div>
        </form>
      )}
    </section>
  );
}

export default EducationInfo;
