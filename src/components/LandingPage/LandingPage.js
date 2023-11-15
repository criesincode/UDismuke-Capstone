import "./LandingPage.scss"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <body>
            <header>
                <p>U Pick Your Fit</p>
            </header>

            <section>
                <p className="center__text">Wish you could put together outfits from different online stores from one app? Then U PICK YOUR FIT is the app for U! Browse the inventory of your favorite online stores, build your fit and purchase your items all in one place!</p>
                <button>Begin Styling</button>
            </section>
        </body>
    )
}

export default LandingPage;