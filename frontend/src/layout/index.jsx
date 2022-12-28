import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Layout = ({ Children }) => {
  return (
    <div>
      <Header />
      <div className='main-content'>
        {Children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;