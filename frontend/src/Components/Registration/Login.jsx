import React from 'react'
import { Link } from 'react-router-dom';
import "./Register.css"

function Login() {
  return (
    <div id='registration' className='custom-reg-bg all d-flex justify-content-center align-items-start' >
    <div className="card p-4 rounded-lg bg-gray-800 w-75-lg kard ">
        <h1 className="text-center font-bold text-3xl" style={{color: "#D7BD7E"}}>Login</h1>
        <form className="my-3">
            <div className="mb-3">
                <input className="form-control" placeholder="Username" type="text" />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Password" type="email" />
            </div>
            <div className="d-flex justify-content-between">
                <button type='submit' className="btn  w-45">Login</button>   
            </div>
        </form>
    </div>
</div>

  )
}

export default Login
