
import banner from "../../assets/pictures/banner-home.png";
import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card"
import Footer from "../../components/footer/Footer"
import "../../main.scss"


function Home () {




    return (
        <div className="kasa-home">
            <Header />
            <Banner>
                <img className="kasa-banner-img" src={banner} alt="picture's banner" />
                <p className="kasa-banner-p">Chez vous, partout et ailleurs</p>
            </Banner>
            <Card />
            <Footer />
        </div>
    )
}

export default Home