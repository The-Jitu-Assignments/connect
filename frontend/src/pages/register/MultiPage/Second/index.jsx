import React from 'react';
import './Second.css';
import { BiArrowBack } from 'react-icons/bi'

const Second = ({ userDetails, handlePrevious, setUserDetails }) => {
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
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    [e.target.name]: e.target.value
                  })
                }}
              /> Alumni
            </div>
            <div>
              <input 
                type={"radio"} 
                value={"admin"} 
                name='userStatus'
                checked={userDetails.userStatus === 'admin'} 
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    [e.target.name]: e.target.value
                  })
                }}
              /> Admin
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='second-form_item'>
          <label>Name</label>
          <input 
            type={"text"} 
            value={userDetails.name}
            name='name'
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>
        <div className='second-form_item'>
          <label>Name</label>
          <input 
            type={"text"} 
            value={userDetails.name}
            name='name'
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>
        <div className='second-form_item'>
          <label>Name</label>
          <input 
            type={"text"} 
            value={userDetails.name}
            name='name'
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                [e.target.name]: e.target.value
              })
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Second