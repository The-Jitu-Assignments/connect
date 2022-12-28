import React from 'react'

const AdminForm = ({ userDetails, handleChange }) => {
  return (
    <div>
      <div className='second-form_item'>
        <label>Name</label>
        <input 
          type={"text"} 
          value={userDetails.name}
          name='name'
          placeholder='Enter your name'
          onChange={handleChange}
        />
      </div>
      <div className='second-form_item'>
        <label>Password</label>
        <input 
          type={"text"} 
          value={userDetails.password}
          name='password'
          placeholder='Enter your password'
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default AdminForm;