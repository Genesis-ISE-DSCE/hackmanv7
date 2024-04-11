import React from "react";
import "../Css/Faq.css";

function Faqs() {
  return (
    <div id="faqs" className="custom-faq-bg faq-main">
      <div className="">
        <h1 className="title-subz"
        >
          F A Q ' S
        </h1>
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
