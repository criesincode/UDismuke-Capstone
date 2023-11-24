import "./CuratedFit.scss"
import BlackWhite from "../../assets/images/curatedtop.webp"
import LightWash from "../../assets/images/curatedbottom.avif"
import Chunky from "../../assets/images/curatedshoes.webp"

const CuratedFit = () => {
    return (
        <>
            <div className="container">
                <div><p>dhbhdq</p></div>
                <div><img src={BlackWhite} alt="Jacket 1" /></div>
            </div>

            <div className="container">
                <div><p>dhbhdq</p></div>
                <div><img src={LightWash} alt="Jacket 1" /></div>
            </div>

            <div className="container">
                <div><p>dhbhdq</p></div>
                <div><img src={Chunky} alt="Jacket 1" /></div>
            </div>
        </>

    )
}



export default CuratedFit;