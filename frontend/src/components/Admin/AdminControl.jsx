import React, { useState } from "react";
import SessionTimer from "./SessionTimer";
import "../../css/admin.css";

const AdminControl = ({ isAuthenticated, updateIsAuthenticated }) => {

    if (!isAuthenticated) {
        return <Navigate to="/admin" />;
    }

    const initialTeams = [
        { id: 1, name: "Team 1", leaderName: "Leader 1", email: "leader1@example.com", phone: "1234567890", paymentStatus: "PAID", githubLink: "https://github.com/user1" },
        { id: 2, name: "Team 2", leaderName: "Leader 2", email: "leader2@example.com", phone: "2345678901", paymentStatus: "PENDING", githubLink: "https://github.com/user2" },
        { id: 3, name: "Team 3", leaderName: "Leader 3", email: "leader3@example.com", phone: "3456789012", paymentStatus: "PAID", githubLink: "https://github.com/user3" },
        { id: 4, name: "Team 4", leaderName: "Leader 4", email: "leader4@example.com", phone: "4567890123", paymentStatus: "PENDING", githubLink: "https://github.com/user4" },
        { id: 5, name: "Team 5", leaderName: "Leader 5", email: "leader5@example.com", phone: "5678901234", paymentStatus: "PAID", githubLink: "https://github.com/user5" },
        { id: 6, name: "Team 6", leaderName: "Leader 6", email: "leader6@example.com", phone: "6789012345", paymentStatus: "PENDING", githubLink: "https://github.com/user6" },
        { id: 7, name: "Team 7", leaderName: "Leader 7", email: "leader7@example.com", phone: "7890123456", paymentStatus: "PAID", githubLink: "https://github.com/user7" },
        { id: 8, name: "Team 8", leaderName: "Leader 8", email: "leader8@example.com", phone: "8901234567", paymentStatus: "PENDING", githubLink: "https://github.com/user8" },
        { id: 9, name: "Team 9", leaderName: "Leader 9", email: "leader9@example.com", phone: "9012345678", paymentStatus: "PAID", githubLink: "https://github.com/user9" },
        { id: 10, name: "Team 10", leaderName: "Leader 10", email: "leader10@example.com", phone: "0123456789", paymentStatus: "PENDING", githubLink: "https://github.com/user10" },
        { id: 11, name: "Team 11", leaderName: "Leader 11", email: "leader11@example.com", phone: "9876543210", paymentStatus: "PAID", githubLink: "https://github.com/user11" },
        { id: 12, name: "Team 12", leaderName: "Leader 12", email: "leader12@example.com", phone: "8765432109", paymentStatus: "PENDING", githubLink: "https://github.com/user12" },
        { id: 13, name: "Team 13", leaderName: "Leader 13", email: "leader13@example.com", phone: "7654321098", paymentStatus: "PAID", githubLink: "https://github.com/user13" },
        { id: 14, name: "Team 14", leaderName: "Leader 14", email: "leader14@example.com", phone: "6543210987", paymentStatus: "PENDING", githubLink: "https://github.com/user14" },
        { id: 15, name: "Team 15", leaderName: "Leader 15", email: "leader15@example.com", phone: "5432109876", paymentStatus: "PAID", githubLink: "https://github.com/user15" },
        { id: 16, name: "Team 16", leaderName: "Leader 16", email: "leader16@example.com", phone: "4321098765", paymentStatus: "PENDING", githubLink: "https://github.com/user16" },
        { id: 17, name: "Team 17", leaderName: "Leader 17", email: "leader17@example.com", phone: "3210987654", paymentStatus: "PAID", githubLink: "https://github.com/user17" },
        { id: 18, name: "Team 18", leaderName: "Leader 18", email: "leader18@example.com", phone: "2109876543", paymentStatus: "PENDING", githubLink: "https://github.com/user18" },
        { id: 19, name: "Team 19", leaderName: "Leader 19", email: "leader19@example.com", phone: "1098765432", paymentStatus: "PAID", githubLink: "https://github.com/user19" },
        { id: 20, name: "Team 20", leaderName: "Leader 20", email: "leader20@example.com", phone: "0987654321", paymentStatus: "PENDING", githubLink: "https://github.com/user20" },
        { id: 21, name: "Team 21", leaderName: "Leader 21", email: "leader21@example.com", phone: "9876543210", paymentStatus: "PAID", githubLink: "https://github.com/user21" },
        { id: 22, name: "Team 22", leaderName: "Leader 22", email: "leader22@example.com", phone: "8765432109", paymentStatus: "PENDING", githubLink: "https://github.com/user22" },
        { id: 23, name: "Team 23", leaderName: "Leader 23", email: "leader23@example.com", phone: "7654321098", paymentStatus: "PAID", githubLink: "https://github.com/user23" },
        { id: 24, name: "Team 24", leaderName: "Leader 24", email: "leader24@example.com", phone: "6543210987", paymentStatus: "PENDING", githubLink: "https://github.com/user24" },
        { id: 25, name: "Team 25", leaderName: "Leader 25", email: "leader25@example.com", phone: "5432109876", paymentStatus: "PAID", githubLink: "https://github.com/user25" },
        { id: 26, name: "Team 26", leaderName: "Leader 26", email: "leader26@example.com", phone: "4321098765", paymentStatus: "PENDING", githubLink: "https://github.com/user26" },
        { id: 27, name: "Team 27", leaderName: "Leader 27", email: "leader27@example.com", phone: "3210987654", paymentStatus: "PAID", githubLink: "https://github.com/user27" },
        { id: 28, name: "Team 28", leaderName: "Leader 28", email: "leader28@example.com", phone: "2109876543", paymentStatus: "PENDING", githubLink: "https://github.com/user28" },
        { id: 29, name: "Team 29", leaderName: "Leader 29", email: "leader29@example.com", phone: "1098765432", paymentStatus: "PAID", githubLink: "https://github.com/user29" },
        { id: 30, name: "Team 30", leaderName: "Leader 30", email: "leader30@example.com", phone: "0987654321", paymentStatus: "PENDING", githubLink: "https://github.com/user30" }
    ];

    const [teams, setTeams] = useState(initialTeams);
    const [isEditing, setIsEditing] = useState(false);
    const [newTeamName, setNewTeamName] = useState("");
    const [newLeaderName, setNewLeaderName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newPaymentStatus, setNewPaymentStatus] = useState("PENDING");
    const [newglink, setNewGLink] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [filterPaymentStatus, setFilterPaymentStatus] = useState("");

    const [showConfirmAdd, setShowConfirmAdd] = useState(false);
    const [showConfirmRemove, setShowConfirmRemove] = useState(false);
    const [teamToRemove, setTeamToRemove] = useState(null);
    const [showConfirmToggle, setShowConfirmToggle] = useState(false);
    const [teamToToggle, setTeamToToggle] = useState(null);


    const handleAddTeam = () => {
        setShowConfirmAdd(true);
    };

    const confirmAddTeam = () => {
        const newTeam = {
            id: teams.length + 1,
            name: newTeamName,
            leaderName: newLeaderName,
            email: newEmail,
            phone: newPhone,
            paymentStatus: newPaymentStatus,
        };
        setTeams([...teams, newTeam]);
        setShowConfirmAdd(false);
        resetForm();
    };

    const cancelAddTeam = () => {
        setShowConfirmAdd(false);
        resetForm();
    };

    const handleRemoveTeam = (id) => {
        setTeamToRemove(id);
        setShowConfirmRemove(true);
    };

    const confirmRemoveTeam = () => {
        const updatedTeams = teams.filter((team) => team.id !== teamToRemove);
        const rearrangedTeams = updatedTeams.map((team, index) => ({
            ...team,
            id: index + 1
        }));

        setTeams(rearrangedTeams);
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
        const updatedTeams = teams.map((team) =>
            team.id === teamToToggle
                ? { ...team, paymentStatus: team.paymentStatus === "PAID" ? "PENDING" : "PAID" }
                : team
        );
        setTeams(updatedTeams);
        setShowConfirmToggle(false);
    };

    const cancelTogglePaymentStatus = () => {
        setShowConfirmToggle(false);
    };

    const resetForm = () => {
        setNewTeamName("");
        setNewLeaderName("");
        setNewEmail("");
        setNewPhone("");
        setNewPaymentStatus("PENDING");
        setNewGLink("");
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilter = (e) => {
        setFilterPaymentStatus(e.target.value);
    };

    const filteredTeams = teams.filter((team) => {
        const matchesQuery = team.id.toString().includes(searchQuery) ||
            team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            team.leaderName.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesPaymentStatus = !filterPaymentStatus || team.paymentStatus === filterPaymentStatus;

        return matchesQuery && matchesPaymentStatus;
    });

    const handleLogout = () => {
        updateIsAuthenticated(false);
    };

    return (
        <div id="admin" className="textfonts d-flex justify-content-center align-items-start">
            <div className="container text-center" style={{ marginTop: "100px" }}>
                <SessionTimer timeoutInMinutes={30} onTimeout={handleLogout} />
                <h1 style={{ fontFamily: "karmatic" }}> ADMIN CONTROL </h1>
                <div className="mt-3">
                    <input
                        type="text"
                        placeholder="Search by Serial No., Name, or Leader"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="form-control mb-2"
                    />
                    <select
                        value={filterPaymentStatus}
                        onChange={handleFilter}
                        className="form-control mb-2"
                    >
                        <option value="">All</option>
                        <option value="PAID">PAID</option>
                        <option value="PENDING">PENDING</option>
                    </select>
                </div>
                <div style={{ marginTop: "25px" }}>
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
                                    <th scope="col">Github Link</th>
                                    {isEditing && <th scope="col">Actions</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTeams.map((team) => (
                                    <tr key={team.id}>
                                        <td>{team.id}</td>
                                        <td>{team.name}</td>
                                        <td>{team.leaderName}</td>
                                        <td>{team.email}</td>
                                        <td>{team.phone}</td>
                                        <td
                                            onClick={() => handleTogglePaymentStatus(team.id)}
                                            style={{
                                                cursor: "pointer",
                                                color: team.paymentStatus === "PAID" ? "green" : "red",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {team.paymentStatus}
                                        </td>
                                        <td>
                                            <a href={team.githubLink}>
                                                <button type="button" className="btn btn-success">Link &#128206;</button>
                                            </a>
                                        </td>
                                        {isEditing && (
                                            <td>
                                                <button onClick={() => handleRemoveTeam(team.id)} className="btn btn-danger btn-sm">Remove</button>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {isEditing ? (
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Team Name"
                                value={newTeamName}
                                onChange={(e) => setNewTeamName(e.target.value)}
                                className="form-control mb-2"
                            />
                            <input
                                type="text"
                                placeholder="Leader Name"
                                value={newLeaderName}
                                onChange={(e) => setNewLeaderName(e.target.value)}
                                className="form-control mb-2"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                className="form-control mb-2"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={newPhone}
                                onChange={(e) => setNewPhone(e.target.value)}
                                className="form-control mb-2"
                            />
                            <select
                                value={newPaymentStatus}
                                onChange={(e) => setNewPaymentStatus(e.target.value)}
                                className="form-control mb-2"
                            >
                                <option value="PAID">PAID</option>
                                <option value="PENDING">PENDING</option>
                            </select>
                            <input
                                type="link"
                                placeholder="Github link"
                                value={newglink}
                                onChange={(e) => setNewGLink(e.target.value)}
                                className="form-control mb-2"
                            />
                            <button style={{ marginBottom: "10px" }} onClick={handleAddTeam} className="btn btn-success mr-2">Add Team</button>
                            <button style={{ marginLeft: "10px", marginBottom: "10px" }} onClick={() => setIsEditing(false)} className="btn btn-secondary">Done Editing</button>
                        </div>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className="btn btn-primary btn-edit">{isEditing ? 'Cancel Editing' : 'Edit'}</button>
                    )}
                    <button style={{ marginLeft: "10px" }} onClick={handleLogout} className="btn btn-danger">Logout</button>

                </div>
            </div>
            <div className={`modal ${showConfirmAdd ? "show" : ""}`} style={{ display: showConfirmAdd ? "block" : "none" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" style={{ color: "black" }}>Confirm Add Team</h5>
                            <button type="button" className="btn-close" onClick={cancelAddTeam}></button>
                        </div>
                        <div className="modal-body" style={{ color: "black" }}>Are you sure you want to add this team?</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={cancelAddTeam}>
                                Cancel
                            </button>
                            <button type="button" className="btn btn-success" onClick={confirmAddTeam}>
                                Add Team
                            </button>
                        </div>
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
                            <button type="button" className="btn btn-secondary" onClick={cancelRemoveTeam}>
                                Cancel
                            </button>
                            <button type="button" className="btn btn-danger" onClick={confirmRemoveTeam}>
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
                            <h5 className="modal-title" style={{ color: "black" }}>Confirm Toggle Payment Status</h5>
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