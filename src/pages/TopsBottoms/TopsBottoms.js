import React, { useState } from 'react';
import "./TopsBottoms.scss"

const TopsBottoms = () => {
    const [selectedBodyType, setSelectedBodyType] = useState('');

    const submitForm = () => {
        // Your form submission logic goes here
    }

    const renderImages = () => {
        if (selectedBodyType === 'optionY') { // Plus
            return (
                <>
                    <img src="" alt="Plus Image 1" />
                    <img src="path/to/jacket3.webp" alt="Plus Image 2" />
                    <img src="path/to/curatedtop.webp" alt="Plus Image 3" />
                </>
            );
        }
        // Add more conditions for other body types if needed
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
                                <option value="option1">Tops</option>
                                <option value="option2">Bottoms</option>
                                <option value="option3">Shoes</option>
                            </select>
                        </div>

                        <div className="form-style">
                            <label className="dropdown2">Style type:</label>
                            <select id="dropdown2" name="dropdown2">
                                <option value="optionA">Crop Top</option>
                                <option value="optionB">Jackets</option>
                                <option value="optionC">Sweater</option>
                                <option value="optionD">Button Up</option>
                            </select>
                        </div>

                        <div className="form-body">
                            <label className="dropdown3">Body type:</label>
                            <select id="dropdown3" name="dropdown3">
                                <option value="optionW">Slim</option>
                                <option value="optionX">Tall</option>
                                <option value="optionY">Plus</option>
                                <option value="optionZ">Petite</option>
                            </select>
                        </div>
                        <button type="button" onclick="submitForm()">Submit</button>
                    </div>
                </form>
                <div className="form-body">
                <label className="dropdown3">Body type:</label>
                <select
                    id="dropdown3"
                    name="dropdown3"
                    value={selectedBodyType}
                    onChange={(e) => setSelectedBodyType(e.target.value)}
                >
                    <option value="optionW">Slim</option>
                    <option value="optionX">Tall</option>
                    <option value="optionY">Plus</option>
                    <option value="optionZ">Petite</option>
                </select>
            </div>

            {renderImages()}

            <button type="button" onClick={submitForm}>Submit</button>
            </section>

        </>
    )
}







export default TopsBottoms;