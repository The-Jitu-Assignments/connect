import React from 'react'

const Modal = ({ open, close }) => {
  if (!open) return;
  return (
    <div onClick={close}>Modal</div>
  )
}

export default Modal;