import React from "react";
import { Link } from "react-router-dom";
import "../Css/About.css";
import User from "../assets/user-profile.png";
import "../App.css";

function Navbar() {
  const handleClick = (item) => {
    const element = document.getElementById("item");
    if (item === "home") {
      window.location.href = "/"; // Redirect to the home page
    }
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed-top navbar navbar-expand-lg d-flex align-items-center actual-nav pb-3 pt-2 ">
      <div className="head">
        <a href="/">
          <div
            className="heading fs-4 mx-3"
            style={{ filter: "drop-shadow(3px 3px 5px #010101)" }}
          >
            Hackman
          </div>
        </a>
      </div>
      <button
        className="navbar-toggler my-2 mx-3"
        style={{ backgroundColor: "#d6d5d2" }}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center text-center flex "
        id="navbarNav"
      >
        <ul
          className="list-unstyled d-flex flex-column align-items-center flex-md-row fs-5 gap-4 gap-md-2 gap-lg-2 my-3 mt-4 "
          style={{ fontFamily: "pixeloidsansbold" }}
        >
          <li className="mx-2 ">
            <a
              className="navbar-ul"
              href="/#land"
              onClick={() => handleClick("landing")}
              style={{ filter: "drop-shadow(3px 3px 5px #010101)" }}
            >
              Home
            </a>
          </li>
          <li className="mx-2">
            <a
              className="navbar-ul"
              href="/#about"
              onClick={() => handleClick("about")}
              style={{ filter: "drop-shadow(3px 3px 5px #010101)" }}
            >
              About
            </a>
          </li>
          {/* <li className="mx-2">
                <a className="navbar-ul" href="/#contact" onClick={() => handleClick("contact")}>Contact</a>
              </li> */}
          <li className="mx-2 ">
            <a
              className="navbar-ul "
              href="/#faqs"
              onClick={() => handleClick("faqs")}
              style={{ filter: "drop-shadow(3px 3px 5px #010101)" }}
            >
              Faqs
            </a>
          </li>
          <li className="mx-2">
            <a
              className="navbar-ul"
              href="/#schedule"
              onClick={() => handleClick("schedule")}
              style={{ filter: "drop-shadow(3px 3px 5px #010101)" }}
            >
              Schedule
            </a>
          </li>
          <li className="mx-2">
            <Link
              className="navbar-ul"
              to="/registration"
              onClick={() => handleClick("registration")}
              style={{ filter: "drop-shadow(3px 3px 5px #010101)" }}
            >
              Register
            </Link>
          </li>
          <li className="mx-2">
            <Link
              className="navbar-ul"
              to="/profile"
              onClick={() => handleClick("profile")}
            >
              <img
                className="profilee"
                src={User}
                alt="profile-pic"
                style={{
                  width: "45px",
                  height: "45px",
                  filter: "drop-shadow(3px 3px 5px #010101)",
                }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
