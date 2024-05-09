import React from "react";
import "../css/faqs.css";

function Faqs() {
  return (
    <div id="faqs" className="faq-main">
      <div className="">
        <h1 className="title-subz">
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
                    Department of Information Science, DSCE
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
                    includes programmers, designers, data scientists, and other
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
            {/* New FAQs */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed accordian-ques"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How will projects be judged at Hackman v7?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordian-ans">
                  <p>
                    Projects at Hackman v7 will be judged based on a set of criteria established by the event organizers, which may include factors such as creativity, technical complexity, feasibility, and potential impact.
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
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  How many members can be on a team at Hackman v7?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordian-ans">
                  <p>
                    Teams at Hackman v7 can range in size from 2 to 4 members. This allows participants to collaborate with others and share the workload while still keeping the teams small enough to ensure efficient communication and decision-making.
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
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  What should I bring to this hackathon?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordian-ans">
                  <p>
                    You should bring your laptop, any necessary chargers or accessories, and any other tools or resources you may need to work on your project. Optionally, you may also want to bring a change of clothes, toiletries, and any snacks or drinks you prefer.
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
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Do I need to have programming experience to participate?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordian-ans">
                  <p>
                    While programming experience is certainly helpful, it is not always required to participate in HACKMAN. We also welcome designers, data scientists, and other tech enthusiasts who can contribute to the development of a project in other ways.
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
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  What are the benefits of participating in Hackman v7?
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body accordian-ans">
                  <p>
                    It offers a variety of benefits, including the opportunity to learn new skills, network with like-minded individuals, gain exposure to new technologies and ideas, and potentially win prizes or recognition for your work.
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
