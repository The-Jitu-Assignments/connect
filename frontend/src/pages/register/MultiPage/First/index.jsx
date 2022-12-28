import React from 'react'

const First = ({ userDetails, handleChange }) => {
  return (
    <div>
      <label>Email</label>
      <input 
        type={"email"} 
        name='email'
        placeholder='Enter your email address' 
        value={userDetails.email}
        onChange={handleChange}
      />
    </div>
  )
}

export default First