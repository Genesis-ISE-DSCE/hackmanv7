import React from "react";
import CityScape from "../assets/cityscape-3.png";
import card1 from "../assets/Eventback.png";
import card2 from "../assets/Eventback-2.png";
import card3 from "../assets/Eventback-3.png";
import brick from "../assets/brick.png";
import "../Css/Faq.css"
import card4 from "../assets/Eventback-4.png"
import card5 from "../assets/Eventback-5.png"
import card6 from "../assets/Eventback-6.png"
import Board from "../assets/Faqs-board.png"

function Faqs() {
  return (
    <div id="faqs">
      <div
        className="outer vh-100 d-flex flex-row  justify-content-evenly "
        style={{
          backgroundImage: `url(${CityScape})`,
          backgroundSize: "cover",
          height: "auto",
        }}
      >
        <div className="text-center ok">
        <img
            src={Board}
            alt="board"
            className="img-fluid ok"
            style={{ width: "20rem" }}
          />
        <div className="card-container">
        <div className="myCard">
            <div className="innerCard">
              <div class="frontSide">
              <img src={card1} alt=""width={200}  height={550}/>
              </div>
              <div class="backSide" >
                <img src={brick} width={350}  height={600} alt="" srcset="" />
                <p className="position-absolute bs-cont">Hackman is a 24Hr Inter-College Hackathon, hosted by Dept of ISE,DSCE</p>
            </div>
            </div>
          </div>
          <div className="myCard">
            <div className="innerCard">
              <div class="frontSide">
              <img src={card2} alt="" width={200}  height={550}/>
              </div>
              <div class="backSide">
              <img src={brick} width={350}  height={600} alt="" srcset="" />
              <span  className="position-absolute bs-cont fs-6">Any student pursuing engineering from any year with an interest in technology can participate in Hackman. This includes programmers, designers, data scientists,and other tech enthusiasts.</span>
            </div>
            </div>
          </div>
          <div className="myCard">
            <div className="innerCard">
              <div class="frontSide">
              <img src={card3} alt=""width={200}  height={550}/>
              </div>
              <div class="backSide" >
                <img src={brick} width={350}  height={600} alt="" srcset="" />
                <p className="position-absolute bs-cont mh-60">Hackman v7 has an open theme, meaning participants are free to work on any project they choose.</p>
            </div>
            </div>
          </div>
          <div className="myCard">
            <div className="innerCard">
              <div class="frontSide">
              <img src={card4} alt=""width={200}  height={550}/>
              </div>
              <div class="backSide" >
                <img src={brick} width={350}  height={600} alt="" srcset="" />
                <p className="position-absolute bs-cont mh-60 fs-5" >Yes, food, shelter and snacks will be provided for participants throughout the duration of Hackman to help ensure they can stay focused on their projects.</p>
            </div>
            </div>
          </div>
          {/* <div className="myCard">
            <div className="innerCard">
              <div class="frontSide">
              <img src={card5} alt=""width={200}  height={550}/>
              </div>
              <div class="backSide" >
                <img src={brick} width={200}  height={550} alt="" srcset="" />
                <p className="position-absolute bs-cont">Content</p>
            </div>
            </div>
          </div>
          <div className="myCard">
            <div className="innerCard">
              <div class="frontSide">
              <img src={card6} alt=""width={200}  height={550}/>
              </div>
              <div class="backSide" >
                <img src={brick} width={200}  height={550} alt="" srcset="" />
                <p className="position-absolute bs-cont">Content</p>
            </div>
            </div>
          </div> */}
          </div>
          </div>
      </div>
    </div>
  );
}

export default Faqs;
