import React from "react";
import "./styles.css";
import Headshot from "./Headshot";
import Buttons from "./Buttons";
import About from "./About";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <Headshot />
      <h2>Avishek Panta</h2>
      <h3>Frontend Developer</h3>
      <h5>avishekpanta.com.np</h5>
      <Buttons />
      <About />
      <Footer />
    </div>
  );
}
