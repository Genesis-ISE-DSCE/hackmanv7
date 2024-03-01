import React from "react";
import "../Css/sponsor.css"
import basil from "../assets/basil.png";
import anastrat from "../assets/anastrat.png";
import nokia from "../assets/nokia.png";
import azad from "../assets/azad.png";
import skill from "../assets/skill.png";
import skolar from "../assets/skolar.png";

function Sponsors() {

    return (

       <div className="sponsorpage">
        <div className="vh-100 custom-sp-bg">
              <h1 className="heading text-center pt-4" style={{ letterSpacing: "0.5px", color:"white" }}>
                SPONSORS
              </h1>
            
          <div className="containerz text-center">
            
              <div className="row justify-content-center align-items-center pt-5 sps">
                
                <img
                    src={anastrat}
                    alt="anastrat"
                    className="img-fluid with-margin" 
                   style={{ maxWidth: "100%", height: "auto", width: "15rem" }}
                  />
                  <img
                    src={basil}
                    alt="basil"
                    className="img-fluid with-margin"
                    style={{ width: "10rem" }}
                  />
                  
                
              </div>
              
          
            
              <div className="row justify-content-center align-items-center pt-5 gap-4">
                <img
                    src={nokia}
                    alt="nokia"
                    className="img-fluid with-margin" 
                    style={{ maxWidth: "100%", height: "auto", width: "15em" }}
                  />
                  
                  <img
                    src={azad}
                    alt="azad"
                    className="img-fluid with-margin" 
                   style={{ maxWidth: "100%", height: "auto", width: "15em" }}
                  />
                  <img
                    src={skill}
                    alt="skill"
                    className="img-fluid with-margin" 
                   style={{ maxWidth: "100%", height: "auto", width: "15em",marginBottom:"20px" }}
                  />
                  </div>
                  <div className="row justify-content-center align-items-center pt-5 gap-4">

                  {/* <img
                    src={skolar}
                    alt="skolar"
                    className="img-fluid with-margin" 
                   style={{ maxWidth: "100%", height: "auto", width: "15em"}}
                  />   */}
                  </div>

          
           
            </div>
            </div>
            
            </div>    
            

    );
}

export default Sponsors;

