import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './layout.css'
import { FcMenu } from 'react-icons/fc'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className='layout-header'>
        <span>
          <FcMenu fontSize={"2em"} />
        </span>
        <Header />
      </div>
      <div className='main-content'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;