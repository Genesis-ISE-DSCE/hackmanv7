import React from "react";
import "../css/landing.css";

function Landing() {
  return (
    <div id="land" className="custom-height-land">
        <div className="karma glass">
          <h1 className="title" style={{ filter: "drop-shadow(4px 4px 6px #010101)" }}>
            H A C K M A N
          </h1>
          <div className="dates" >June 8th - 9th</div>
        </div>
    </div>
  );
}

export default Landing;