import React, { useEffect, useRef } from "react";
import "../css/sponsors.css";
import edway from "../assets/edway.png";
import wowfit from "../assets/wowfit.jpeg";
import acm from "../assets/acm.png";

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
          O U R || S P O N S O R S
        </h1>
        <div className="image-container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="row d-flex  justify-content-center align-items-center for-small pt-30 shadow-custom">
              <div className="col-10 col-sm-3 col-md-4 col-lg-4 sponsor-item">
                <img
                  src={edway}
                  className="img-fluid sponsor-image"
                  alt="edway"
                  style={{height: "50%", width:"50%"}}
                />
              </div>
              <div className="col-10 col-sm-3 col-md-4 col-lg-4 sponsor-item">
                <img
                  src={acm}
                  className="img-fluid sponsor-image"
                  alt="Acm"
                  style={{height: "50%", width:"50%"}}
                />
              </div>
              <div className="col-8 col-sm-3 col-md-4 col-lg-4 d-flex justify-content-center sponsor-item">
                <img
                  src={wowfit}
                  className="img-fluid sponsor-image"
                  alt="wowfit"
                  style={{height: "50%", width:"50%"}}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel" ref={carouselRef}>
          <div className="carousel-item active">
            <img src={acm} className="d-block w-100 gal-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={edway} className="d-block w-100 gal-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={wowfit} className="d-block w-100 gal-img" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;