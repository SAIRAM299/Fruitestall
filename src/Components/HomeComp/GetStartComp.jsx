import React, { useState } from 'react';
import "./GetStartComp.css"

const GetStartComp = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <button 
      className={`get-started-btn ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Get Started
      <span className="arrow-icon"></span>
      </button>
  );
};

export default GetStartComp;
