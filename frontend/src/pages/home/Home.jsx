import React from 'react'
import Header from '../../components/header/Header'
import './home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='home-main'>
        <div className='home-main_left'>
          <div className='home-left_title'>
            Let's Remain Connected.
          </div>
          <div>Description</div>
        </div>
        <div className='home-main_right'>Right</div>
      </div>
      <div>Footer</div>
    </div>
  )
}

export default Home