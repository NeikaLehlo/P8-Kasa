import React from "react"
import { Link } from 'react-router-dom'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "../../main.scss"

function Error() {
    return (
        <div className="kasa-error">
            <Header />
            <h1 className="kasa-error-title">404</h1>
            <p className="kasa-error-p">Oups! La page que vous recherchez n'existe pas!</p>
            <nav className="kasa-error-redir">
                <Link to={`/`}>Retourner sur la page d'accueil</Link>
            </nav>
            <Footer />
        </div>
    )
}

export default Error