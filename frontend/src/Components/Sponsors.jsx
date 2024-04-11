import React from "react";
import "../Css/sponsor.css";
import basil from "../assets/basil.png";
import anastrat from "../assets/anastrat.png";
import nokia from "../assets/nokia.png";
import azad from "../assets/azad.png";
import skill from "../assets/skill.png";
import skolar from "../assets/skolar.png";

function Sponsors() {
  return (
    <div className="sponsorpage">
      <div className="title-sub custom-sp-bg">
        <h1
          className="text-center"
        >
          S P O N S O R S
        </h1>
      </div>

      <div className="logo-container">
        bbwnxw x w w
      </div>

      <div className="sp-containerz " data-aos="slide-up">
        <div className="row">
          <img
            src={anastrat}
            alt="anastrat"
            className="with-margin"
            style={{ maxWidth: "100%", height: "auto", width: "20rem" }}
          />
          <img
            src={basil}
            alt="basil"
            className="with-margin"
            style={{ maxWidth: "100%", height: "auto", width: "15em" }}
          />
        </div>

        <div className="">
          <img
            src={nokia}
            alt="nokia"
            className="with-margin"
            style={{ maxWidth: "100%", height: "auto", width: "15em" }}
          />
          <img
            src={azad}
            alt="azad"
            className="with-margin"
            style={{ maxWidth: "100%", height: "auto", width: "15em" }}
          />
          <img
            src={skill}
            alt="skill"
            className="with-margin"
            style={{ maxWidth: "100%", height: "auto", width: "15em" }}
          />
        </div>
        </div>
    </div>
  );
}

export default Sponsors;
