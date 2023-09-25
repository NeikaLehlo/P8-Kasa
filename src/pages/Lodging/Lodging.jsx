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
            fetch("/datas/lodgings.json")
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
                        <Carousel />
                        <h1>{lodgingData.title}</h1>
                        <p>{lodgingData.location}</p>
                        {console.log(lodgingData)}
                        {/* si lodgingData.tags existe alors (...) */}
                        { lodgingData.tags && (
                            <div className="kasa-lodging-tag">
                            {lodgingData.tags.map((tag, index)=>(
                                <p key={tag + index}>{tag}</p>
                            ))}
                        </div>)}
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