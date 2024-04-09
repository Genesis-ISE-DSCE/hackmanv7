import React, { useEffect } from "react";
import "../Css/About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import img from "../assets/Ays.jpeg";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <div id="about">
      <div className="custom-height-abt about-con custom-abt-bg">
        <div className="abt-container logo" data-aos="slide-up">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <h1
                  id="about"
                  className="heading"
                  style={{ letterSpacing: "0.5px", fontFamily: "karmatic", filter: "drop-shadow(3px 3px 5px #010101)" }}
                >
                  ABOUT
                </h1>
              </div>
              <div className="col-12 text-center">
                <h1 className="heading">HACKMAN V7</h1>
              </div>
              <div className="col-12 text-center">
                <h4 className="dates">Date : June 8th - 9th</h4>
              </div>
              <div className="col-md-6 col-12 text-center content-box abt-box">
                <div className="text-container">
                  <p
                    className="p-3 small-text"
                    style={{ color: "black", letterSpacing: "0.5px", wordSpacing: "1px" }}
                  >
                    HACKMAN v.7 is an Inter College, extravagant 24-hour Hackathon,
                    hosted by the Department of ISE, Dayananda Sagar College of
                    Engineering (DSCE), Bangalore. We give the brightest of minds a
                    chance to brainstorm as a team and come up with unique solutions,
                    code it out and solve some of the pressing problems of our
                    society. Over the first 4 versions we have seen some brilliant
                    projects and we challenge you to top them off with your
                    Out-of-the-box ideas. “You can't solve a problem on the same level
                    that it was created. You have to rise above it to the next level.”
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 text-center mt-md-0 mt-4">
                <img
                  src={img}
                  alt="Ays"
                  style={{ maxWidth: "50%", maxHeight:"50%"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
