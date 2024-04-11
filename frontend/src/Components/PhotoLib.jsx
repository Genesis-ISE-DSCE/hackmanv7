import React from "react";
import "../Css/photolib.css";
import img1 from "../assets/images/aboutimg.png";
import img2 from "../assets/images/gallery/DSC03412.png";
import img3 from "../assets/images/gallery/DSC02884.png";
import img4 from "../assets/images/gallery/DSC02708.png";
import img5 from "../assets/images/gallery/DSC02891.png";
import img6 from "../assets/images/gallery/DSC03197.png";
import img7 from "../assets/images/gallery/DSC03277.png";
import img8 from "../assets/images/gallery/DSC03096.png";
import img9 from "../assets/images/gallery/DSC02926.png";
import img10 from "../assets/images/gallery/DSC02696.png";

const PhotoLib = () => {
    return (
        <div className="gallery custom-abt-bg">
            <div>
                <h1 className="title-sub">G A L L E R Y</h1>
            </div>
            <div className="image-container">
                <div className="image-column double-width">
                    <img src={img4} alt="Image 1" />
                </div>
                <div className="image-column double-width double-height">
                    <img src={img2} alt="Image 1" />
                </div>
                <div className="image-column double-height">
                    <img src={img1} alt="Image 1" />
                </div>
                <div className="image-column">
                    <img src={img3} alt="Image 1" />
                </div>
                <div className="image-column double-width">
                    <img src={img6} alt="Image 1" />
                </div>
                <div className="image-column">
                    <img src={img5} alt="Image 1" />
                </div>
                <div className="image-column">
                    <img src={img7} alt="Image 1" />
                </div>
                <div className="image-column">
                    <img src={img10} alt="Image 1" />
                </div>
                <div className="image-column">
                    <img src={img9} alt="Image 1" />
                </div>
                <div className="image-column">
                    <img src={img8} alt="Image 1" />
                </div>
            </div>
        </div>
    )
}

export default PhotoLib;