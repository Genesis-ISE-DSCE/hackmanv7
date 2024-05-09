import React, { useState } from "react";
import "../css/register.css";

function Register() {
  const [section, setSection] = useState(1);

  const handleNextButtonClick = () => {
    setSection(section + 1);
  };

  const handleBackButtonClick = () => {
    setSection(section - 1);
  };

  const handleSubmitButtonClick = () => {
    console.log("Hi");
  };

  const [numInputs, setNumInputs] = useState(1);

  const handleAddInput = () => {
      setNumInputs(numInputs + 1);
  };

  const AddButtonDisplay = () => {
    const max = 3;
    if (numInputs < max) {
      return (
        <div className="addButnContainer">
          <button className="addButton" type="button" onClick={handleAddInput}>Add +</button>
        </div>
      );
    }
  }
  
  return (
    <div id="registration" className="custom-reg-bg">
      <div className="kard">
        <h1 className="title-reg" style={{ color: "#fff" }}>
          R e g i s t e r
        </h1>

        {section === 1 && (
        <form className="reg-form">
          <div className="form-item">
            <input
              className="form-control"
              placeholder="Leader Name"
              type="text"
            />
          </div>
          <div className="form-item">
            <input
              className="form-control"
              placeholder="Leader Email"
              type="email"
            />
          </div>
          <div className="form-item">
            <input
              className="form-control"
              placeholder="Leader Phone"
              type="number"
            />
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
              />
            </div>
            <div className="button-bar">
            <div>
                <button className="btn" onClick={handleBackButtonClick}>B a c k</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextButtonClick}>N e x t</button>
              </div>
          </div>
          </form>
        )}

        {section === 3 && (
          <form className="reg-form">
            <div className="form-item">
              <input
                className="form-control"
                placeholder="Member Name"
                type="text"
              />
            </div>
            <div className="form-item">
              <input
                className="form-control"
                placeholder="Member Email"
                type="text"
              />
            </div>
            <div className="form-item">
              <input
                className="form-control"
                placeholder="Member Mobile"
                type="text"
              />
            </div>
            {AddButtonDisplay(numInputs)}
            <div className="button-bar">
            <div>
                <button className="btn" onClick={handleBackButtonClick}>B a c k</button>
              </div>
              <div>
                <button className="btn" onClick={handleNextButtonClick}>N e x t</button>
              </div>
          </div>
          </form>
        )}

        {section === 4 && (
          <form className="reg-form">
            <div className="form-item">
              <input
                className="form-control"
                placeholder="Transaction ID"
                type="text"
              />
            </div>
            <div className="form-item">
              <input
                className="form-control"
                placeholder="UPI ID"
                type="text"
              />
            </div>
            <div className="form-item">
              <input
                className="form-control img-input"
                placeholder="Upload Image"
                type="file"
              />
            </div>
            <div className="button-bar">
            <div>
                <button className="btn" onClick={handleBackButtonClick}>B a c k</button>
              </div>
              <div>
                <button className="btn" onClick={handleSubmitButtonClick}>Submit</button>
              </div>
          </div>
          </form>
        )}

      </div>
    </div>
  );
}

export default Register;