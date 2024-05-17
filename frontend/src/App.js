import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import UserLoginPage from './pages/UserLoginPage';
import PrivateRoute from './components/PrivateRoute';
import AdminPage from './pages/AdminPage';
import AdminLoginPage from './pages/AdminLoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/userlogin" element={<UserLoginPage />} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
