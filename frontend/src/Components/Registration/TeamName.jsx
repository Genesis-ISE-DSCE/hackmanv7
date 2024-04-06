import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function TeamName() {
  return (
    <div className="custom-reg-bg all d-flex justify-content-center align-items-start">
      <div className="card p-4 rounded-lg bg-gray-800 w-75-lg kard ">
        <h1
          className="text-center font-bold text-3xl"
          style={{ color: "#fff" }}
        >
          Team Name
        </h1>
        <form className="my-3">
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Team Name"
              type="text"
            />
          </div>
          <div className="d-flex justify-content-between">
            <Link to="/registration">
              <button className="btn  w-45" style={{ textDecoration: "none" }}>
                Back
              </button>
            </Link>
            <Link to="/payment">
              <button className="btn  w-45" style={{ textDecoration: "none" }}>
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TeamName;
