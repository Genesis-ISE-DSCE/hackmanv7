import React, { useState, useEffect } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import "../css/profile.css";

const Profile = () => {
    const initialMemberFormData = {
        memberName: "",
        memberEmail: "",
        memberPhone: "",
    };
    const [memberFormData, setMemberFormData] = useState(initialMemberFormData);
    const [showPopup, setShowPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [errors, setErrors] = useState("");
    const [paymentPicFile, setPaymentPicFile] = useState(null);
    const [editMemberData, setEditMemberData] = useState({});
    const [teamDetails, setTeamDetails] = useState();
    const jwtToken = localStorage.getItem("jwtToken");

    useEffect(() => {
        if (jwtToken) {
            try {
                const tokenValue = jwtDecode(jwtToken).userId;

                axios.get(`https://hackmanv7.up.railway.app/leader/getTeamDetails/${tokenValue}`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    setTeamDetails(res.data);
                })
                .catch((err) => {
                    console.log("Error fetching team details:", err);
                });
            } catch (error) {
                console.log("Error decoding JWT token:", error);
            }
        }
    }, []);

    const memberValidation = (formData) => {
        const errors = {};
        const regexemail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        const regexphone = /^[0-9]{10}$/;
        if(!formData.memberName){
          errors.memberName = "Name is required!!";
        }
        if(!formData.memberEmail){
          errors.memberEmail = "Email is required!!";
        }else if(!regexemail.test(formData.memberEmail)){
          errors.memberEmail = "Invalid email!!";
        }
        if(!formData.memberPhone){
          errors.memberPhone = "Phone is required!!";
        }else if(!regexphone.test(formData.memberPhone)){
          errors.memberPhone = "Invalid phone number!!";
        }
        console.log(errors);
        return errors;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMemberFormData({
            ...memberFormData,
            [name]: value
        });
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditMemberData({
            ...editMemberData,
            [name]: value
        });
    }

    const handleUpdateButton = (event) => {
        event.preventDefault();
        console.log(editMemberData);
        const errors = memberValidation({
            "memberName": editMemberData.name,
            "memberEmail": editMemberData.email,
            "memberPhone": editMemberData.phoneNumber,
        });
        if (Object.keys(errors).length === 0) {
            console.log("no errors");
            setErrors({});
            console.log(editMemberData);
            const requestBody = {
                "name": editMemberData.name,
                "email": editMemberData.email,
                "phoneNumber": editMemberData.phoneNumber,
            };
            axios.put(`https://hackmanv7.up.railway.app/leader/editMember/${editMemberData.id}`, requestBody, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            })
            .then((res)=>{
                console.log(res);
                setShowPopup(false);
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
                setShowPopup(false);
                window.location.reload();
            })
        } else {
            setErrors(errors);
        }
    };

    const handleSubmitButton = (event) => {
        event.preventDefault();
        const errors = memberValidation(memberFormData);
        if (Object.keys(errors).length === 0) {
            setErrors({});
            console.log(memberFormData);
            const requestBody = {
                "name": memberFormData.memberName,
                "email": memberFormData.memberEmail,
                "phoneNumber": memberFormData.memberPhone,
            };
            axios.post(`https://hackmanv7.up.railway.app/leader/addMember/${teamDetails.team.id}`, requestBody, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            })
            .then((res)=>{
                console.log(res);
                setShowPopup(false);
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
                setShowPopup(false);
                window.location.reload();
            })
        } else {
            setErrors(errors);
        }
    };

    const handleEditMember = (memberId) => {
        const memberToEdit = teamDetails.team.members.find(member => member.id === memberId);
        console.log(memberToEdit);
        setEditMemberData(memberToEdit);
        setShowEditPopup(true);
    };

    const handleDeleteMember = (memberId) => {
        axios.delete(`https://hackmanv7.up.railway.app/leader/removeMember/${memberId}`, {
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        })
        .then((res)=>{
            console.log(res);
            window.location.reload();
        })
        .catch((error)=>{
            console.log(error);
            window.location.reload();
        })
    };

    const handleFileInputChange = (e) => {
        setPaymentPicFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append("paymentPic", paymentPicFile);

        axios.post("YOUR_UPLOAD_ENDPOINT", formData)
            .then((res) => {
                console.log("Image uploaded");
            })
            .catch((error) => {
                console.error("Error uploading file:", error);
            });
    };

    useEffect(() => {
        if (showPopup) {
            setMemberFormData(initialMemberFormData);
        }
    }, [showPopup]);

    return(
        <div className="profile">
        {teamDetails? (
            <div className="custom-mem-bg kard-memb">
                <h1>Team Details</h1>
                <div className="team-details">
                    <h4>Team Name</h4>
                    <div className="form-item">
                        <input
                        className="form-control"
                        value={teamDetails.team.teamName}
                        readOnly
                        />
                    </div>
                </div>
                <div className="leader-details">
                    <h4>Leader Details</h4>
                        <div className="form-item">
                            <input
                            className="form-control"
                            value={teamDetails.team.leader.name}
                            readOnly
                            />
                        </div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            value={teamDetails.team.leader.email}
                            readOnly
                            />
                        </div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            value={teamDetails.team.leader.phoneNumber}
                            readOnly
                            />
                        </div>
                    </div>
                <div className="members-details">
                    <h4>Member Details</h4>
                        {teamDetails && teamDetails.team.members.map((member, index) => (
                            <div className="member-cont" key={index}>
                                Member {index + 1}: 
                                <div className="form-item">
                                    <input
                                    className="form-control"
                                    value={member.name}
                                    readOnly
                                    />
                                </div>
                                <div className="form-item">
                                    <input
                                    className="form-control"
                                    value={member.email}
                                    readOnly
                                    />
                                </div>
                                <div className="form-item">
                                    <input
                                    className="form-control"
                                    value={member.phoneNumber}
                                    readOnly
                                    />
                                </div>
                                <div className="edit-delete-btns">
                                    <button onClick={() => handleEditMember(member.id)}>Edit</button>
                                    <button onClick={() => handleDeleteMember(member.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    {teamDetails && teamDetails.team.members.length < 3 && (
                        <div className="addMemButtonCont">
                            <button className="addMemButton" onClick={() => setShowPopup(true)}>Add Member</button>
                        </div>
                    )}
                </div>
                <div className="payment-details">
                    <h4>Payment Status</h4>
                    {teamDetails.team.paymentPic ? (
                        <div className="payment-cnt">
                            <div className="form-item">
                                Link
                                <input
                                    className="form-control"
                                    type="text"
                                    value={teamDetails.team.paymentPic}
                                    readOnly
                                />
                            </div>
                            <div className="form-item">
                                Status
                                <input
                                    className="form-control"
                                    type="text"
                                    value={teamDetails.team.payStatus}
                                    readOnly
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="form-item">
                            <input
                                className="form-control"
                                type="file"
                                onChange={handleFileInputChange}
                            />
                            <div className="uploadButtonCon">
                                <button className="uploadButton" onClick={handleFileUpload}>Upload</button>
                            </div>
                        </div>
                    )}
                </div>
                    
                
                
                {showPopup && (
                <div className="popup-container custom-mem-bg kard-memb">
                    <div className="bg-overlay-prof"></div>
                    <div className="popup-memb">
                        <button className="close" onClick={() => setShowPopup(false)}>x</button>
                        <h1 className="head-memb">E n t e r || D e t ai l s</h1>
                        <form className="members-form">
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Name"
                            type="text"
                            name="memberName"
                            value={memberFormData.memberName}
                            onChange={handleInputChange}
                            />
                            <p className="error-handling">{errors.memberName}</p>
                        </div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Email"
                            type="email"
                            name="memberEmail"
                            value={memberFormData.memberEmail}
                            onChange={handleInputChange}
                            />
                            <p className="error-handling">{errors.memberEmail}</p>
                        </div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Phone"
                            type="number"
                            name="memberPhone"
                            value={memberFormData.memberPhone}
                            onChange={handleInputChange}
                            />
                            <p className="error-handling">{errors.memberPhone}</p>
                        </div>
                        <div className="button-bar">
                            <div>
                                <button className="btn" onClick={handleSubmitButton}>Submit</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            )}

            {showEditPopup && (
                <div className="popup-container custom-mem-bg kard-memb">
                    <div className="bg-overlay-prof"></div>
                    <div className="popup-memb">
                        <button className="close" onClick={() => setShowEditPopup(false)}>x</button>
                        <h1 className="head-memb">E d i t || M e m b e r</h1>
                        <form className="members-form">
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Name"
                            type="text"
                            name="name"
                            value={editMemberData.name}
                            onChange={handleEditInputChange}
                            />
                            <p className="error-handling">{errors.memberName}</p>
                        </div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Email"
                            type="email"
                            name="email"
                            value={editMemberData.email}
                            onChange={handleEditInputChange}
                            />
                            <p className="error-handling">{errors.memberEmail}</p>
                        </div>
                        <div className="form-item">
                            <input
                            className="form-control"
                            placeholder="Member Phone"
                            type="number"
                            name="phone"
                            value={editMemberData.phoneNumber}
                            onChange={handleEditInputChange}
                            />
                            <p className="error-handling">{errors.memberPhone}</p>
                        </div>
                        <div className="button-bar">
                            <div>
                                <button className="btn" onClick={handleUpdateButton}>Update</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            )}
            </div>
        ) : (
            <p className="loading-details">Loading team details...</p>
        )}
        </div>
        
    )
};

export default Profile;