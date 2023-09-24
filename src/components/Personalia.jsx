import { useState } from "react";
import Button from "./Button.jsx";

function Personalia({ onAddPersonInfo }) {
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setphoneNum] = useState("");

  function onHandlerBtn() {
    setShow(!show);
  }

  function personaliaSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!firstName) {
      alert("Please fill in your name");
      return;
    }
    onAddPersonInfo({ firstName, lastName, email, phoneNum });
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setphoneNum("");
  }

  return (
    <>
      <div className="personaliaTitle">
        <h1>Personalia</h1>
        <Button color={"green"} text={show ? "⌃" : "⌄"} onClick={onHandlerBtn} />
      </div>
      {show && (
        <form onSubmit={onSubmit}>
          <label htmlFor="fName">
            {"First Name "}
            <input
              type="text"
              placeholder="First Name"
              id="fName"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <div>
            <label htmlFor="lName">
              {"Last Name "}
              <input
                type="text"
                placeholder="Last Name"
                id="lName"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="eMail">
              {"E-mail address "}
              <input
                type="email"
                placeholder="john@doe.nl"
                id="eMail"
                autoComplete="off"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              {"Phone Number "}
              <input
                type="number"
                placeholder="+316 555 5555"
                id="phone"
                autoComplete="phone"
                onClick={personaliaSubmit}
                value={phoneNum}
                onChange={(e) => {
                  setphoneNum(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <input type="submit" id="personaliaSubmit" value={"Add"} />
          </div>
        </form>
      )}
    </>
  );
}

export default Personalia;
