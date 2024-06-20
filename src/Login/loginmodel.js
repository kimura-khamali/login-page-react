import React, { useState } from 'react';
// import Login from './Login';
import Login from '.';
import './index.css';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Login</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Login onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;