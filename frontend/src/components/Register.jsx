import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../css/register.css";

function Register() {
  const navigate = useNavigate();
  const [section, setSection] = useState(1);
  const [leaderFormData, setLeaderFormData] = useState({
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    teamName: ""
  });
  const [errors, setErrors] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showError, setShowError] = useState("");

  const leaderValidation = (formData) => {
    const errors = {};
    const regexemail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const regexphone = /^[0-9]{10}$/;
    if(!formData.leaderName){
      errors.leaderName = "Name is required!!";
    }
    if(!formData.leaderEmail){
      errors.leaderEmail = "Email is required!!";
    }else if(!regexemail.test(formData.leaderEmail)){
      errors.leaderEmail = "Invalid email!!";
    }
    if(!formData.leaderPhone){
      errors.leaderPhone = "Phone is required!!";
    }else if(!regexphone.test(formData.leaderPhone)){
      errors.leaderPhone = "Invalid phone number!!";
    }
    return errors;
  }

  const teamNameValidation = (formData) => {
    const errors = {};
    if(!formData.teamName){
      errors.teamName = "Team Name is required!!";
    }
    return errors;
  }

  const handleNextButtonClick = (event) => {
    event.preventDefault();
    const errors = leaderValidation(leaderFormData);
    if (Object.keys(errors).length === 0) {
      setErrors({});
      setSection(section + 1);
    } else {
      setErrors(errors);
    }
  };

  const handleBackButtonClick = () => {
    setSection(section - 1);
  };

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();
    const errors = teamNameValidation(leaderFormData);
    if (Object.keys(errors).length === 0) {
      setErrors({});
      console.log("Success");
      const requestBody = {
        leader: {
          name: leaderFormData.leaderName,
          email: leaderFormData.leaderEmail,
          phoneNumber: leaderFormData.leaderPhone
        },
        teamInfo: {
          name: leaderFormData.teamName
        }
      };

      axios.post("https://hackmanv7.up.railway.app/auth/register",requestBody)
      .then((res)=>{
        console.log(res.data);
        setSection(section + 1);
        setShowPopup(true);
      }).catch((error)=>{
        console.log(error.response.data.error);
        setShowError(error.response.data.error);
      })

    } else {
      setErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeaderFormData({
      ...leaderFormData,
      [name]: value
    });
  };

  function handleOkError() {
    setShowError('');
  }

  function handleOkSuccess() {
    navigate('/userlogin');
  }

  return (
    <div id="registration" className="custom-reg-bg">
      <div className="kard">
        {(section === 1 || section === 2) && (
            <div>
              <h1 className="title-reg" style={{ color: "#fff" }}>
              R e g i s t e r
            </h1>
            </div>
          )
        }

        {section === 1 && (
        <form className="reg-form">
          <div className="form-item">
            <input
              className="form-control"
              placeholder="Leader Name"
              type="text"
              name="leaderName"
              value={leaderFormData.leaderName}
              onChange={handleInputChange}
            />
            <p className="error-handling">{errors.leaderName}</p>
          </div>
          <div className="form-item">
            <input
              className="form-control"
              placeholder="Leader Email"
              type="email"
              name="leaderEmail"
              value={leaderFormData.leaderEmail}
              onChange={handleInputChange}
            />
            <p className="error-handling">{errors.leaderEmail}</p>
          </div>
          <div className="form-item">
            <input
              className="form-control"
              placeholder="Leader Phone"
              type="number"
              name="leaderPhone"
              value={leaderFormData.leaderPhone}
              onChange={handleInputChange}
            />
            <p className="error-handling">{errors.leaderPhone}</p>
          </div>
          <div className="button-bar">
            <div>
              <button className="btn" onClick={handleNextButtonClick}>N e x t</button>
            </div>
          </div>
        </form>
        )}

        {section === 2 && (
          <form className="reg-form">
            <div className="form-item">
              <input
                className="form-control"
                placeholder="Team Name"
                type="text"
                name="teamName"
                value={leaderFormData.teamName}
                onChange={handleInputChange}
              />
              <p className="error-handling">{errors.teamName}</p>
            </div>
            <div className="button-bar">
            <div>
                <button className="btn" onClick={handleBackButtonClick}>B a c k</button>
              </div>
              <div>
                <button className="btn" onClick={handleSubmitButtonClick}>S u b m i t</button>
              </div>
          </div>
          </form>
        )}

        {showPopup && (
          <div>
            <div className="bg-overlay"></div>
            <div className="popup">
            <div>
              <p className="popup-main-msg">Registration Successful !!</p>
              <p className="popup-msg">Check your mail for the next steps.</p>
            </div>
            <div className="popup-button-cnt">
              <button onClick={handleOkSuccess} className="popup-btn" type="button">
                OK
              </button>
            </div>
            </div>
          </div>
        )}

        {showError && (
          <div>
            <div className="bg-overlay"></div>
            <div className="popup">
            <div>
              <p className="popup-main-msg error-msg">Registration Unsuccessful !!</p>
              <p className="popup-msg">{showError}</p>
            </div>
            <div className="popup-button-cnt">
              <button onClick={handleOkError} className="popup-btn" type="button">
                OK
              </button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;