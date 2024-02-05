import React from "react"
import {Link} from "react-router-dom"
import '../App.css'
import "../Css/About.css"


function Navbar()
{

    const handleClick=(item)=>
    {
        const element=document.getElementById("item");

        if(element)
        {
            element.scrollIntoView({behavior:"smooth"});
        }
        
    }
    return (
        <nav className="navbar navbar-expand-lg d-flex align-items-center " style={{ height: "auto", backgroundColor: "#4A252C" }}>
          <a href="/">
            <div className="heading fs-3 mx-3 mx-md-5 float-start">HACKMAN v7</div>
          </a>
          <button className="navbar-toggler my-2 mx-3" style={{backgroundColor:"#D7BD7E"}}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
            <ul className="list-unstyled d-flex flex-column flex-md-row fs-4 gap-md-2 gap-lg-4 text-md-sm my-3 border-0 mt-4" style={{ fontFamily: "pixeloidsansbold" }}>
              <li className="mx-2 ">
                <Link className="navbar-ul" to="/" onClick={() => handleClick("landing")}>Home</Link>
              </li>
              <li className="mx-2">
                <Link className="navbar-ul" to="/#about" onClick={() => handleClick("about")}>About</Link>
              </li>
              <li className="mx-2">
                <Link className="navbar-ul" to="/#events" onClick={() => handleClick("events")}>Events</Link>
              </li>
              <li className="mx-2">
                <Link className="navbar-ul" to="/#faqs" onClick={() => handleClick("faqs")}>Faqs</Link>
              </li>
              <li className="mx-2">
                <Link className="navbar-ul" to="/#schedule" onClick={() => handleClick("schedule")}>Schedule</Link>
              </li>
              <li className="mx-2">
                <Link className="navbar-ul" to="/#sponsors" onClick={() => handleClick("sponsors")}>Sponsors</Link>
              </li>
              <li className="mx-2">
                <Link className="navbar-ul" to="/#registration" onClick={() => handleClick("registration")}>Register</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
      
}

export default Navbar;