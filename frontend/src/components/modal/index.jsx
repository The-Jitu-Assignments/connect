import React from 'react';
import './modal.css'

const Modal = ({ open, close, content }) => {
  if (!open) return;
  return (
    <div onClick={close} className='modal-overlay'>
      {content}
    </div>
  )
}

export default Modal;