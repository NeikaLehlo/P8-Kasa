import React from "react"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import Header from "../../components/header/Header"
import Carousel from "../../components/carousel/Carousel"
import Collapse from "../../components/collapse/Collapse"
import Footer from "../../components/footer/Footer"
import Error from '../../pages/Error-page/Error-page'
import "../../main.scss"

function Lodging() {
    let { id } = useParams();
    const [lodgingData, setLodgingData] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
            fetch('/datas/lodgings.json')
                .then((response)=>  response.ok ? response.json() : setError(true))
                .then((data) => { 
                    console.log(data.length)
                    if (data.length < 1 ) {
                        return setError(true)
                    }
                    const lodging = data.find((element) => element.id===id);
                    if (!lodging){
                        return setError(true)
                    }else 
                    setLodgingData(lodging)
                }) 
                .catch((error)=> console.log(error))
    } ,[id])

    return (

        <div className="kasa-lodging">
            {error ? <Error /> : lodgingData && (
                <div>
                    <Header />
                    <div className="kasa-lodging-body">
                        {/* {console.log(lodgingData.pictures)} */}
                        { lodgingData.pictures && ( 
                        <Carousel imgs={lodgingData.pictures} />)}
                        <div className="kasa-lodging-info">
                            <div className="kasa-lodging-info-desc">
                                <h1 className="kasa-lodging-info-desc-title">{lodgingData.title}</h1>
                                <p className="kasa-lodging-info-desc-location">{lodgingData.location}</p>
                                {/* si lodgingData.tags existe alors (...) */}
                                { lodgingData.tags && (
                                    <div className="kasa-lodging-info-desc-tag">
                                    {lodgingData.tags.map((tag, index)=>(
                                        <div className="kasa-lodging-info-desc-tag-text" key={tag + index}>
                                            <p >{tag}</p>
                                        </div>
                                    ))}
                                    </div>)}
                            </div>
                            <div className="kasa-lodging-info-hostRating">
                                { lodgingData.host && (
                                    <div className="kasa-lodging-info-hostRating-host">
                                        <p className="kasa-lodging-info-hostRating-host-name">{lodgingData.host.name}</p>
                                        <img className="kasa-lodging-info-hostRating-host-img" src={lodgingData.host.picture} alt="host pfp"></img>
                                    </div>
                                )}
                                <div className="kasa-lodging-info-hostRating-rating">
                                    Ici les étoiles
                                </div>
                            </div>
                        </div>
                        <section className="kasa-lodging-collapse">
                            <Collapse title="Description" text={lodgingData.description} />
                            <Collapse title="Équipements" text={lodgingData.equipments} />
                        </section>
                    </div>
                    <Footer />
                </div>                    
            )}            
        </div>
        
    )
}

export default Lodging