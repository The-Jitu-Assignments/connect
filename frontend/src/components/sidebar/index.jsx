import React from 'react';
import './sidebar.css'

const Sidebar = ({ close }) => {
  return (
    <div onClick={close} className='sidebar'>Sidebar</div>
  )
}

export default Sidebar;