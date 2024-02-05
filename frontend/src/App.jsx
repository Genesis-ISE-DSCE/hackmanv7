import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar'
function App() {
  return (
    <>
 <BrowserRouter>
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* <Route path="/page" element={<Page />} />
        <Route path="/registration" element={<RegistrationForm />} />
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
