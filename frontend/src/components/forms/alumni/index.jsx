import React from 'react'

const AlumniForm = ({ userDetails, setUserDetails }) => {
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
      <div className='second-form_item'>
        <label>Phone Number</label>
        <input 
          type={"text"} 
          value={userDetails.phoneNumber}
          name='phoneNumber'
          placeholder='Enter your phone number'
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              [e.target.name]: e.target.value
            })
          }}
        />
      </div>
      <div className='second-form_item'>
        <label>County</label>
        <input 
          type={"text"} 
          value={userDetails.county}
          name='county'
          placeholder='Enter your county of residence e.g Lamu'
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              [e.target.name]: e.target.value
            })
          }}
        />
      </div>
      <div className='second-form_item'>
        <label>Branch Name</label>
        <input 
          type={"text"} 
          value={userDetails.branchName}
          name='branchName'
          placeholder='Enter your equity branch e.g Voi Branch'
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              [e.target.name]: e.target.value
            })
          }}
        />
      </div>
      <div className='second-form_item'>
        <label>School Name</label>
        <input 
          type={"text"} 
          value={userDetails.school}
          name='school'
          placeholder='Enter your school name e.g University of Eldoret'
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              [e.target.name]: e.target.value
            })
          }}
        />
      </div>
      <div className='second-radio radioInputs'>
        <label>School level:</label>
        <div>
          <input 
            type={"radio"} 
            value={"University"} 
            name='schoolLevel' 
            checked={userDetails.schoolLevel === 'University'}
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                [e.target.name]: e.target.value
              })
            }}
          /> University
        </div>
        <div>
          <input 
            type={"radio"} 
            value={"College"} 
            name='schoolLevel' 
            checked={userDetails.schoolLevel === 'College'}
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                [e.target.name]: e.target.value
              })
            }}
          /> College
        </div>
      </div>
      <div className='second-form_item'>
        <label>Course</label>
        <input 
          type={"text"} 
          value={userDetails.course}
          name='course'
          placeholder='Enter course details e.g Computer Science'
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              [e.target.name]: e.target.value
            })
          }}
        />
      </div>
      <div className='second-form_item'>
        <label>Period</label>
        <input 
          type={"number"} 
          value={userDetails.period}
          name='period'
          placeholder='Enter number of years spent in school'
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              [e.target.name]: e.target.value
            })
          }}
        />
      </div>
      <div className='second-radio radioInputs'>
        <label>Completion Status:</label>
        <div>
          <input 
            type={"radio"} 
            value={"inSession"} 
            name='completionStatus' 
            checked={userDetails.completionStatus === 'inSession'}
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                [e.target.name]: e.target.value
              })
            }}
          /> In Session
        </div>
        <div>
          <input 
            type={"radio"} 
            value={"completed"} 
            name='completionStatus' 
            checked={userDetails.completionStatus === 'completed'}
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                [e.target.name]: e.target.value
              })
            }}
          /> Completed
        </div>
        <div>
          <input 
            type={"radio"} 
            value={"dropout"} 
            name='completionStatus' 
            checked={userDetails.completionStatus === 'dropout'}
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                [e.target.name]: e.target.value
              })
            }}
          /> Dropout
        </div>
      </div>
    </div>
  )
}

export default AlumniForm;