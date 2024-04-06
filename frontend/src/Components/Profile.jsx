import React, { useState } from "react";
import "../Css/Profile.css";

const Profile = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [uploadedFile, setUploadedFile] = useState(null);

  const addTeamMember = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeamMembers([...teamMembers, formData]);
    setFormData({ name: "", email: "", phone: "" });
    setShowForm(false);
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  return (
    <div>
      <div id="profile" className="custom-prof-bg">
        <p className="profile-heading fs-2 mx-2 ">
         Profile
        </p>
        <div className="contain mx-3">
          <p className="fs-5 pt-2 text-center">Team Genesis</p>
          <input type="text" name="Github Project Url" id="" style={{fontFamily:"pixeloidsans" , fontSize:"0.9em"}} placeholder="Upload Github Project Url" className="w-auto mb-3 text-center p-1"/>
          <div className="details mx-2">
            {showForm ? (
              <form onSubmit={handleSubmit} className="text-center mt-4">
                <div className="form-group">
                  <label>Member Name:</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Member Email:</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="d-flex justify-content-center my-4">
                  <button type="submit" className="add-remove-btn">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="add-remove-btn mx-2"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="table-container table-responsive">
                  <table className="custom-table table-borderless table-hover">
                    <thead>
                      <tr className="py-1">
                        <th className="p-3" scope="col">
                         Name
                        </th>
                        <th className="p-3" scope="col">
                          Email
                        </th>
                        <th className="px-3" scope="col">
                          Phone
                        </th>
                        <th className="px-2" scope="col">
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map((member, index) => (
                        <tr key={index}>
                          <td className="py-2">{member.name}</td>
                          <td className="py-2">{member.email}</td>
                          <td className="py-2">{member.phone}</td>
                          <td className="py-2">
                            <button
                              className="add-remove-btn"
                              onClick={() =>
                                setTeamMembers(
                                  teamMembers.filter((_, i) => i !== index)
                                )
                              }
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button className="add-remove-btn my-1" onClick={addTeamMember}>
                  Add Member
                </button>
              </>
            )}
            <hr />
            <p className="fw-bolder">Upload Payment Screenshot</p>
            <input id="file" className="w-25 text-center my-4"  type="file" />
          </div>

          {/* <input id="file" className="file-upload1 mx-2 text-sm" type="file" /> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
