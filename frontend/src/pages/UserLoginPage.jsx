import React from "react";
import "../App.css";
import UserLogin from "../components/UserLogin";

const UserLoginPage = () => {
    return(
        <div>
            <div className="background-scroll"></div>
            <div className="content">
                <UserLogin />
            </div>
        </div>
    )
};

export default UserLoginPage;