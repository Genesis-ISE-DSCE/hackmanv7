import React from "react";
import "../App.css";
import Register from "../components/Register";
// import OpensSoon from "../components/OpensSoon";

const RegistrationPage = () => {
    return (
        <div>
            <div className="background-scroll"></div>
            <div className="content">
                <Register />
                {/* <OpensSoon /> */}
            </div>
        </div>
    );
}

export default RegistrationPage;