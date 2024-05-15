import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import UserLoginPage from './pages/UserLoginPage';
import AdminLogin from "./components/Admin/AdminLogin";
import AdminControl from "./components/Admin/AdminControl";

// Define PrivateRoute component
const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/userlogin" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedValue = localStorage.getItem('isAuthenticated');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const updateIsAuthenticated = (value) => {
    setIsAuthenticated(value);
    if (value) {
      const timeout = setTimeout(() => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
      }, 30 * 60 * 1000);
      return () => clearTimeout(timeout);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/userlogin" element={<UserLoginPage />} />
          <Route path="/profile" element={<PrivateRoute isAuthenticated={isAuthenticated}><ProfilePage /></PrivateRoute>} />
          <Route path="/admin" element={<AdminLogin updateIsAuthenticated={updateIsAuthenticated} />} />
          <Route path="/admincontrol" element={isAuthenticated ? <AdminControl isAuthenticated={isAuthenticated} updateIsAuthenticated={updateIsAuthenticated} /> : <Navigate to="/admin" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
