import React, { useEffect, useRef } from "react";
import "../Css/sponsor.css";
import basil from "../assets/basil.png";
import anastrat from "../assets/anastrat.png";
import nokia from "../assets/nokia.png";
import skill from "../assets/skill.png";

function Sponsors() {
  const sponsorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = sponsorRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      if (top < screenHeight * 0.75) {
        sponsorRef.current.classList.add("animate");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sponsorpage h-auto" ref={sponsorRef}>
      <div className="custom-sp-bg">
        <h1
          className="text-center pt-5 heading"
          style={{
            letterSpacing: "0.5px",
            filter: "drop-shadow(3px 3px 5px #010101)",
          }}
        >
          SPONSORS
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center for-small pt-40 shadow-custom">
            <div className="col-10 col-sm-4 col-md-4 col-lg-4 sponsor-item">
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
                alt="Skill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
