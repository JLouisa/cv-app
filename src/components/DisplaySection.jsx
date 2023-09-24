import { useState } from "react";

function DisplaySection({ firstName, lastName, email, phoneNum }) {
  const [displayFirstName, setDisplayFirstName] = useState("No info provided");
  const [displayLastName, setDisplayLastName] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayPhoneNum, setDisplayPhoneNum] = useState("");

  // function displayinfo() {
  setDisplayFirstName(firstName);
  setDisplayLastName(lastName);
  setDisplayEmail(email);
  setDisplayPhoneNum(phoneNum);
  // }

  return (
    <section>
      <h1>Personalia Information</h1>
      <p>{displayFirstName}</p>
      <p>{displayLastName}</p>
      <p>{displayEmail}</p>
      <p>{displayPhoneNum}</p>
    </section>
  );
}

export default DisplaySection;
