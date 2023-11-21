import React, { useState } from 'react';
import Laces from "../../assets/images/27662001.webp"
import Strap from "../../assets/images/30970001.webp"
import Chunky from "../../assets/images/shoe3.webp"
import { Link } from 'react-router-dom';
import "./Shoes.scss"

const Shoes = () => {
    const [selectedFor, setSelectedFor] = useState('');

    const submitForm = () => {

    }

    const renderImages = () => {
        if (selectedFor === 'optionX') { // Womens
            return (
                <div className="image-container">
                    <img src={Laces} alt="Boot Image 1" />
                    <img src={Strap} alt="Boot Image 2" />
                    <img src={Chunky} alt="Boot Image 3" />
                </div>
            );
        }

        return null; // No images to display for other body types
    }

    return (
        <>
            <nav>
                <div className="nav-item__1">
                    <p className="nav-text__1">U Pick Your Fit</p>
                </div>
                <div className="nav-item__2">
                    <p className="nav-text__2"> Clear Selections</p>
                </div>
            </nav>

            <section>
                <h1>Build Your Fit</h1>

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
                            <label className="dropdown3">For:</label>
                            <select
                                id="dropdown3"
                                name="dropdown3"
                                value={selectedFor}
                                onChange={(e) => setSelectedFor(e.target.value)}>
                                <option value="optionNull"></option>
                                <option value="optionW">Men</option>
                                <option value="optionX">Women</option>
                                <option value="optionY">All</option>
                            </select>
                        </div>

                        {renderImages()}
                        <Link to="/CuratedFit">
                            <button type="button" onClick={submitForm}>CURATE FIT</button>
                        </Link>
                    </div>
                </form>

            </section>

        </>
    )
}







export default Shoes;