import React from 'react';
import './Dialog.css';

function Dialog({ isOpen, onClose, title, message, type }) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className={`dialog ${type}`}>
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Dialog;
