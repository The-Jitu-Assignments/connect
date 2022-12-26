import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='login-title'>
          <h2 onClick={() => navigate('/')}>EquiKonnect</h2>
          <div>
            <span className='login-title_btn active'>Login</span>
            <span className='login-title_btn'>Register</span>
          </div>
        </div>
        <h3>Sign In</h3>
        <div className='login-form_item'>
          <label>Email</label>
          <input type="email" placeholder='email address' />
        </div>
        <div className='login-form_item'>
          <label>Password</label>
          <input type="password" placeholder='password' />
        </div>
        <button className='login-btn'>Login</button>
      </div>
    </div>
  )
}

export default Login