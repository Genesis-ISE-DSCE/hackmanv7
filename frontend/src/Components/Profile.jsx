import React from "react";
import "../Css/Profile.css";
import CityScape from "../assets/cityscape-3.png";

const Profile = () => {
  return (
    <div>
      <div
        id="profile"
        className=""
        style={{
          backgroundImage: `url(${CityScape})`,
          color: "white",
          backgroundSize: "cover",
        }}
      >
        <h1 className="profile-heading">Profile</h1>
        <div className="contain">
          <div className="details">
            <p className="team-detail pt-2">Team Name - </p>
            <p className="team-detail">Team Lead - </p>
            <p className="team-detail">Team Number -  </p>

            <div className="table-container table-responsive">
              <table className="custom-table table-borderless table-hover" >
                <thead>
                  <tr>
                    <th scope="col">Team Member Name</th>
                    <th scope="col">Team Member Email</th>
                    <th scope="col">Team Member Phone</th>
                  </tr>
                </thead>
                <br />
                <tbody>
                  <tr>
                    <td className="py-1">Achyuth P Rao</td>
                    <td className="py-1">achyuthprao123@gmail.com</td>
                    <td className="py-1">12345 67890</td>
                  </tr>
                  <tr>
                    <td className="py-1">Saakshi Shenoy</td>
                    <td className="py-1">shenoy.saakshi910@gmail.com</td>
                    <td className="py-1">12345 67890</td>
                  </tr>
                  <tr>
                    <td className="py-1">Sayanur Rahman</td>
                    <td className="py-1">sayanur123@gmail.com</td>
                    <td className="py-1">12345 67890</td>
                  </tr>
                  <tr>
                    <td className="py-1">Pragathi Pai</td>
                    <td className="py-1"> paipragathi@gmail.com</td>
                    <td className="py-1">12345 67890</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
