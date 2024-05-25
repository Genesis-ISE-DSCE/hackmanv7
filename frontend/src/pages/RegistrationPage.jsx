import React from "react";
import "../App.css";
import "../css/register.css";
import OpensSoon from "../components/OpensSoon";

const RegistrationPage = () => {
    return (
        <div>
            <div className="background-scroll"></div>
            <div className="content">
                <OpensSoon />
            </div>
        </div>
    );
}

export default RegistrationPage;