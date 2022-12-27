import React from 'react';
import './Second.css';
import { BiArrowBack } from 'react-icons/bi'

const Second = ({ userDetails, handlePrevious }) => {
  return (
    <div>
      <div className='second-title'>
        <div className='second-back' onClick={handlePrevious}>
          <BiArrowBack />
          <span>Back</span>
        </div>
        <div>
          <div>Email</div>
          <div>Admin</div>
        </div>
      </div>
      <div>Form</div>
    </div>
  )
}

export default Second