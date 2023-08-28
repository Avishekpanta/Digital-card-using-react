import React from "react";
import logo from "../images/Mail.png";
import log from "../images/linkedin.png";

export default function Footer() {
  return (
    <div className="socials">
      <a className="" href="google.com">
        <img src={logo} alt="mail" />
      </a>
      <a className="" href="google.com">
        <img src={log} alt="mail" />
      </a>
      <a className="" href="google.com">
        <img src={log} alt="mail" />
      </a>
      <a className="" href="google.com">
        <img src={log} alt="mail" />
      </a>
    </div>
  );
}
