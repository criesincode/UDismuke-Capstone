import Fashion from "../../assets/images/istockphoto-1307568521-1024x1024-removebg.png"
import React from 'react';
import './Overlay.scss';

const Overlay = () => {
  return (
    <div className="overlay-container">
      <img src={Fashion} alt="Overlay Image" />
    </div>
  );
}

export default Overlay;
