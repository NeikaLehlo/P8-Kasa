import React from "react"
import { NavLink } from 'react-router-dom'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "../../main.scss"

function Error() {
    return (
        <div className="kasa-error">
            <Header />
            <h1>404</h1>
            <p>Oups! La page que vous recherchez n'existe pas!</p>
            <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "kasa-header-nav-pending" : isActive ? "kasa-header-nav-active" : ""
                    }
                    >
                    Retourner sur la page d’accueil
                </NavLink>
            <Footer />
        </div>
    )
}

export default Error