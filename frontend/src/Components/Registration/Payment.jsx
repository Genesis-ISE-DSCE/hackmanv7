import React from 'react'
import { Link } from 'react-router-dom';
import "./Register.css"

function Payment() {
  return (
    <div  className='custom-reg-bg all d-flex justify-content-center align-items-start' >
    <div className="card p-4 rounded-lg bg-gray-800 w-75-lg kard ">
        <h1 className="text-center font-bold text-3xl" style={{color: "#fff"}}>Payment</h1>
        <form className="my-3">
            <div className="mb-3">
                <input className="form-control" placeholder="Transaction Id" type="text" />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Upi id" type="text" />
            </div>
            <div className="d-flex justify-content-between">
                <Link to="/members"><button className="btn  w-45" style={{textDecoration:"none"}}>Back</button></Link>
                <Link to="/"><button className="btn  w-45" style={{textDecoration:"none"}}>Next</button></Link>
               
            </div>
        </form>
    </div>
</div>

  )
}

export default Payment
