import React, { useEffect, useRef } from "react";
import "../css/sponsors.css";
import basil from "../assets/basil.png";
import anastrat from "../assets/anastrat.png";
import nokia from "../assets/nokia.png";
import skill from "../assets/re.png";
import skolar from "../assets/skolar.png";
import unibic from "../assets/unibic.png";
import fin from "../assets/radix.png";

function Sponsors() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const images = carouselRef.current.querySelectorAll(".carousel-item");
    let currentIndex = 0;
    const intervalTime = 2000; // Adjust the interval time in milliseconds

    const slide = () => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    };

    const interval = setInterval(slide, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sponsorpage">
      <div className="">
        <h1 className="sponsors-heading">
          P A S T || S P O N S O R S
        </h1>
        <div className="image-container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="row d-flex  justify-content-center align-items-center for-small pt-40 shadow-custom">
              <div className="col-10 col-sm-3 col-md-4 col-lg-4 sponsor-item">
                <img
                  src={anastrat}
                  className="img-fluid sponsor-image"
                  alt="AnaStrat"
                />
              </div>
              <div className="col-10 col-sm-3 col-md-4 col-lg-4 sponsor-item">
                <img
                  src={nokia}
                  className="img-fluid sponsor-image"
                  alt="Nokia"
                />
              </div>
              <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
                <img
                  src={basil}
                  className="img-fluid sponsor-image"
                  alt="Basil"
                />
              </div>
              <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
                <img
                  src={skill}
                  className="img-fluid sponsor-image pt-5 sm:pt-3 "
                  alt="Skill"
                />
              </div>
              <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
                <img
                  src={skolar}
                  className="img-fluid sponsor-image pt-5 sm:pt-3"
                  alt="Skolar"
                />
              </div>
              <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
                <img
                  src={unibic}
                  className="img-fluid sponsor-image pt-5 sm:pt-3"
                  alt="Unibic"
                />
              </div>
              <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
                <img
                  src={fin}
                  className="img-fluid sponsor-image pt-5 sm:pt-3"
                  alt="Fin"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel" ref={carouselRef}>
          <div className="carousel-item active">
            <img src={anastrat} className="d-block w-100 gal-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={nokia} className="d-block w-100 gal-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={basil} className="d-block w-100 gal-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={skill} className="d-block w-100 gal-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={skolar} className="d-block w-100 gal-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={unibic} className="d-block w-100 gal-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={fin} className="d-block w-100 gal-img" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;