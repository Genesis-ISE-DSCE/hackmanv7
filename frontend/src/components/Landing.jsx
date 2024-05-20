import React from "react";
import { useNavigate } from 'react-router-dom';
import "../css/landing.css";

function Landing() {
  const navigate = useNavigate();

  const handleRegBut = () => {
    navigate("/register");
  }
  return (
    <div id="land" className="custom-height-land">
        <div className="karma glass">
          <h1 className="title" style={{ filter: "drop-shadow(4px 4px 6px #010101)" }}>
            H A C K M A N
          </h1>
          <div className="dates" >June 8th - 9th</div>
          <button className="tagline-register" onClick={handleRegBut}>R e g i s t e r</button>
        </div>
    </div>
  );
}

export default Landing;