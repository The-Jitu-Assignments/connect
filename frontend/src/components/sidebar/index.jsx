import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css'

const Sidebar = ({ close }) => {
  const navigate = useNavigate();

  const handleNavigate = path => {
    navigate(path);
    close();
  };

  return (
    <div className='sidebar' onClick={(e) => e.stopPropagation()}>
      <div className='sidebar-header'>
        <span onClick={close}>X</span>
      </div>
      <div className='sidebar-item_box'>
        <div className="sidebar-item" onClick={() => handleNavigate('/home')}>
          Home
        </div>
        <div className="sidebar-item" onClick={() => handleNavigate('/message')}>
          Messages
        </div>
        <div className="sidebar-item" onClick={() => handleNavigate('/notification')}>
          Notifications
        </div>
        <div className="sidebar-item" onClick={() => handleNavigate('/profile')}>
          Profile
        </div>
        <div className="sidebar-item" onClick={() => handleNavigate('/dataAndAnalytics')}>
          Data & Analytics
        </div>
      </div>
    </div>
  )
}

export default Sidebar;