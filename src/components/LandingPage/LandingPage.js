import "./LandingPage.scss"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <body className="land">
            <header>
                <p className="land-header__text">U Pick Your Fit</p>
            </header>

            <main>
                <div className="land-text__container"><p className="land-text">Wish you could put together outfits from different online stores from one app? Then U PICK YOUR FIT is the app for U! Browse the inventory of your favorite online stores, build your fit and purchase your items all in one place!</p></div>
                <button>Begin Styling</button>
            </main>
        </body>
    )
}

export default LandingPage;