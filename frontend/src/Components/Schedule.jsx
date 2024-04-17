import React, { useRef, useState, useEffect } from "react";
import Hammer from "hammerjs";
import Board from "../assets/event-board.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "../Css/Schedule.css";
const Schedule = () => {
  const timelineRef = useRef(null);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  useEffect(() => {
    const timeline = timelineRef.current;
    const elH = timeline.querySelectorAll(".timeline li > div");
    const arrows = timeline.querySelectorAll(".timeline .arrows .arrow");
    const arrowPrev = timeline.querySelector(".timeline .arrows .arrow__prev");
    const arrowNext = timeline.querySelector(".timeline .arrows .arrow__next");
    const firstItem = timeline.querySelector(".timeline li:first-child");
    const lastItem = timeline.querySelector(".timeline li:last-child");
    const xScrolling = 280;
    const disabledClass = "disabled";

    function setEqualHeights(el) {
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        const singleHeight = el[i].offsetHeight;

        if (counter < singleHeight) {
          counter = singleHeight;
        }
      }

      for (let i = 0; i < el.length; i++) {
        el[i].style.height = `${counter}px`;
      }
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function setBtnState(el, flag = true) {
      if (flag) {
        el.classList.add(disabledClass);
      } else {
        if (el.classList.contains(disabledClass)) {
          el.classList.remove(disabledClass);
        }
        el.disabled = false;
      }
    }

    function animateTl(scrolling, el, tl) {
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("click", function () {
          if (!arrowPrev.disabled) {
            arrowPrev.disabled = true;
          }
          if (!arrowNext.disabled) {
            arrowNext.disabled = true;
          }
          const sign = this.classList.contains("arrow__prev") ? "" : "-";
          if (counter === 0) {
            tl.style.transform = `translateX(-${scrolling}px)`;
          } else {
            const tlStyle = getComputedStyle(tl);
            const tlTransform =
              tlStyle.getPropertyValue("-webkit-transform") ||
              tlStyle.getPropertyValue("transform");
            const values =
              parseInt(tlTransform.split(",")[4]) +
              parseInt(`${sign}${scrolling}`);
            tl.style.transform = `translateX(${values}px)`;
          }

          setTimeout(() => {
            isElementInViewport(firstItem)
              ? setBtnState(arrowPrev)
              : setBtnState(arrowPrev, false);
            isElementInViewport(lastItem)
              ? setBtnState(arrowNext)
              : setBtnState(arrowNext, false);
          }, 1100);

          counter++;
        });
      }
    }

    function setSwipeFn(tl, prev, next) {
      const hammer = new Hammer(tl);
      hammer.on("swipeleft", () => next.click());
      hammer.on("swiperight", () => prev.click());
    }

    function setKeyboardFn(prev, next, timelineRef) {
      document.addEventListener("keydown", (e) => {
        const key = e.key;

        if (key === "ArrowLeft" || key === "ArrowRight") {
          const timeline = timelineRef.current;
          const timelineRect = timeline.getBoundingClientRect();
          const timelineLeft = timelineRect.left + window.scrollX;

          if (key === "ArrowLeft") {
            prev.click();
          } else if (key === "ArrowRight") {
            next.click();
          }

          if (timelineLeft < window.innerWidth) {
            // Scroll only if the timeline is not fully visible
            window.scrollTo({
              top: window.scrollY,
              left: timelineLeft,
              behavior: "smooth",
            });
          }
        }
      });
    }

    setEqualHeights(elH);
    animateTl(xScrolling, arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
    setKeyboardFn(arrowPrev, arrowNext);

    // Cleanup on unmount
    return () => {
      // Remove event listeners or perform any cleanup if needed
    };
  }, []);

  return (
    <div id="schedule">
      <div className="text-center custom-sc-bg ">
        <h1
          className="eventHeading title-sub"
          style={{
            fontFamily: "karmatic",
            filter: "drop-shadow(3px 3px 5px #010101)",
          }}
          data-aos="slide-up"
        >
          EVENT||SCHEDULE
        </h1>
        <section
          className="timeline"
          ref={timelineRef}
          style={{ fontFamily: "pixeloidSans", overflowX: "auto", overflowY: "hidden" }}
        >
          <div className="items-wrap" data-aos="fade-down">
            <ol>
              <li>
                <div>
                  <p className="imp-events">
                    June 8th : 7:30AM - 8:30AM <br /> Team Check-In
                  </p>
                  June 8th : 9:00AM - 10:30AM <p>Inauguration + Quick Guide</p>
                  <p className="imp-events">
                    June 8th : 11:00AM <br /> Get, Set, HackMan v7!
                  </p>
                </div>
              </li>

              <li>
                <div>
                  <p className="imp-events">
                    June 8th : 2:00PM - 3:00PM <br /> Feast Hour (Lunch)
                  </p>
                  June 8th : 3:00PM <p>Engaged Mode Activated!</p>
                  June 8th : 5:30PM - 6:00PM <p>Refreshment Break</p>
                </div>
              </li>

              <li>
                <div>
                  June 8th : 6:00PM<p>Resume Action!</p>
                  <p className="imp-events">
                    June 8th : 8:30PM - 9:30PM <br /> Dinner Dash
                  </p>
                  June 8th : 9:30PM <p>Keep Momentum!</p>
                </div>
              </li>

              <li>
                <div>
                  <p className="imp-events">
                    June 8th : 11:00 - 11:30PM <br /> Networking Bonanza
                  </p>
                  June 9th : 12:30AM - 1:30AM<p>Game Zone</p>
                  June 9th : 1:30AM <p>Dark Mode On!</p>
                </div>
              </li>

              <li>
                <div>
                  June 9th : 3:30AM - 4:30AM<p>Night Owl Shenanigans</p>
                  <p className="imp-events">
                    June 9th : 4:30AM <br /> Final Stretch
                  </p>
                  June 9th : 7:00AM - 8:00AM<p>Rejuvenate</p>
                </div>
              </li>

              <li>
                <div>
                  June 9th : 8:00AM - 9:00AM<p>Breakfast Boost</p>
                  <p className="imp-events">
                    June 9th : 9:00AM - 10:00AM <br /> Evaluation - Phase 1
                  </p>
                  June 9th : 10:00 - 10:30AM<p>Tactical Adjustments</p>
                </div>
              </li>

              <li>
                <div>
                  <p className="imp-events">
                    June 9th : 10:30AM - 12:00PM <br /> Evaluation - Phase 2
                  </p>
                  June 9th : 12:00PM - 12:30PM <p>Victors' Celebration</p>
                </div>
              </li>
              <li></li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Schedule;
