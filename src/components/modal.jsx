import React from 'react';

const Modal = ({ onClose, children }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleModalClose = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={handleModalClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
