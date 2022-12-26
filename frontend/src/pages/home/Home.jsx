import React from 'react'
import Header from '../../components/header/Header'
import './home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='home-main'>Main</div>
      <div>Footer</div>
    </div>
  )
}

export default Home