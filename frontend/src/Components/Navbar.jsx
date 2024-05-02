import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/navbar.css";
import User from "../assets/user-profile.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container mx-15px">
        <div className="">
          <Link to="/" className="nav-heading">
            <span style={{ fontFamily: "Karmatic", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>Hackman</span>
          </Link>
        </div>
        
        <div className="burger-menu" onClick={toggleMobileMenu}>
          <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
          <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
          <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`navbar-nav ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/#land" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/#faqs" className="nav-link">FAQs</a>
          </li>
          <li className="nav-item">
            <a href="/#schedule" className="nav-link">Schedule</a>
          </li>
          <li className="nav-item">
            <a href="/#gallery" className="nav-link">Gallery</a>
          </li>
          <li className="nav-item">
            <Link to="/registration" className="nav-link">Register</Link>
          </li>

          {/* Profile Icon for Mobile */}
          <li className="nav-item mobile-profile-icon">
            <Link to="/profile">
              <img src={User} alt="Profile" className="profile-img" />
            </Link>
          </li>
        </ul>

        {/* Profile Icon for PC */}
        <div className="profile-icon">
          <Link to="/profile">
            <img src={User} alt="Profile" className="profile-img" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
