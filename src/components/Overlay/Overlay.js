import Fashion from "../../assets/images/istockphoto-1307568521-1024x1024-removebg.png"
import React from 'react';
import { Link } from "react-router-dom";
import './Overlay.scss';

const Overlay = () => {
  return (
    <>
    <div className="overlay-container">
      <img src={Fashion} alt="Overlay Image" />
    </div>
    <Link to="/Tops">
        <button>Begin Styling</button>
        </Link>
    </>
  );
}

export default Overlay;
