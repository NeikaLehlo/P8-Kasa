import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import "../../main.scss"

function Card({id, cover, title}) {
    // const [lodgingsData, setLodgingsData] = useState([])
    // useEffect(() => {
    //         fetch("/datas/lodgings.json")
    //             .then((response)=> response.json())
    //             .then((data) => setLodgingsData(data))
    //             .catch((error)=> console.log(error))
    // } ,[])


    return (
        // <section className="kasa-cards">
        //     <div className="kasa-cards-div">
            // {lodgingsData.map((lodging)=>(   
                <article className="kasa-cards-article">
                    <Link className="kasa-cards-link" to={`/lodging/${id}`}>
                        <img className="kasa-cards-img" src={cover} alt="lodging's picture" />
                        <h2 className="kasa-cards-title">{title}</h2>
                    </Link>
                </article>
            // ))}
        //     </div>
        // </section>
    )
}

export default Card