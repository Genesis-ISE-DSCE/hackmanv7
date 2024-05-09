import React from "react";
import "../App.css";
import About from "../components/About";
import Landing from "../components/Landing";
import Faqs from "../components/Faqs";
import PhotoLib from "../components/PhotoLib";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";

const LandingPage = () => {
    return(
        <div>
            <div className="background-scroll"></div>
            <div className="content">
                <Landing />
                <About />
                <PhotoLib />
                <Sponsors />
                <Faqs />
                <Footer />
            </div>
        </div>
    )
};

export default LandingPage;