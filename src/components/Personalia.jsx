import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button.jsx";

function Personalia({ onMainPersonalia }) {
  const [show, setShow] = useState(false);

  class Personalia {
    constructor(firstName, lastName, email, phoneNum) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phoneNum = phoneNum;
    }
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setphoneNum] = useState("");

  function onHandlerBtn() {
    setShow(!show);
  }

  function personaliaSubmit(e) {
    e.preventDefault();
  }

  function onSubmit(e) {
    e.preventDefault();
    const newPersonInfo = new Personalia(firstName, lastName, email, phoneNum);
    onMainPersonalia(newPersonInfo);
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

Personalia.propTypes = {
  onMainPersonalia: PropTypes.func,
};

export default Personalia;
