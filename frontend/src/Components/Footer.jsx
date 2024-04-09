import React from "react";
import Board from "../assets/board-contact.png";
import { Linkedin, Instagram, Mail } from "react-feather";
import "../Css/footer.css";

function Footer() {
  return (
    <div className="about-con custom-foot-bg" id="contact">
      <div className="abt-container">
        <div className="text-center">
        <h1 className="text-center mt-0">C O N T A C T || U S</h1>
          <div
            data-aos="flip-down"
            className="content-box small-text container-md container-sm transform transition-transform hover:scale-120"
          >
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
      <div className="madeby text-center font-semibold text-white p-2 bg-[black]">Made by team <a href="https://www.instagram.com/genesis.ise/" rel='noreferrer noopener' target="_blank" className='text-purple-300'>Genesis</a> with ❤️</div>
    </div>
  );
}

export default Footer;
