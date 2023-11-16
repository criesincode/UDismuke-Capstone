import "./CuratedFit.scss"

const CuratedFit = () => {
    return (
        <>
            <body>
                <nav>
                    <div className="nav-item__1">
                        <p className="nav-text__1">U Pick Your Fit</p>
                    </div>
                    <div className="nav-item__2">
                        <p className="nav-text__2"> Clear Selections</p>
                    </div>
                </nav>
                <h1>URL Selector</h1>

                <form id="uForm">
                    <label for="urlInput">URL:</label>
                    <input type="text" id="urlInput" name="urlInput" required />

                    <label for="dropdown1">Choose category: Top, Bottoms or Shoes</label>
                    <select id="dropdown1" name="dropdown1">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>

                    </select>

                    <label for="dropdown2">Style type:</label>
                    <select id="dropdown2" name="dropdown2">
                        <option value="optionA">Option A</option>
                        <option value="optionB">Option B</option>

                    </select>

                    <label for="dropdown3">Body type:</label>
                    <select id="dropdown3" name="dropdown3">
                        <option value="optionX">Option X</option>
                        <option value="optionY">Option Y</option>

                    </select>

                    <button type="button" onclick="submitForm()">Submit</button>
                </form>
            </body>

        </>
    )
}







export default CuratedFit;