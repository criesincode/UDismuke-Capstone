import "./CuratedFit.scss"

const CuratedFit = () => {
    return (
        <>
            <body>
                <h1>URL Selector</h1>

                <form id="urlForm">
                    <label for="urlInput">URL:</label>
                    <input type="text" id="urlInput" name="urlInput" required />

                    <label for="dropdown1">Dropdown 1:</label>
                    <select id="dropdown1" name="dropdown1">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>

                    </select>

                    <label for="dropdown2">Dropdown 2:</label>
                    <select id="dropdown2" name="dropdown2">
                        <option value="optionA">Option A</option>
                        <option value="optionB">Option B</option>

                    </select>

                    <label for="dropdown3">Dropdown 3:</label>
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