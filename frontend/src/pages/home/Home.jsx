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
          <div className='home-left_description'>
            EquiKonnect aim is to help equity alumni remain connected
            by allowing them to share their experiences, achievements and progress.
            It will also be a nice platform which equity leaders can use to share any 
            upcoming events, hackathons and resources which can help alumni be upto to date.
          </div>
          <div className='home-btn'>
            <button>Get Started</button>
          </div>
        </div>
        <div className='home-main_right'>
          <img src='./equikonnect.jpg' alt='equikonnect' />
        </div>
      </div>
      <div>Footer</div>
    </div>
  )
}

export default Home