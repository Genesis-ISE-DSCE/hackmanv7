import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import React, { Component , useState, useEffect} from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar'
import Team from '../src/Components/Registration/TeamName';
// import About from "./Components/About";
import ProfilePage from "./Pages/ProfilePage"
import RegistrationPage from "./Pages/RegistrationPage";
import Members from "./Components/Registration/Members";
import Payment from "./Components/Registration/Payment";
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import AdminControl from "./Components/AdminPanel/AdminControl";


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
    <>
 <BrowserRouter>
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/team" element={<Team/>} />        
               
        <Route path="/payment" element={<Payment/>} />   
        <Route path="/admin" element={<AdminLogin updateIsAuthenticated={updateIsAuthenticated} />} />
        <Route path="/admincontrol" element={isAuthenticated ? <AdminControl isAuthenticated={isAuthenticated} updateIsAuthenticated={updateIsAuthenticated}/> : <Navigate to="/admin" />}/>
        {/* <Route path="/page" element={<Page />} />
        <Route path="/rulebook/:id" element={<RuleBook />} />
        <Route path="/massmail" element={<MassMail />} />
        <Route path="/confetti" element={<ConfettiComp />} />
        <Route path="/registrationList" element={<RegisterationList />} /> */}
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
