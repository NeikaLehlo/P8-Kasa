import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import "../../main.scss"

function Card() {
    const [lodgingsData, setLodgingsData] = useState([])
    useEffect(() => {
            fetch("/datas/lodgings.json")
                .then((response)=> response.json())
                .then((data) => setLodgingsData(data))
                .catch((error)=>console.log(error))
    } ,[])


    return (
        <div className="kasa-cards">
           {lodgingsData.map((lodging)=>(   
            <article className="kasa-cards-article" key={lodging.id}>
                <Link className="kasa-cards-link" to={`/lodging/${lodging.id}`}>
                    <img className="kasa-cards-img" src={lodging.cover} alt="lodging's picture" />
                    <h2 className="kasa-cards-title">{lodging.title}</h2>
                </Link>
            </article>
        ))}
        </div>
    )
}

export default Card