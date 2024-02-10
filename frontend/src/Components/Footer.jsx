import React from "react";
import "../App.css";
import Board from "../assets/board-contact.png";

import { Linkedin, Instagram, Mail } from "react-feather";


import CityScape from "../assets/cityscape-3.png";
import "../Css/About.css";
function Footer() {
  return (
    <div
      className="about-con custom-height"
      id="contact"
      style={{
        backgroundImage: `url(${CityScape})`,
        color: "white",
        backgroundSize: "cover",
      }}
    >
      <div className="abt-container vh-110">
        <div className="text-center">
          <img
            src={Board}
            alt="board"
            className="img-fluid boardd"
            style={{ width: "20rem" }}
          />
          <h1 className="heading pt-5" style={{ letterSpacing: "0.5px" }}>
            HACKMAN V7
          </h1>
          <h4

            className="dates pb-4 mb-4"
            // style={{ color: "black", letterSpacing: "1px" }}
          >
            Date : June 24th - 25th
          </h4>
          <div className="content-box small-text container-md container-sm">
            <div>
              <h2
                style={{
                  fontFamily: "pixeloidsans-bold",
                  color: "black",
                  paddingTop: "20px",
                }}
              >
                Reach Out To Us
              </h2>
            </div>

            <div
              className="small-text"
              style={{ color: "black", fontSize: "1.3em" }}
            >
              <ul style={{ listStyle: "none" }}>
                <li>

                  <p style={{ paddingRight: "20px" }}>
                    Gagan S: <a href="tel:">+91 9008243280</a>
                  </p>
                </li>

                <li>
                  <p>
                    Tarana Shetty: <a href="tel:">+91 7483408791</a>
                  </p>
                </li>
              </ul>
            </div>
            <h2 style={{ fontFamily: "pixeloidsans-bold", color: "black" }}>
              Connect with Us On
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "5px",
              }}
            >
              <div style={{ margin: "0 10px" }}>
                <a
                  style={{ color: "black" }}
                  href="https://www.instagram.com/wearehackman/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Instagram size={50} />
                </a>
              </div>
              <div style={{ margin: "0 10px" }}>
                <a
                  style={{ color: "black" }}
                  href="https://www.linkedin.com/company/wearehackman/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Linkedin size={50} />
                </a>
              </div>
              <div style={{ margin: "0 10px" }}>
                <a
                  style={{ color: "black" }}
                  href="mailto:genesis.hackman@gmail.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Mail size={50} />
                </a>
              </div>
            </div>
            <div style={{ color: "black", paddingTop: "20px" }}>
              <p>
                © 2024 Hackman. All rights Reserved <br />
                Made by team{" "}
                <a
                  href="https://www.instagram.com/genesis.ise/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Genesis
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Footer;
