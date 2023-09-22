import { Link } from 'react-router-dom'
import "../../main.scss"

function Card({id, cover, title}) {

    return (
        <article className="kasa-cards-article">
            <Link className="kasa-cards-link" to={`/lodging/${id}`}>
                <img className="kasa-cards-img" src={cover} alt="lodging's picture" />
                <h2 className="kasa-cards-title">{title}</h2>
            </Link>
        </article>
    )
}

export default Card