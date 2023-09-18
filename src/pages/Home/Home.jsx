
import banner from "../../assets/pictures/banner-home.png";
import { useState, useEffect } from "react"
import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card"
import Footer from "../../components/footer/Footer"
import "../../main.scss"


function Home () {

    const [lodgingsData, setLodgingsData] = useState([])
    useEffect(() => {
            fetch("/datas/lodgings.json")
                .then((response)=> response.json())
                .then((data) => setLodgingsData(data))
                .catch((error)=> console.log(error))
    } ,[])


    return (
        <div className="kasa-home">
            <Header />
            <Banner img={banner} title="Chez vous, partout et ailleurs"/>
            <section className="kasa-cards">
            <div className="kasa-cards-div">
            {lodgingsData.map((lodging)=>(   
                <Card key={lodging.id} id={lodging.id} cover={lodging.cover} title={lodging.title}/>
            ))}
            </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home