import Fashion from "../../assets/images/istockphoto-1307568521-1024x1024-removebg.png"
import React from 'react';
import { Link } from "react-router-dom";
import './Overlay.scss';

const Overlay = () => {
    return (
        <>
            <div className="overlay-container">
            <Link to="/Tops"><img src={Fashion} alt="Overlay Image" /></Link>
            </div>
            
             <button>Begin Styling</button>
            
            
        </>
    );
}

export default Overlay;
