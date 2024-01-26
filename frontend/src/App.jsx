import { useState } from 'react'
import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import './App.css'

function App() {

  return (
    <>
    <div className="App">
     <HorizontalScroll  pageLock={false}>
     <div  className='main bg'>
      <h1>Home</h1>
     </div>
     <div className='main bg1'>
      <h1>About</h1>
     </div>
     <div className='main bg2'>
      <h1>Schedule</h1>
     </div>
     </HorizontalScroll>
     </div>
    </>
  )
}

export default App
