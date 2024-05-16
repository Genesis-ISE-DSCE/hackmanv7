import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/admin.css';

function AdminLogin({ updateIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'sayanur' && password === 'whyareyoulikethis') {
      updateIsAuthenticated(true);
      navigate("/admincontrol");
    } else {
      setErrorMessage('Wrong credentials');
    }
  };

  return (
    <div>
    <div className='background-scroll'></div>
      <div className='content'>
        <div className='card-container'>
          <div className='card'>
            <h1>Admin</h1>
            {errorMessage && <div className="alert">{errorMessage}</div>}
            <form onSubmit={handleLogin}>
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
              <button type='submit' className='btn'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
