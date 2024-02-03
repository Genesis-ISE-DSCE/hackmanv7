import React from "react";
import "../App.css";
import Board from "../assets/board-about.png";
import CityScape from "../assets/cityscape-3.png";

function About() {
  return (
    <div className="about-con">
      <div
        className="abt-container vh-100"
        style={{
          backgroundImage: `url(${CityScape})`,
          color: "white",
          backgroundSize: "cover",
          height: "auto",
        }}
      >
        <div className="text-center">
          <img
            src={Board}
            alt="board"
            className="img-fluid"
            style={{ width: "20rem" }}
          />
          <h1
            className="heading pt-5"
            style={{ letterSpacing: "0.5px" }}
          >
            HACKMAN V7
          </h1>
          <h4
            className="dates pb-4"
            style={{ color: "black", letterSpacing: "1px" }}
          >
            Date : June 24th - 25th
          </h4>
          <div className="content-box container-md container-sm">
              <p className="p-3 small-text" style={{color: "black", letterSpacing:"0.5px",wordSpacing:"1px"}}>
              HackMan v.7 is an Inter College, extravagant 24-hour Hackathon,
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
      </div>
    </div>
  );
}

export default About;
