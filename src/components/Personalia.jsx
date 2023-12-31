import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Button from "./Button.jsx";
import { SubmitBtn } from "./SubmitBtn.jsx";

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

  useEffect(() => {
    const loadMainCv = JSON.parse(localStorage.getItem("mainCV"));
    if (loadMainCv !== null) {
      setFirstName(loadMainCv.main.personalia.firstName);
      setLastName(loadMainCv.main.personalia.lastName);
      setEmail(loadMainCv.main.personalia.email);
      setphoneNum(loadMainCv.main.personalia.phoneNum);
    }
  }, []);

  function onHandlerBtn() {
    setShow(!show);
  }

  function personaliaSubmit(e) {
    e.preventDefault();
  }

  function onSubmit() {
    const newPersonInfo = new Personalia(firstName, lastName, email, phoneNum);
    onMainPersonalia(newPersonInfo);
  }

  return (
    <>
      <div className="personaliaTitle">
        <h1>Personalia</h1>
        <Button text={show ? "⌃" : "⌄"} onClick={onHandlerBtn} />
      </div>
      <div className="personaliaForm">
        {show && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onHandlerBtn();
              onSubmit();
            }}
          >
            <div>
              <label htmlFor="fName">{"First Name "}</label>
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
            </div>
            <div>
              <label htmlFor="lName">{"Last Name "}</label>
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
            </div>
            <div>
              <label htmlFor="eMail">{"E-mail address "}</label>
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
            </div>
            <div>
              <label htmlFor="phone">{"Phone Number "}</label>
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
            </div>
            <SubmitBtn typeBtn="submit" classNameBtn={"btn"} text={"Add"} />
          </form>
        )}
      </div>
    </>
  );
}

Personalia.propTypes = {
  onMainPersonalia: PropTypes.func,
};

export { Personalia };
