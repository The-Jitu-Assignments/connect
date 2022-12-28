import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='main-content'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;