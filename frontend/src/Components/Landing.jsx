import React from 'react'
import img from "../assets/cityscape-1.png"
import img2 from "../assets/cityscape-1.png"
import img3 from "../assets/cityscape-1.png"
import '../App.css'
import About from './About'


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
    <div>
    <div className="containz">
      <section onWheel={handleScroll} className='elem'>
        <div className="overlay"></div>
        <img src={img} alt="" srcset="" style={{height:"100vh",width:"100vw",objectFit:"cover"}}></img> 
      </section>
      <section onWheel={handleScroll} className='elem'>
      <div className="overlay"></div>
      <img src={img2} alt="" srcset=""  style={{height:"100vh",width:"100vw",objectFit:"cover"}}/> 
      </section>
      {/* <section onWheel={handleScroll} className='elem'>
      <img src={img3} alt="" srcset="" style={{height:"100vh",width:"100vw",objectFit:"cover"}}/>
      <h1 style={{height:"100vh",width:"100vw",objectFit:"cover"}}>Page Three</h1>
      </section> */}
      </div>

    </div>
  )
}

export default Landing
