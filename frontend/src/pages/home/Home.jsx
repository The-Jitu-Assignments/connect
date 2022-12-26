import React from 'react'
import Header from '../../components/header/Header'
import './home.css'
import { SiGoogleanalytics } from 'react-icons/si';
import { BsChatRightTextFill } from 'react-icons/bs';
import { FaHandshake, FaCreativeCommonsShare } from 'react-icons/fa';

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
      <div className='home-services'>
        <h2>Services</h2>
        <div className='home-cards'>
          <div className="home-services_card">
            <div>
              <FaCreativeCommonsShare fontSize={"2em"} />
            </div>
            <div>
              Share your experiences, achievements and progress.
              Also get notified of any upcoming events and hackathons.
            </div>
          </div>
          <div className="home-services_card">
            <div>
              <FaHandshake fontSize={"2em"} />
            </div>
            <div>
              Connect with other alumni and follow other people
              who you share interest or have same skills.
            </div>
          </div>
          <div className="home-services_card">
            <div>
              <BsChatRightTextFill fontSize={"2em"} />
            </div>
            <div>
              Chat with other alumni and get notified when you have new 
              messages.
            </div>
          </div>
          <div className="home-services_card">
            <div>
              <SiGoogleanalytics fontSize={"2em"} />
            </div>
            <div>
              Get real time data of all the alumni in the system from
              respective counties.
            </div>
          </div>
        </div>
      </div>
      <div>Footer</div>
    </div>
  )
}

export default Home