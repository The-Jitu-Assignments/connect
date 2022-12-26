import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='login-title'>
          <h2>EquiKonnect</h2>
          <div>
            <span className='login-title_btn active'>Login</span>
            <span className='login-title_btn'>Register</span>
          </div>
        </div>
        <h3>Sign In</h3>
        <div>
          Input 1
        </div>
        <div>
          Input 2
        </div>
      </div>
    </div>
  )
}

export default Login