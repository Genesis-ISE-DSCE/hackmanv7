import React from "react";
import "../App.css";
import About from "../components/About";
import Landing from "../components/Landing";
import Faqs from "../components/Faqs";
import PhotoLib from "../components/PhotoLib";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Mentors from "../components/mentors"

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
                <Mentors/>
                <Footer />
            </div>
        </div>
    )
};

export default LandingPage;