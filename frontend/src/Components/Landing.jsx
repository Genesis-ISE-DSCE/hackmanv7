import React from 'react'
import newBg from "../assets/new-bg.png"
import '../App.css'
import About from './About'
import mascot from "../assets/mascot.png"
import Typewriter from 'typewriter-effect/dist/core';

// new Typewriter('#typewriter', {
//   strings: ['Hackman', 'v7'],
//   autoStart: true,
// });

function Landing() {

  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };
 
  return (
    <div id='land' className='custom-height'>
    <div className="containz ">
      <div className="">
      <h1  className='karma' >HACKMAN v7</h1>
      <h1 className='karma2 sh'>May 24th-25th</h1>
      </div>
      <section onWheel={handleScroll} className='elem'>
        <div className="overlay"></div>
        <img src={newBg} alt="" srcset="" style={{height:"120vh",width:"100vw",objectFit:"cover"}}></img> 
      </section>
      <section onWheel={handleScroll} className='elem'>
      <div className="overlay"></div>
      <img src={newBg} alt="" srcset=""  style={{height:"120vh",width:"100vw",objectFit:"cover"}}/> 
      </section>
     <div className="mascot ">
        <picture  alt="mascot" >
           <img height={250} width={240} src={mascot} loading="lazy" alt="mascot"/>
        </picture>
      </div>
      </div>
      

    </div>
  )
}

export default Landing
