import React from "react";
import "../App.css";
import Board from "../assets/board-contact.png";
import { Linkedin, Instagram, Mail } from 'react-feather';
import CityScape from "../assets/cityscape-3.png";
import "../Css/About.css"
function Footer() {

    return (
        
<div className="about-con" id="contact">
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
          >
            Date : June 24th - 25th
          </h4>
          
    <div className="content-box container-md container-sm">
        
        <div >
                    <h2 className="fs-3" style={{ fontFamily: 'pixeloidsans', color: "black", paddingTop:'20px'}}>Reach Out To Us</h2>
        </div>

        <div className="small-text" style={{ color: "black", fontSize: "1.3em" }}>
            <ul style={{ listStyle: 'none'}}>
                <li>
                    <p>Gagan S: <a href="tel:">+91 9008243280</a></p>
                </li>

                <li>
                    <p>Tarana Shetty: <a href="tel:">+91 7483408791</a></p>
                </li>
            </ul>
        </div>
        <h2 className="fs-3" style={{ fontFamily: 'pixeloidsans-bold', color: "black"}}>Connect with Us On</h2>
                <div className="small-text" style={{display:'flex', alignItems:'center',justifyContent:'center', paddingTop:'3px'}}>      
                    <div style={{ margin: '0 10px' }}>
                        <a style={{ color: 'black' }} href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><Instagram size={40} /></a>
                    </div>
                    <div style={{ margin: '0 10px' }}>
                        <a style={{ color: 'black' }} href="https://www.linkedin.com/company/wearehackman/" rel='noreferrer noopener' target="_blank"><Linkedin size={40} /></a>
                    </div>
                    <div style={{ margin: '0 10px' }}>
                        <a style={{ color: 'black' }} href="mailto:genesis.hackman@gmail.com" rel='noreferrer noopener' target="_blank"><Mail size={40} /></a>
                    </div>
                </div>
                <div style={{color:'black', paddingTop:'12px'}}>
                <p style={{fontSize: "12px"}}>© 2024 Hackman. All rights Reserved <br />
                Made by team <a href="https://www.instagram.com/genesis.ise/" rel='noreferrer noopener' target="_blank">Genesis</a></p>
                </div>

    </div>
    </div>
    </div>
</div>
    );
}

export default Footer;
