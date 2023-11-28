import "./CuratedFit.scss"
import Background from "../../components/Background/Background"
import BlackWhite from "../../assets/images/curatedtop.webp"
import LightWash from "../../assets/images/curatedbottom.avif"
import Chunky from "../../assets/images/curatedshoes.webp"
import FB from "../../assets/icons/icon-facebook.png"
import Instagram from "../../assets/icons/icon-instagram.png"
import Twitter from "../../assets/icons/icon-twitter.png"
import { Link } from "react-router-dom"

const CuratedFit = () => {
    return (
        <>
        <Background />
            <nav>
                <div className="nav-item__1">
                    <p className="nav-text__1">U Pick Your Fit</p>
                </div>
                <h1>Curated Fit</h1>
                <div className="nav-item__2">
                    <Link to="/Tops"><p className="nav-text__2"> Clear Selections</p></Link>
                </div>
            </nav>
            <main className="curated">
           
                <div className="curated-top__container">
                    <div className="curated-top__text"><p>TOP: THREADBARE PLUS SKI PUFFER JACKET IN HOUNDSTOOTH</p></div>
                    <img className="curated-top__img" src={BlackWhite} alt="Jacket" />
                </div>

                <div className="curated-bottom__container">
                    <div className="curated-bottom__text"><p>BOTTOMS: RIBCAGE STRAIGHT ANKLE WOMEN'S JEANS</p></div>
                    <div><img className="curated-bottom__img" src={LightWash} alt="Denim" /></div>
                </div>

                <div className="curated-shoe__container">
                    <div className="curated-shoe__text"><p>SHOES: DOC MARTENS MOLLY WOMEN'S LEATHER PLATFORM BOOTS</p> <button id="curated-button">checkout</button></div>
                    <div><img className="curated-shoe__img" src={Chunky} alt="Boots" /></div>
                </div>
            </main>
            <footer>
                <div className='footer-text__container'>
                    <p className='footer-text'>Copyright © 2023 U PICK YOUR FIT</p>
                </div>
                <p className='footer-text__A'>FOLLOW US!</p>
                <div className='footer-icon__container'>
                    <img className='footer-icon__A' src={FB} />
                    <img className='footer-icon__B' src={Instagram} />
                    <img className='footer-icon__C' src={Twitter} />
                </div>
            </footer>
        </>
    )
}




export default CuratedFit;