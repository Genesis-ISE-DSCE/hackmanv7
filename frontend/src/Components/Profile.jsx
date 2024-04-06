// import React from "react";
// import "../Css/Profile.css";

// const Profile = () => {
//   return (
//     <div>
//       <div
//         id="profile"
//         className="custom-prof-bg"
//       >
//         <h1 className="profile-heading">Profile</h1>
//         <div className="contain">
//             <p className="team-detail pt-2">Team BitBytes</p>
//           <div className="details">
//             <div className="team-num">
//             <span className="left-p"></span>
//             <span className="right-p">Team Number:40</span>
//             </div>
//             <div className="table-container table-responsive">
//               <table className="custom-table table-borderless table-hover" >
//                 <thead>
//                   <tr className="py-2">
//                     <th className="pt-3" scope="col">Team Member Name</th>
//                     <th className="pt-3"  scope="col">Team Member Email</th>
//                     <th className="pt-3"  scope="col">Team Member Phone</th>
//                   </tr>
//                 </thead>
//                 <br />
//                 <tbody>
//                   <tr>
//                     <td className="py-2">Achyuth P Rao</td>
//                     <td className="py-1">achyuthprao123@gmail.com</td>
//                     <td className="py-1">12345 67890</td>
//                   </tr>
//                   <tr>
//                     <td className="py-2">Saakshi Shenoy</td>
//                     <td className="py-1">shenoy.saakshi910@gmail.com</td>
//                     <td className="py-1">12345 67890</td>
//                   </tr>
//                   <tr>
//                     <td className="py-2">Sayanur Rahman</td>
//                     <td className="py-1">sayanur123@gmail.com</td>
//                     <td className="py-1">12345 67890</td>
//                   </tr>
//                   <tr>
//                     <td className="py-2">Pragathi Pai</td>
//                     <td className="py-1"> paipragathi@gmail.com</td>
//                     <td className="py-1">12345 67890</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
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
        <h1 className="profile-heading">Profile</h1>
        <div className="contain">
          <p className="team-detail pt-2">Team BitBytes</p>
          <div className="details">
            <div className="team-num">
              <span className="left-p"></span>
              <span className="right-p">Team Number:40</span>
            </div>
            {showForm ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Member Name:</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Member Email:</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="submit-buttons">
                  <button type="submit" className="add-remove-btn">Submit</button>
                  <button type="button" className="add-remove-btn" onClick={() => setShowForm(false)}>Cancel</button>
                </div>
              </form>
            ) : (
              <>
                <div className="table-container table-responsive">
                  <table className="custom-table table-borderless table-hover">
                    <thead>
                      <tr className="py-2">
                        <th className="pt-3" scope="col">Team Member Name</th>
                        <th className="pt-3" scope="col">Team Member Email</th>
                        <th className="pt-3" scope="col">Team Member Phone</th>
                        <th className="pt-3" scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map((member, index) => (
                        <tr key={index}>
                          <td className="py-2">{member.name}</td>
                          <td className="py-2">{member.email}</td>
                          <td className="py-2">{member.phone}</td>
                          <td className="py-2">
                            <button className="add-remove-btn" onClick={() => setTeamMembers(teamMembers.filter((_, i) => i !== index))}>Remove</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button className="add-remove-btn" onClick={addTeamMember}>Add Member</button>
              </>
            )}
          </div>
          <label htmlFor="file" className="custom-file-upload">
      <div className="icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svgg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="" />
          </g>
        </svg>
      </div>
      <div className="text">
        <span>Click to upload image</span>
      </div>
      <input id="file" className="file-upload1" type="file" />
    </label>
        </div>
        
      </div>
      
    </div>
  );
};

export default Profile;
