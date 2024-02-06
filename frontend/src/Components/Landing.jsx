import React from 'react'
import img from "../assets/cityscape-1.png"
import img2 from "../assets/cityscape-1.png"
import img3 from "../assets/cityscape-1.png"
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
    <div id='land'>
    <div className="containz ">
      <div className="">
      <h1  className='karma' >HACKMAN v7</h1>
      <h1 className='karma2 sh'>June 24th-25th</h1>
      </div>
      <section onWheel={handleScroll} className='elem'>
        <div className="overlay"></div>
        <img src={img} alt="" srcset="" style={{height:"100vh",width:"100vw",objectFit:"cover"}}></img> 
      </section>
      <section onWheel={handleScroll} className='elem'>
      <div className="overlay"></div>
      <img src={img2} alt="" srcset=""  style={{height:"100vh",width:"100vw",objectFit:"cover"}}/> 
      </section>
     {/* <div className="mascot ">
        <picture  alt="mascot" >
           <img height={250} width={240} src={mascot} loading="lazy" alt="mascot"/>
        </picture>
      </div> */}
      </div>
      

    </div>
  )
}

export default Landing
