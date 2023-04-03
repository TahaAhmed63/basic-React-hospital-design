import React from 'react';
import './OvalButtons.css';

const OvalButtons = () => {
  return (
    <div className="container-3">
      <div className="button oval left">
        <span>RECEIVED</span>
      </div>
      <div className="button2 rectangle">
      <span>NEGOTIATING</span>
      </div>
    
      <div className="button oval right">
        <span>COMPLETED</span>
      </div>
    </div>
  );
};

export default OvalButtons;
