import React from "react"
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Error from '../../pages/Error-page/Error-page'
import "../../main.scss"

function Lodging() {
    let { id } = useParams();
    const [lodgingData, setLodgingData] = useState([])

    useEffect(() => {
            fetch("/datas/lodgings.json")
                .then((response)=> response.json())
                .then((data) => { 
                    console.log(data)
                    const lodging = data.find((element) => element.id===id);
                    console.log(lodging)
                    setLodgingData(lodging)
                }) 
                .catch((error)=> console.log(error))
    } ,[])



    return (
        
            <div className="kasa-lodging">
            {/* {lodgingData.map((lodging)=>( */}
                {lodgingData ? (
                    <div>
                        <Header />
                        <h1>{lodgingData.title}</h1>
                        <Footer />
                    </div>
                    
                ) : (<Error />)}
                
            {/* ))} */}
            
                </div>
        
    )
}

export default Lodging