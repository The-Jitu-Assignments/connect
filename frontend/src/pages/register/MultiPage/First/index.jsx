import React from 'react'

const First = ({ userDetails, setUserDetails }) => {
  return (
    <div>
      <label>Email</label>
      <input 
        type={"email"} 
        name='email'
        placeholder='Enter your email address' 
        value={userDetails.email}
        onChange={(e) => {
          setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
          })
        }}
      />
    </div>
  )
}

export default First