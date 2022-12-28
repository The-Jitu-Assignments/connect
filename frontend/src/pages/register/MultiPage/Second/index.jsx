import React from 'react';
import './Second.css';
import { BiArrowBack } from 'react-icons/bi'
import AlumniForm from '../../../../components/forms/alumni';
import AdminForm from '../../../../components/forms/admin';

const Second = ({ userDetails, handlePrevious, handleChange }) => {
  return (
    <div>
      <div className='second-title'>
        <div className='second-back' onClick={handlePrevious}>
          <BiArrowBack />
          <span>Back</span>
        </div>
        <div className='second-userDetails'>
          <div className='second-userDetails_email'>{userDetails.email}</div>
          <div className='second-radio'>
            <div>
              <input 
                type={"radio"} 
                value={"alumni"} 
                name='userStatus' 
                checked={userDetails.userStatus === 'alumni'}
                onChange={handleChange}
              /> Alumni
            </div>
            <div>
              <input 
                type={"radio"} 
                value={"admin"} 
                name='userStatus'
                checked={userDetails.userStatus === 'admin'} 
                onChange={handleChange}
              /> Admin
            </div>
          </div>
        </div>
      </div>
      {userDetails.userStatus === 'alumni' ? ( 
        <AlumniForm userDetails={userDetails} handleChange={handleChange} />
      ) : (
        <AdminForm userDetails={userDetails} handleChange={handleChange} />
      )}
    </div>
  )
}

export default Second;