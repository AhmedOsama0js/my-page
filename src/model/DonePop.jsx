import React from 'react';
import "./DonePop.css";


const DonePop = ({ send, color }) => {
  return (
    <div style={{ backgroundColor: color }} className="done-pop-container">
      <p>{send}</p>
    </div>
  );
};

export default DonePop;
