import React from "react";
import "../App.css";
import "../css/profile.css";
import Profile from "../components/Profile";

const ProfilePage = () => {
    return(
        <div>
            <div className="background-scroll"></div>
            <div className="content">
                <Profile />
            </div>
        </div>
    )
};

export default ProfilePage;