import React from "react";
import "../css/photolib.css";
import img1 from "../assets/images/aboutimg.png";
import img2 from "../assets/images/gallery/DSC03412.jpg";
import img3 from "../assets/images/gallery/DSC02884.jpg";
import img4 from "../assets/images/gallery/DSC02078.jpg";
import img5 from "../assets/images/gallery/DSC02891.jpg";
import img6 from "../assets/images/gallery/DSC03197.jpg";
import img7 from "../assets/images/gallery/DSC03277.jpg";
import img8 from "../assets/images/gallery/DSC03096.jpg";
import img9 from "../assets/images/gallery/DSC02926.jpg";
import img10 from "../assets/images/gallery/DSC02696.jpg";

const PhotoLib = () => {
    return (
        <div id="gallery" className="gallery">
            <div>
                <h1 className="title-sub">G A L L E R Y</h1>
            </div>
            <div className="image-container">
                <div className="image-column double-width">
                    <img src={img4} alt="EventPic 1" loading="lazy" />
                </div>
                <div className="image-column double-width double-height">
                    <img src={img2} alt="EventPic 2" loading="lazy" />
                </div>
                <div className="image-column double-height">
                    <img src={img1} alt="EventPic 3" loading="lazy" />
                </div>
                <div className="image-column">
                    <img src={img3} alt="EventPic 4" loading="lazy" />
                </div>
                <div className="image-column double-width">
                    <img src={img6} alt="EventPic 5" loading="lazy" />
                </div>
                <div className="image-column">
                    <img src={img5} alt="EventPic 6" loading="lazy" />
                </div>
                <div className="image-column">
                    <img src={img7} alt="EventPic 7" loading="lazy" />
                </div>
                <div className="image-column">
                    <img src={img10} alt="EventPic 8" loading="lazy" />
                </div>
                <div className="image-column">
                    <img src={img9} alt="EventPic 9" loading="lazy" />
                </div>
                <div className="image-column">
                    <img src={img8} alt="EventPic 10" loading="lazy" />
                </div>
            </div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img4} class="d-block w-100 gal-img" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100 gal-img" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100 gal-img" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img9} class="d-block w-100 gal-img" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img5} class="d-block w-100 gal-img" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img6} class="d-block w-100 gal-img" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img7} class="d-block w-100 gal-img" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img8} class="d-block w-100 gal-img" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img10} class="d-block w-100 gal-img" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default PhotoLib;
