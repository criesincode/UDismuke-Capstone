import "./TopsBottoms.scss"

const TopsBottoms = () => {
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
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>
                        </div>

                        <div className="form-style">
                            <label className="dropdown2">Style type:</label>
                            <select id="dropdown2" name="dropdown2">
                                <option value="optionA">Option A</option>
                                <option value="optionB">Option B</option>
                            </select>
                        </div>

                        <div className="form-body">
                            <label className="dropdown3">Body type:</label>
                            <select id="dropdown3" name="dropdown3">
                                <option value="optionX">Option X</option>
                                <option value="optionY">Option Y</option>
                            </select>
                        </div>
                        <button type="button" onclick="submitForm()">Submit</button>
                    </div>
                </form>
            </section>

        </>
    )
}







export default TopsBottoms;