import "./Main.scss"
import { Link } from "react-router-dom";
import Overlay from "../Overlay/Overlay";

const Main = () => {
    return (
        <main>
        <div className="land-text__container"><p className="land-text">Wish you could put together outfits from different online stores in one app? Then U PICK YOUR FIT is the app for U! Browse the inventory of your favorite online stores, build your fit and purchase your items all in one place!</p></div>
       <Overlay />
    </main>
    )
}



export default Main;