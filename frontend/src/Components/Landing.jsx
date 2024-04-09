import React, { useState, useEffect } from "react";
import newBg from "../assets/newbg3.png";
import "../Css/landing.css";
import Bat from "../assets/bat-mascot.gif";
import Dialogue from "../assets/dialogue.png";
import Dialogue2 from "../assets/dialogue2.png";

function Landing() {
  const [showDialogue, setShowDialogue] = useState(true);
  const [showAnotherDialogue, setShowAnotherDialogue] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialogue(false);
    }, 20000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleHover = () => {
    setShowDialogue(false);
    setShowAnotherDialogue(true);
  };

  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div id="land" className="custom-height-land">
      <div className="containz">
        <section onWheel={handleScroll} className="elem">
          <div className="overlay"></div>
          <img
            src={newBg}
            alt=""
            srcset=""
            style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          />
        </section>
        <section onWheel={handleScroll} className="elem">
          <div className="overlay"></div>
          <img
            src={newBg}
            alt=""
            srcset=""
            style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          />
        </section>
        <div className="karma glass flex w-full">
          <h1
            className="mb-4 title"
            data-aos="slide-down"
            style={{ filter: "drop-shadow(4px 4px 6px #010101)" }}
          >
            H A C K M A N || v7.0
          </h1>
          <h3 className="karma2">June 8th-9th</h3>
        </div>

        <div className="mascot" onMouseOver={handleHover} data-aos="slide-left">
          <picture alt="mascot">
            <img
              height={240}
              src={Bat}
              loading="lazy"
              alt="mascot"
            />
          </picture>

          {showDialogue && (
            <div className="dialogue" id="dialogue">
              <picture alt="dialogue-box">
                <img
                  height={80}
                  src={Dialogue}
                  loading="lazy"
                  alt="hello"
                />
              </picture>
            </div>
          )}

          {showAnotherDialogue && (
            <div className="dialogue2" id="dialogue2">
              <picture alt="dialogue-box2">
                <img
                  height={80}
                  src={Dialogue2}
                  loading="lazy"
                  alt="hello"
                />
              </picture>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Landing;