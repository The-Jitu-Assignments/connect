import React from 'react'

const AdminForm = ({ userDetails, setUserDetails }) => {
  return (
    <div>
      <div className='second-form_item'>
        <label>Name</label>
        <input 
          type={"text"} 
          value={userDetails.name}
          name='name'
          placeholder='Enter your name'
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              [e.target.name]: e.target.value
            })
          }}
        />
      </div>
      <div className='second-form_item'>
        <label>Password</label>
        <input 
          type={"text"} 
          value={userDetails.password}
          name='password'
          placeholder='Enter your password'
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              [e.target.name]: e.target.value
            })
          }}
        />
      </div>
    </div>
  )
}

export default AdminForm;