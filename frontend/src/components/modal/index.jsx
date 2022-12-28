import React from 'react';
import './modal.css'

const Modal = ({ open, close }) => {
  if (!open) return;
  return (
    <div onClick={close} className='modal-overlay'>Modal</div>
  )
}

export default Modal;