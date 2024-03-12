import React from "react";
import "../Css/Faq.css";
// import card1 from "../assets/Eventback.png";
// import card2 from "../assets/Eventback-2.png";
// import card3 from "../assets/Eventback-3.png";
// import brick from "../assets/brick.png";
// import card4 from "../assets/Eventback-4.png";
// import card5 from "../assets/Eventback-5.png"
// import card6 from "../assets/Eventback-6.png"

function Faqs() {
  // <div id="faqs" className="custom-height d-flex justify-content-center custom-faq-bg ">
  //   <div className="outer d-flex flex-row faq-main">
  //     <div className="text-center">
  //     <h1 style={{fontFamily:"karmatic"}}>FAQS</h1>
  {
    /* <div className="card-container ">
        <div className="myCard">
            <div className="innerCard">
              <div className="frontSide">
              <img src={card1} alt=""width={200}  height={550}/>
              </div>
              <div className="backSide" >
                <img src={brick} width={315}  height={600} alt="" srcset="" />
                <p className="position-absolute bs-cont">Hackman is a 24Hr Inter-College Hackathon, hosted by Dept of ISE,DSCE</p>
            </div>
            </div>
          </div>
          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide">
              <img src={card2} alt="" width={200}  height={550}/>
              </div>
              <div className="backSide">
              <img src={brick} width={315}  height={600} alt="" srcset="" />
              <span  className="position-absolute bs-cont fs-6">Any student pursuing engineering from any year with an interest in technology can participate in Hackman. This includes programmers, designers, data scientists,and other tech enthusiasts.</span>
            </div>
            </div>
          </div>
          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide">
              <img src={card3} alt=""width={200}  height={550}/>
              </div>
              <div className="backSide" >
                <img src={brick} width={315}  height={600} alt="" srcset="" />
                <p className="position-absolute bs-cont mh-60">Hackman v7 has an open theme, meaning participants are free to work on any project they choose.</p>
            </div>
            </div>
          </div>
          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide">
              <img src={card4} alt="" width={200}  height={550}/>
              </div>
              <div className="backSide" >
                <img src={brick} width={315}  height={600} alt="" srcset="" />
                <p className="position-absolute bs-cont mh-60 fs-5" >Yes, food, shelter and snacks will be provided for participants throughout the duration of Hackman.</p>
            </div>
            </div>
          </div>
          </div> */
  }
  //    </div>
  //   </div>
  // </div>
  return (
    <div id="faqs" className="custom-height custom-faq-bg faq-main">
      <div className="text-center">
        <h1 style={{ fontFamily: "karmatic" }}>FAQS</h1>
        <div className="main-accordion" data-aos="slide-up">
          <div
            className="custom-accordion accordion"
            id="accordionExample"
            style={{ fontFamily: "pixeloidsans-bold" }}
          >
            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button
                  className="accordion-button accordian-ques"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is Hackman v7?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Hackman is a 24-hour Inter-College Hackathon, hosted by the
                    Deparment of Information Science, DSCE
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed accordian-ques"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Who can participate in Hackman v7?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordian-ans">
                  <p>
                    Any student pursuing engineering from any year with an
                    interest in technology can participate in Hackman. This
                    includes programmers, designers, data scientists,and other
                    tech enthusiasts.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed accordian-ques "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is the theme of Hackman v7?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordian-ans">
                  <p>
                    Hackman v7 has an open theme for the choice of topics,
                    meaning participants are free to work on any project
                    belonging to a domain of their liking.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed accordian-ques"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Will Food, shelter and refreshments be provided at Hackman v7?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordian-ans">
                  <p>
                    Yes. Food, shelter and timely refreshments will be provided
                    to all the participants throughout the duration of the
                    Hackathon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
