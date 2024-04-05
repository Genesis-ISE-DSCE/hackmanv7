import React , {useRef, useState } from 'react';
import CityScape from "../assets/cityscape-3.png";
import Board from "../assets/event-board.png";
import "../Css/Schedule.css";
import Schedule1 from "../assets/event1.png";
import Schedule2 from "../assets/event-2.png";
import Schedule3 from "../assets/event3.png";
import Schedule4 from "../assets/event-4.png";
import Schedule5 from "../assets/event-5.png";

const Schedule = () => {
    const itemsRef = useRef(null);
    const [isMouseDown, setIsMouseDown]= useState(false);
    const [startX, setStartX]= useState(0);
    const [scrollLeft, setScrollLeft]= useState(0);

    const events = [
        {
          id: 1,
          name: "event1",
          src: Schedule1,
        },
        {
          id: 2,
          name: "event2",
          src: Schedule2,
        },
        {
            id: 3,
            name: "event3",
            src: Schedule3,
          },
          {
            id: 4,
            name: "event4",
            src: Schedule4,
          },
          {
            id: 5,
            name: "event5",
            src: Schedule5,
          },
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
        <div className="text-center">
          <img
            src={Board}
            alt="board"
            className="img-fluid boardd ki"
            style={{ width: "20rem" }}
          />
          <h1
            className="heading pt-5"
            style={{ letterSpacing: "0.5px" }}
          >
            HACKMAN V7
          </h1>
          <h4 className="dates pb-4 pt-2">
            Date : June 24th - 25th
          </h4>

           {/* <div className='wrapper'>
            <img src={Schedule1} alt='event1'></img>
            <img src={Schedule2} alt='event1'></img>
            <img src={Schedule3} alt='event1'></img>
            <img src={Schedule4} alt='event1'></img>
            <img src={Schedule5} alt='event1'></img>
          </div> */}

          <div className="chooseImage" ref={itemsRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseup}
          onMouseMove={handleMouseMove}>

          {events.map((image) => (
            <div className="image" key={image.id}>
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
