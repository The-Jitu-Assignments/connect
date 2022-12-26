import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header-container'>
      <h1>
        EquiKonnect
      </h1>
      <div className='header-auth'>
        <div className='header-login' onClick={() => navigate('/login')}>Login</div>
        <div className='header-register'>Register</div>
      </div>
    </div>
  )
}

export default Header;