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
    password: '',
    phoneNumber: '',
    county: '',
    branchName: '',
    school: '',
    schoolLevel: 'University',
    course: '',
    period: '',
    completionStatus: 'inSession'
  })

  const handlePrevious = () => {
    setPage(page - 1)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((userDetails) => ({
      ...userDetails,
      [name]: value
    }))
  }

  const multiRegistrationComponent = () => {
    switch (page) {
      case 0:
        return <First userDetails={userDetails} handleChange={handleChange} />;
      case 1:
        return <Second userDetails={userDetails} handleChange={handleChange} handlePrevious={handlePrevious} />
      default:
        return <First userDetails={userDetails} handleChange={handleChange} />
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
        <button onClick={handleSubmit}>
          {page === 0 ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  )
}

export default Register;