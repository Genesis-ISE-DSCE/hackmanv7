import React from "react";
import "../App.css";
import "../css/register.css";
// import OpensSoon from "../components/OpensSoon";
import Register from "../components/Register";

const RegistrationPage = () => {
    return (
        <div>
            <div className="background-scroll"></div>
            <div className="content">
                <Register />
            </div>
        </div>
    );
}

export default RegistrationPage;