import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar'
import Team from '../src/Components/Registration/TeamName';
// import About from "./Components/About";
import ProfilePage from "./Pages/ProfilePage"
import RegistrationPage from "./Pages/RegistrationPage";
import Members from "./Components/Registration/Members";
import Payment from "./Components/Registration/Payment";
function App() {
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
        <Route path="/members" element={<Members/>} />        
        <Route path="/payment" element={<Payment/>} />        
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
