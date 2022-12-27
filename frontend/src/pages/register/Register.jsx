import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className='register-container'>
      <div className='register-form'>
        <div className='login-title'>
          <h2 onClick={() => navigate('/')}>EquiKonnect</h2>
          <div>
            <span className='login-title_btn' onClick={() => navigate('/login')}>Login</span>
            <span className='login-title_btn active'>Register</span>
          </div>
        </div>
        <h3>Sign Up</h3>
      </div>
    </div>
  )
}

export default Register;