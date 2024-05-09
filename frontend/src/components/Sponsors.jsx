import React from "react";
import "../css/sponsors.css";
import basil from "../assets/basil.png";
import anastrat from "../assets/anastrat.png";
import nokia from "../assets/nokia.png";
import skill from "../assets/skill.png";
import skolar from "../assets/skolar.png";
import unibic from "../assets/unibic.png";
import fin from "../assets/50fin.png";

function Sponsors() {
  return (
    <div className="sponsorpage">
      <div className="">
        <h1 className="sponsors-heading">
          S P O N S O R S
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center for-small pt-40 shadow-custom">
            <div className="col-10 col-sm-3 col-md-4 col-lg-4 sponsor-item">
              <img
                src={anastrat}
                className="img-fluid sponsor-image"
                alt="AnaStrat"
              />
            </div>
            <div className="col-10 col-sm-3 col-md-4 col-lg-4 sponsor-item">
              <img
                src={nokia}
                className="img-fluid sponsor-image"
                alt="Nokia"
              />
            </div>
            <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
              <img
                src={basil}
                className="img-fluid sponsor-image"
                alt="Basil"
              />
            </div>
            <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
              <img
                src={skill}
                className="img-fluid sponsor-image pt-5 sm:pt-3 "
                width={"50%"}
                alt="Skill"
              />
            </div>
            <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
              <img
                src={skolar}
                className="img-fluid sponsor-image pt-5 sm:pt-3"
                width={"60%"}
                alt="Skolar"
              />
            </div>
            <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
              <img
                src={unibic}
                className="img-fluid sponsor-image pt-5 sm:pt-3"
                width={"50%"}
                alt="Unibic"
              />
            </div>
            <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
              <img
                src={fin}
                className="img-fluid sponsor-image pt-5 sm:pt-3"
                width={"80%"}
                alt="Fin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
