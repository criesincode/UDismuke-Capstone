import "./Main.scss"
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <main>
        <div className="land-text__container"><p className="land-text">Wish you could put together outfits from different online stores from one app? Then U PICK YOUR FIT is the app for U! Browse the inventory of your favorite online stores, build your fit and purchase your items all in one place!</p></div>
        <Link to="/Tops">
        <button>Begin Styling</button>
        </Link>
       
    </main>
    )
}



export default Main;