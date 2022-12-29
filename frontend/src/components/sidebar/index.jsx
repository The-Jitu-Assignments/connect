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
        <div className="sidebar-item">
          Home
        </div>
        <div className="sidebar-item">
          Messages
        </div>
        <div className="sidebar-item">
          Notifications
        </div>
        <div className="sidebar-item">
          Profile
        </div>
        <div className="sidebar-item">
          Data & Analytics
        </div>
      </div>
    </div>
  )
}

export default Sidebar;