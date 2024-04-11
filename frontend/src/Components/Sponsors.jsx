import React from "react";
import "../Css/sponsor.css";
import basil from "../assets/basil.png";
import anastrat from "../assets/anastrat.png";
import nokia from "../assets/nokia.png";
import azad from "../assets/azad.png";
import skill from "../assets/skill.png";
// import skolar from "../assets/skolar.png";

function Sponsors() {
  return (
    <div className="sponsorpage">
      <div className="custom-sp-bg">
        <h1
          className="text-center pt-4"
          style={{ letterSpacing: "0.5px", color: "white" ,filter: "drop-shadow(3px 3px 5px #010101)",fontFamily:"karmatic"}}
        >
          SPONSORS
        </h1>

        <div className="d-flex justify-content-center align-items-center pt-2 name" >
          <div className="d-flex row justify-content-center align-items-center sps shadow-custom gap-3">
            <img
              src={anastrat}
              alt="anastrat"
              className="img-fluid with-margin"
              style={{ maxWidth: "100%", height: "auto", width: "18rem" }}
            />
            <img
              src={basil}
              alt="basil"
              className="img-fluid with-margin"
              style={{ width: "14rem" }}
            />
            
            <img
              src={nokia}
              alt="nokia"
              className="img-fluid with-margin"
              style={{ maxWidth: "100%", height: "auto", width: "18em" }}
            />

            <img
              src={azad}
              alt="azad"
              className="img-fluid with-margin"
              style={{ maxWidth: "100%", height: "auto", width: "18em" }}
            />
            <img
              src={skill}
              alt="skill"
              className="img-fluid with-margin"
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "18em",
                marginBottom: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
