import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../App.css";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
          ...loginData,
          [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://hackmanv7.up.railway.app/admin/login", {
            email: loginData.email,
            password: loginData.password
        })
        .then((res)=>{
            console.log(res.data);
            const token = res.data.token;
            sessionStorage.setItem("jwtAdminToken", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            navigate("/admin");
        }).catch((error)=>{
            console.log(error.response.data.error);
            setErrors(error.response.data.error);
        })
    };
    return(
        <div id="userlogin" className="custom-reg-bg">
            <div className="kard">
                <h1 className="title-reg" style={{ color: "#fff" }}>
                    A d m i n
                </h1>

                <form className="reg-form">
                    <div className="form-item">
                        <input
                        className="form-control"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-item">
                        <input
                        className="form-control"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        />
                    </div>
                    <p className="error-handling">{errors}</p>
                    <div className="button-bar">
                        <div>
                        <button className="btn" onClick={handleSubmit}>S u b m i t</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AdminLogin;