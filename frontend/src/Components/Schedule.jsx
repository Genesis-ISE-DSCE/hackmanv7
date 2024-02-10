import React , {useRef, useState } from 'react';
import CityScape from "../assets/cityscape-3.png";
import Board from "../assets/event-board.png";
import "../Css/Schedule.css";
import Schedule1 from "../assets/schedule-1.png";
import Schedule2 from "../assets/schedule-2.png";
import Schedule3 from "../assets/schedule-3.png";
import Schedule4 from "../assets/schedule-4.png";
import Schedule5 from "../assets/schedule-5.png";
import Schedule6 from "../assets/schedule-6.png";
import Schedule7 from "../assets/schedule-7.png";

const Schedule = () => {
    const itemsRef = useRef(null);
    const [isMouseDown, setIsMouseDown]= useState(false);
    const [startX, setStartX]= useState(0);
    const [scrollLeft, setScrollLeft]= useState(0);

    const events = [
        {id: 1,name: "event1",src: Schedule1},
        {id: 2,name: "event2",src: Schedule2},
        {id: 3,name: "event3",src: Schedule3},
        {id: 4,name: "event4",src: Schedule4},
        {id: 5,name: "event5",src: Schedule5},
        {id: 6,name: "event5",src: Schedule6},
        {id: 7,name: "event5",src: Schedule7},
      ];

      const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - - itemsRef.current.offsetLeft);
        setScrollLeft(itemsRef.current.scrollLeft);
      };

      const handleMouseLeave = () => {
        setIsMouseDown(false);
      }

      const handleMouseMove = (e) => {
        if(!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - itemsRef.current.offsetLeft;
        const walk = (x-startX)*1;
        itemsRef.current.scrollLeft = scrollLeft - walk;
      }

      const handleMouseup = () => {
        setIsMouseDown(false);
      }
    
  return (
    <div id="about" className="custom-height about-con" style={{
        backgroundImage: `url(${CityScape})`,
        color: "white",
        backgroundSize: "cover",
      }}>
       <div
        className="abt-container vh-100 logo"
      >
        <div className="text-center pb-10">
          <img
            src={Board}
            alt="board"
            className="img-fluid boardd ki"
            style={{ width: "20rem" }}
          />

          
           {/* <div className='wrapper'>
            <img className="events" src={Schedule1} alt='event1'></img>
            <img className="events" src={Schedule2} alt='event1'></img>
            <img className="events" src={Schedule3} alt='event1'></img>
            <img className="events" src={Schedule4} alt='event1'></img>
            <img className="events" src={Schedule5} alt='event1'></img>
          </div>  */}

        <div className="chooseImage mt-4"  ref={itemsRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseup}
          onMouseMove={handleMouseMove}>

          {events.map((image) => (
            <div className="image p-4" key={image.id}>
              <div className="eventImage">
                <img src={image.src} alt={image.name} />
              </div>
            </div>
          ))}
        </div>

    
        </div>
      </div>
    </div>
  )
}

export default Schedule;
