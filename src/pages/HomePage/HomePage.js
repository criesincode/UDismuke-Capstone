import "./HomePage.scss"
import LandingPage from "../../components/LandingPage/LandingPage"
import Tops from "../../components/Tops/Tops"
import Bottoms from "../../components/Bottoms/Bottoms"
import Shoes from "../../components/Shoes/Shoes"
import CuratedFit from "../../components/CuratedFit/CuratedFit"




const HomePage = () => {
    return (
        <>
            <LandingPage />
            <Tops />
            <Bottoms />
            <Shoes />
            <CuratedFit />
        </>
    )
}

export default HomePage;