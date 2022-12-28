import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <div className='main-content'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;