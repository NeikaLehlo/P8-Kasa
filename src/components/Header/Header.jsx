import { Link } from 'react-router-dom'
import "../../main.scss"

function Header() {
    return (
        <div className="kasa-header">
            <img className="kasa-header-img" src="./src/assets/icons/logo-kasa.svg" alt="logo-Kasa"/>
            <nav className="kasa-header-nav">
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </div>
    )
}

export default Header