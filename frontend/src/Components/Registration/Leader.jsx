import React from 'react'
import CityScape from "../../assets/cityscape-3.png";
import "./Register.css"

function Leader() {
  return (
    <div id='registration' className='custom-height all d-flex justify-content-center align-items-start' style={{backgroundImage: `url(${CityScape})`, backgroundSize: "cover"}}>
    <div className="card p-4 rounded-lg bg-gray-800 w-75-lg kard ">
        <h1 className="text-center font-bold text-3xl" style={{color: "#D7BD7E"}}>Register</h1>
        <form className="my-3">
            <div className="mb-3">
                <input className="form-control" placeholder="Leader Name" type="text" />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Leader Email" type="email" />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Leader Phone" type="number" />
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn  w-45">Back</button>
                <button className="btn  w-45">Next</button>
            </div>
        </form>
    </div>
</div>

  )
}

export default Leader
