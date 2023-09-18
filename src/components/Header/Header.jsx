import { NavLink } from 'react-router-dom'
import logo from '../../assets/icons/logo-kasa.svg'
import "../../main.scss"

function Header() {
    return (
        <div className="kasa-header">
            <img className="kasa-header-img" src={logo} alt="logo-Kasa"/>
            <nav className="kasa-header-nav">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "kasa-header-nav-pending" : isActive ? "kasa-header-nav-active" : ""
                    }
                    >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "kasa-header-nav-pending" : isActive ? "kasa-header-nav-active" : ""
                    }
                    >
                    À Propos
                </NavLink>
            </nav>
        </div>
    )
}

export default Header