import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AdminLogin from '../Components/AdminPanel/AdminLogin';
import "../App.css";

function AdminPage({ setIsLoggedIn }) {
  return (
    <div>
      <div className="background-scroll"></div>
      <div className="content">
          <AdminLogin setIsLoggedIn={setIsLoggedIn} />  
      </div>
    </div>
  );
}

export default AdminPage;
