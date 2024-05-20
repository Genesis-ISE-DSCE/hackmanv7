import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/admin.css";
import { useNavigate } from 'react-router-dom';

const AdminControl = () => {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterPaymentStatus, setFilterPaymentStatus] = useState("");
    const [showConfirmRemove, setShowConfirmRemove] = useState(false);
    const [teamToRemove, setTeamToRemove] = useState(null);
    const [showConfirmToggle, setShowConfirmToggle] = useState(false);
    const [teamToToggle, setTeamToToggle] = useState(null);
    const jwtAdminToken = sessionStorage.getItem("jwtAdminToken");

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                axios.get(`https://hackmanv7-production.up.railway.app/admin/getAllTeams`, {
                headers: {
                    Authorization: `Bearer ${jwtAdminToken}`
                }
                })
                .then((res) => {
                    console.log(res.data.teams);
                    setTeams(res.data.teams);
                })
                .catch((err) => {
                    console.log("Error fetching team details:", err);
                });
            } catch (error) {
                console.error("Error fetching teams:", error);
            }
        };

        fetchTeams();
    }, [jwtAdminToken]);

    const handleRemoveTeam = (id) => {
        setTeamToRemove(id);
        setShowConfirmRemove(true);
    };

    const confirmRemoveTeam = () => {
        try {
            axios.delete(`https://hackmanv7-production.up.railway.app/admin/deleteTeam/${teamToRemove}`, {
                headers: {
                    Authorization: `Bearer ${jwtAdminToken}`
                }
            })
            .then((res) => {
                console.log(res.data);
                window.location.reload();
            })
            .catch((err) => {
                console.log("Error fetching team details:", err);
            })
        } catch (error) {
            console.error("Error removing team:", error);
        }
        setShowConfirmRemove(false);
    };

    const cancelRemoveTeam = () => {
        setShowConfirmRemove(false);
    };

    const handleTogglePaymentStatus = (id) => {
        setTeamToToggle(id);
        setShowConfirmToggle(true);
    };

    const confirmTogglePaymentStatus = () => {
        try {
            axios.put(`https://hackmanv7-production.up.railway.app/admin/updatePaymentStatus/${teamToToggle}`, null, {
                headers: {
                    Authorization: `Bearer ${jwtAdminToken}`
                }
            })
            .then((res) => {
                console.log(res.data);
                window.location.reload();
            })
            .catch((err) => {
                console.log("Error fetching team details:", err);
            })
        } catch (error) {
            console.error("Error updating payment status:", error);
        }
        setShowConfirmToggle(false);
    };

    const cancelTogglePaymentStatus = () => {
        setShowConfirmToggle(false);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilter = (e) => {
        setFilterPaymentStatus(e.target.value);
    };

    const filteredTeams = teams.filter((team) => {
        const matchesQuery = team.id.includes(searchQuery) ||
            team.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            team.leader.name.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesPaymentStatus = !filterPaymentStatus || (team.payStatus ? "PAID" : "PENDING") === filterPaymentStatus;

        return matchesQuery && matchesPaymentStatus;
    });

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/adminlogin");
    };

    return (
        <div id="admin" className="">
            <div className="admin-cnt">
                <h1> ADMIN CONTROL </h1>
                <div className="admin-buttons-cnt">
                {isEditing ? (
                            <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Done Editing</button>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className="btn btn-primary btn-edit">{isEditing ? 'Cancel Editing' : 'Edit'}</button>
                    )}
                    <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </div>
                <div className="filter-forms">
                    <input
                        type="text"
                        placeholder="Search by Team Name, or Leader"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="form-control"
                    />
                    <select
                        value={filterPaymentStatus}
                        onChange={handleFilter}
                        className="form-control"
                    >
                        <option value="">All</option>
                        <option value="PAID">PAID</option>
                        <option value="PENDING">PENDING</option>
                    </select>
                </div>
                <div>
                    <div className="table-responsive">
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Serial No.</th>
                                    <th scope="col">Team Name</th>
                                    <th scope="col">Leader Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Payment Status</th>
                                    <th scope="col">Payment Link</th>
                                    <th scope="col">Github Link</th>
                                    {isEditing && <th scope="col">Actions</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTeams.map((team, index) => (
                                    <tr key={team.id}>
                                        <td>{index + 1}</td>
                                        <td>{team.teamName}</td>
                                        <td>{team.leader.name}</td>
                                        <td>{team.leader.email}</td>
                                        <td>{team.leader.phoneNumber}</td>
                                        <td
                                            onClick={() => handleTogglePaymentStatus(team.id)}
                                            style={{
                                                cursor: "pointer",
                                                color: team.payStatus ? "green" : "red",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {team.payStatus ? "PAID" : "PENDING"}
                                        </td>
                                        <td>
                                            {team.paymentPic ? (
                                                <a href={team.paymentPic} target="_blank" rel="noreferrer" className="link-git">
                                                    Link &#128206;
                                                </a>
                                            ) : (
                                                "N/A"
                                            )}
                                        </td>
                                        <td>
                                            {team.githubLink ? (
                                                <a href={team.githubLink} target="_blank" rel="noreferrer" className="link-git">
                                                    Link &#128206;
                                                </a>
                                            ) : (
                                                "N/A"
                                            )}
                                        </td>
                                        {isEditing && (
                                            <td>
                                                <button onClick={() => handleRemoveTeam(team.id)} className="remove-btn">Remove</button>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={`modal ${showConfirmRemove ? "show" : ""}`} style={{ display: showConfirmRemove ? "block" : "none" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" style={{ color: "black" }}>Confirm Remove Team</h5>
                            <button type="button" className="btn-close" onClick={cancelRemoveTeam}></button>
                        </div>
                        <div className="modal-body" style={{ color: "black" }}>Are you sure you want to remove this team?</div>
                        <div className="modal-footer">
                            <button type="button" className="btn mbut btn-secondary" onClick={cancelRemoveTeam}>
                                Cancel
                            </button>
                            <button type="button" className="btn mbut btn-danger" onClick={confirmRemoveTeam}>
                                Remove Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal ${showConfirmToggle ? "show" : ""}`} style={{ display: showConfirmToggle ? "block" : "none" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" style={{ color: "black" }}>Confirm Payment Status</h5>
                            <button type="button" className="btn-close" onClick={cancelTogglePaymentStatus}></button>
                        </div>
                        <div className="modal-body" style={{ color: "black" }}>Are you sure you want to change the payment status?</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={cancelTogglePaymentStatus}>
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary" onClick={confirmTogglePaymentStatus}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminControl;