import React from "react";
import { Linkedin, Instagram, Mail } from "react-feather";
import "../css/footer.css";
const coc = require("../assets/docs/CoC-Hackman.pdf");
const tc = require("../assets/docs/T&C-Hackman.pdf");
const ins = require("../assets/docs/Hackman-Registration-Instructions.pdf");

function Footer() {
    return (
        <div id="footer">
            <div className="karmaReal glass">
                <h1 className="title-foot" style={{ filter: "drop-shadow(4px 4px 6px #010101)" }}>
                    C o n t a c t
                </h1>
                <div className="links-box">
                    <div className="social-links">
                        <a
                        href="https://www.instagram.com/wearehackman/"
                        rel="noreferrer noopener"
                        target="_blank"
                        >
                        <Instagram size={48} />
                        </a>
                    </div>

                    <div className="social-links">
                        <a
                        href="https://www.linkedin.com/company/wearehackman/"
                        rel="noreferrer noopener"
                        target="_blank"
                        >
                        <Linkedin size={48} />
                        </a>
                    </div>

                    <div className="social-links">
                        <a
                        href="mailto:genesis.hackman@gmail.com"
                        rel="noreferrer noopener"
                        target="_blank"
                        >
                        <Mail size={48} />
                        </a>
                    </div>
                </div>
                <div className="contact-no" style={{fontFamily:"pixeloidsans"}}>
                    <p className="doc-link">Gagan: <a href="tel:9008243280">9008243280</a></p>
                    <p className="doc-link">Tarana: <a href="tel:7483408791">7483408791</a></p>
                </div>
                <div className="documents" style={{fontFamily:"pixeloidsans"}}>
                    <p className="doc-link copyright">© 2024 Hackman</p>
                    <p className="doc-link">|</p>
                    <p className="doc-link"><a href={coc} rel='noreferrer noopener' target="_blank">Code of Conduct</a></p>
                    <p className="doc-link">|</p>
                    <p className="doc-link"><a href={tc} rel='noreferrer noopener' target="_blank">Terms and Conditions</a></p>
                    <p className="doc-link">|</p>
                    <p className="doc-link"><a href={ins} rel='noreferrer noopener' target="_blank">Instructions</a></p>
                </div>
                <div className="madeby" style={{fontFamily:"pixeloidsans"}}>Made by team <a href="https://www.instagram.com/genesis.ise/" rel='noreferrer noopener' target="_blank" className='genesis-link'>Genesis</a> with <span className="heart">❤️</span></div>
            </div>
        </div>
    )
};

export default Footer;