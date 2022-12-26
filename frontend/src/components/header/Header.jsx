import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <h1>
        EquiKonnect
      </h1>
      <div className='header-auth'>
        <div className='header-login'>Login</div>
        <div className='header-register'>Register</div>
      </div>
    </div>
  )
}

export default Header;