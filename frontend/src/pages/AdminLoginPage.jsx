import React from "react";
import "../App.css";
import AdminLogin from "../components/Admin/AdminLogin";

const AdminLoginPage = () => {
    return(
        <div>
            <div className="background-scroll"></div>
            <div className="content">
                <AdminLogin />
            </div>
        </div>
    )
};

export default AdminLoginPage;