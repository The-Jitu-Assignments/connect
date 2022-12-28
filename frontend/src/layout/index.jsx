import React, { useState } from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './layout.css'
import { FcMenu } from 'react-icons/fc'
import Modal from '../components/modal';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='layout'>
      <div className='layout-header'>
        <span className='layout-menu' onClick={() => setOpen(true)}>
          <FcMenu fontSize={"2em"} />
        </span>
        <Header />
      </div>
      <Modal open={open} close={() => setOpen(false)} />
      <div className='main-content'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;