import React, { useState } from 'react';
import Background from '../../components/Background/Background';
import MultiColor from "../../assets/images/203047816-1-multi.webp"
import BlackWhite from "../../assets/images/curatedtop.webp"
import Green from "../../assets/images/jacket3.webp"
import FB from "../../assets/icons/icon-facebook.png"
import Instagram from "../../assets/icons/icon-instagram.png"
import Twitter from "../../assets/icons/icon-twitter.png"
import { Link } from 'react-router-dom';
import "./Tops.scss"

const Tops = () => {
    const [selectedBodyType, setSelectedBodyType] = useState('');

    const submitForm = () => {

    }

    const renderImages = () => {
        if (selectedBodyType === 'optionY') {
            return (
                <div className="image-container">
                    <img src={MultiColor} alt="Plus Image 1" />
                    <Link to="/Bottoms">
                        <img onClick={submitForm} src={BlackWhite} alt="Plus Image 2" />
                    </Link>
                    <img src={Green} alt="Plus Image 3" />
                </div>
            );
        }

        return null;
    }

    return (
        <>
            <Background />
            <nav>
                <div className="nav-item__1">
                    <p className="nav-text__1">U Pick Your Fit</p>
                </div>
                <h1>Build Your Fit</h1>
                <div className="nav-item__2">
                    <Link to="/Tops"><p className="nav-text__2"> Clear Selections</p></Link>
                </div>
            </nav>

            <section>
                <form className="form">
                    <div className="form-input__container">
                        <div className="form-url">
                            <label className="urlInput">URL:</label>
                            <input type="text" id="urlInput" name="urlInput" required /></div>
                        <div className="form-category">
                            <label className="dropdown1">Choose category: Top, Bottoms or Shoes:</label>
                            <select id="dropdown1" name="dropdown1">
                                <option value="optionNull"></option>
                                <option value="option1">Tops</option>
                                <option value="option2">Bottoms</option>
                                <option value="option3">Shoes</option>
                            </select>
                        </div>

                        <div className="form-body">
                            <label className="dropdown3">For:</label>
                            <select id="dropdown3" name="dropdown3">
                                <option value="optionNull"></option>
                                <option value="optionW">Men</option>
                                <option value="optionX">Women</option>
                                <option value="optionY">All</option>
                            </select>
                        </div>

                        <div className="form-style">
                            <label className="dropdown2">Style type:</label>
                            <select id="dropdown2" name="dropdown2">
                                <option value="optionNull"></option>
                                <option value="optionA">Crop Top</option>
                                <option value="optionB">Jackets</option>
                                <option value="optionC">Sweater</option>
                                <option value="optionD">Button Up</option>
                            </select>
                        </div>

                        <div className="form-body">
                            <label className="dropdown3">Body type:</label>
                            <select
                                id="dropdown3"
                                name="dropdown3"
                                value={selectedBodyType}
                                onChange={(e) => setSelectedBodyType(e.target.value)} >
                                <option value="optionNull"></option>
                                <option value="optionW">Slim</option>
                                <option value="optionX">Tall</option>
                                <option value="optionY">Plus</option>
                                <option value="optionZ">Petite</option>
                            </select>
                        </div>
                        {renderImages()}
                    </div>
                </form>
            </section>
            <footer>
                <div className='footer-text__container'>
                    <p className='footer-text'>Copyright © 2023 U PICK YOUR FIT</p>
                </div>
                <div className='footer-icon__container'>
                    <img className='footer-icon__A' src={FB} />
                    <img className='footer-icon__B' src={Instagram} />
                    <img className='footer-icon__C' src={Twitter} />
                </div>
            </footer>
        </>
    )
}







export default Tops;