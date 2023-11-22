import React, { useState } from 'react';
import LightWash from "../../assets/images/726930055-front-pdp.avif"
import MediumWash from "../../assets/images/A34980007-front-pdp.avif"
import DarkWash from "../../assets/images/A34980005-front-pdp.avif"
import { Link } from 'react-router-dom';
import "./Bottoms.scss"

const Bottoms = () => {
    const [selectedBodyType, setSelectedBodyType] = useState('');

    const submitForm = () => {
        // Your form submission logic goes here
    }

    const renderImages = () => {
        if (selectedBodyType === 'optionY') { // Plus
            return (
                <div className="image-container">
                    <Link to="/Shoes">
                    <img onClick={submitForm} src={LightWash} alt="Plus Image 1" />
                    </Link>
                    <img src={MediumWash} alt="Plus Image 2" />
                    <img src={DarkWash} alt="Plus Image 3" />
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
                <h1>Build Your Fit</h1>
                <div className="nav-item__2">
                    <p className="nav-text__2"> Clear Selections</p>
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

                        <div className="form-style">
                            <label className="dropdown2">Style type:</label>
                            <select id="dropdown2" name="dropdown2">
                                <option value="optionNull"></option>
                                <option value="optionA">Skinny</option>
                                <option value="optionB">Loose</option>
                                <option value="optionC">Boot Cut</option>
                                <option value="optionD">Mom Jeans</option>
                            </select>
                        </div>

                        <div className="form-body">
                            <label className="dropdown3">Body type:</label>
                            <select
                                id="dropdown3"
                                name="dropdown3"
                                value={selectedBodyType}
                                onChange={(e) => setSelectedBodyType(e.target.value)}>
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
        </>
    )
}







export default Bottoms;