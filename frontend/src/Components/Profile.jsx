import React from "react";
import "../Css/Profile.css";

const Profile = () => {
  return (
    <div>
      <div
        id="profile"
        className="custom-prof-bg"
      >
        <h1 className="profile-heading">Profile</h1>
        <div className="contain">
            <p className="team-detail pt-2">Team BitBytes</p>
          <div className="details">
            <div className="team-num">
            <span className="left-p"></span>
            <span className="right-p">Team Number:40</span>
            </div>
            <div className="table-container table-responsive">
              <table className="custom-table table-borderless table-hover" >
                <thead>
                  <tr className="py-2">
                    <th className="pt-3" scope="col">Team Member Name</th>
                    <th className="pt-3"  scope="col">Team Member Email</th>
                    <th className="pt-3"  scope="col">Team Member Phone</th>
                  </tr>
                </thead>
                <br />
                <tbody>
                  <tr>
                    <td className="py-2">Achyuth P Rao</td>
                    <td className="py-1">achyuthprao123@gmail.com</td>
                    <td className="py-1">12345 67890</td>
                  </tr>
                  <tr>
                    <td className="py-2">Saakshi Shenoy</td>
                    <td className="py-1">shenoy.saakshi910@gmail.com</td>
                    <td className="py-1">12345 67890</td>
                  </tr>
                  <tr>
                    <td className="py-2">Sayanur Rahman</td>
                    <td className="py-1">sayanur123@gmail.com</td>
                    <td className="py-1">12345 67890</td>
                  </tr>
                  <tr>
                    <td className="py-2">Pragathi Pai</td>
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
