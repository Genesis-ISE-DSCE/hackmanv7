import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

// const realusername = process.env.REACT_APP_USERNAME;
// const realpassword = process.env.EACT_APP_PASSWORD;

function AdminLogin({ updateIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    if (username === 'sayanur' && password === 'whyareyoulikethis') {
      updateIsAuthenticated(true);
      navigate("/admincontrol");
    } else {
      setErrorMessage('Wrong credentials');
    }
  };

  return (
    <div id='admin' className='custom-reg-bg textfonts d-flex justify-content-center align-items-start'>
      <div className='card p-4 rounded-lg bg-gray-800 w-75-lg kard '>
        <h1 className='text-center font-bold text-3xl' style={{ color: '#fff' }}>
          Admin
        </h1>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form className='my-3' onSubmit={handleLogin}>
          <div className='mb-3'>
            <input
              className='form-control'
              placeholder='Username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <input
              className='form-control'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='d-flex justify-content-between'>
            <button type='submit' className='btn  w-45'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

