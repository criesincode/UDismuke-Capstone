import "./CuratedFit.scss"
import BlackWhite from "../../assets/images/curatedtop.webp"
import LightWash from "../../assets/images/curatedbottom.avif"
import Chunky from "../../assets/images/curatedshoes.webp"

const CuratedFit = () => {
    return (
        <>
            <nav>
                <div className="nav-item__1">
                    <p className="nav-text__1">U Pick Your Fit</p>
                </div>
                <h1>Curated Fit</h1>
                <div className="nav-item__2">
                    <p className="nav-text__2"> Clear Selections</p>
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
                    <div className="curated-shoe__text"><p>SHOES: DOC MARTENS MOLLY WOMEN'S LEATHER PLATFORM BOOTS</p></div>
                    <div><img className="curated-shoe__img" src={Chunky} alt="Boots" /></div>
                </div>
            </main>
        </>
    )
}




export default CuratedFit;