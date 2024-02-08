import React from 'react'
import CityScape from "../../assets/cityscape-3.png";
import "./Register.css"

function Leader() {
  return (
    <div className='custom-height all d-flex justify-content-center  align-items-start ' style={{backgroundImage: `url(${CityScape})`,backgroundSize: "cover"}}>
        <div className="card px-8 py-6 rounded-lg bg-gray-800 w-25 kard ">
      <h1 className="text-center font-bold text-3xl text-white ">Login</h1>
      <form className="my-6">
        <div className="mb-3">
          <input className="form-control" placeholder="Leader Name" type="text" />
        </div>
        <div className="mb-3">
          <input className="form-control" placeholder="Leader Email" type="email" />
        </div>
        <div className="mb-3">
          <input className="form-control" placeholder="Leader Phone" type="number" />
        </div>
        <div className="">
        <button className="btn btn-dark w-30 mt-3 mx-3">Back</button>
        <button className="btn btn-dark w-30 mt-3 mx-3">Next</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Leader
