import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfilePageTest({ teamId }) {
  const [teamDetails, setTeamDetails] = useState(null);
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });


//   const fetchTeamDetails = async () => {
//     try {
//       const response = await axios.get(`/getTeamDetails/${teamId}`);
//       setTeamDetails(response.data);
//     } catch (error) {
//       console.error('Error fetching team details:', error);
//     }
//   };

  const addMember = async () => {
    try {
      await axios.post(`/addMember/${teamId}`, newMember);
      // Refresh team details after adding member
      fetchTeamDetails();
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  const removeMember = async (memberId) => {
    try {
      await axios.delete(`/removeMember/${memberId}`);
      // Refresh team details after removing member
      fetchTeamDetails();
    } catch (error) {
      console.error('Error removing member:', error);
    }
  };

  const editMember = async (memberId, newData) => {
    try {
      await axios.put(`/editMember/${memberId}`, newData);
      // Refresh team details after editing member
      fetchTeamDetails();
    } catch (error) {
      console.error('Error editing member:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({
      ...newMember,
      [name]: value
    });
  };

  return (
    <div>
      {teamDetails ? (
        <div>
          <h1>Team Details</h1>
          <ul>
            {teamDetails.members.map((member) => (
              <li key={member.id}>
                <div>Name: {member.name}</div>
                <div>Email: {member.email}</div>
                <div>Phone Number: {member.phoneNumber}</div>
                <button onClick={() => removeMember(member.id)}>Remove</button>
                <button onClick={() => editMember(member.id, { name: 'New Name' })}>Edit</button>
              </li>
            ))}
          </ul>
          <h2>Add New Member</h2>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newMember.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newMember.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={newMember.phoneNumber}
              onChange={handleInputChange}
            />
            <button onClick={addMember}>Add</button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProfilePageTest;
