import React from "react";
import "../css/about.css";

function About() {
  return (
    <div id="about">
      <div className="custom-height-abt about-con custom-abt-bg">
        <div className="abt-container" >
              <div className="col-12 text-center">
                <h1
                  id="about"
                  className="title-sub"
                  style={{ fontFamily: "karmatic", filter: "drop-shadow(3px 3px 5px #010101)" }}
                >
                  A B O U T
                </h1>
              </div>
                <div className="content-boxx abt-box">
                  <div className="text-container">
                    <div className="col-12 text-center">
                      <h1 className="heading-txt">H A C K M A N || v7</h1>
                    </div>
                    <div className="col-12 text-center">
                      <p className="tagline">From bits to bytes, code your way to new heights.</p>
                    </div>
                    <div className="col-12 text-center">
                      <p className="dates-txt">Date : June 8th - 9th</p>
                    </div>
                    <p className="main-content-txt">
                      HACKMAN v.7 is an Inter College, extravagant 24-hour Hackathon,
                      hosted by the Department of ISE, Dayananda Sagar College of
                      Engineering (DSCE), Bangalore. We give the brightest of minds a
                      chance to brainstorm as a team and come up with unique solutions,
                      code it out and solve some of the pressing problems of our
                      society. Over the first six versions we have seen some brilliant
                      projects and we challenge you to top them off with your
                      Out-of-the-box ideas. “You can't solve a problem on the same level
                      that it was created. You have to rise above it to the next level.”
                    </p>
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
}

export default About;
