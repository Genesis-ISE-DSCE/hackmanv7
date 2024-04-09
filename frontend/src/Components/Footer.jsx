import React from "react";
import { Linkedin, Instagram, Mail } from "react-feather";
import "../Css/footer.css";

function Footer() {
  return (
    <div className="about-con custom-foot-bg" id="contact">
      <div className="text-center">
        <h1 className="text-center title-sub">C O N T A C T || U S</h1>
          <div data-aos="flip-down" className="content-box">
            <div className="reachout-con">
              <h2 className="connectHeading">
                Reach out to us
              </h2>
              <div className="num-link">
                <p>Gagan : <a className="doc-link" href="">+91 9008243280</a></p>
                <p>Tarana : <a className="doc-link" href="">+91 9008243280</a></p>
              </div>
            </div>
            <h2 className="connectHeading">
              Connect with us
            </h2>
            <div className="links-box">
              <div className="social-links">
                <a
                  href="https://www.instagram.com/wearehackman/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Instagram size={50} />
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/company/wearehackman/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Linkedin size={50} />
                </a>
              </div>

              <div className="social-links">
                <a
                  href="mailto:genesis.hackman@gmail.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Mail size={50} />
                </a>
              </div>
            </div>
            <div className="documents">
              <p className="doc-link"><a href="">Code of Conduct</a></p>
              <p className="doc-link"><a href="">Terms and Conditions</a></p>
              <p className="doc-link"><a href="">Instructions</a></p>
            </div>
          </div>
        </div>
      <div className="madeby">Made by team <a href="https://www.instagram.com/genesis.ise/" rel='noreferrer noopener' target="_blank" className='genesis-link'>Genesis</a> with <span className="heart">❤️</span></div>
    </div>
  );
}

export default Footer;



{/* <div>
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
              <p>
                Gagan S: <a href="tel:">+91 9008243280</a>
              </p>
              <p>
                Tarana Shetty: <a href="tel:">+91 7483408791</a>
              </p>
            </div> */}