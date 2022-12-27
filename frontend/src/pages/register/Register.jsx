import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import First from './MultiPage/First';
import Second from './MultiPage/Second';
import './Register.css'

const Register = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    userStatus: 'alumni',
    password: ''
  })

  const multiRegistrationComponent = () => {
    switch (page) {
      case 0:
        return <First />;
      case 1:
        return <Second />
      default:
        return <First />
    }
  };

  const handleSubmit = () => {
    setPage(page + 1)
  };

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
        {multiRegistrationComponent()}
        {page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>}
        <button onClick={handleSubmit}>
          {page === 0 ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  )
}

export default Register;