import React from "react";
import logo from "../images/Mail.png";
import log from "../images/linkedin.png";

export default function Buttons() {
  return (
    <div className="buttons">
      <button className="mail">
        <img src={logo} alt="mail" />
        Email
      </button>
      <button className="linke">
        <img src={log} alt="mail" />
        Linkedin
      </button>
    </div>
  );
}
