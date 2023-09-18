import React from "react"
import banner from "../../assets/pictures/banner-about.png";
import Header from "../../components/header/Header"
import Banner from "../../components/banner/Banner"
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/footer/Footer"
import "../../main.scss"

function About() {
    return (
        <div className="kasa-about">
            <Header />
            <Banner img={banner} />
            <section className="kasa-collapse">
                <Collapse
                    title="Fiabilité"
                    text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
                />
                <Collapse
                    title="Respect"
                    text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
                />
                <Collapse
                    title="Service"
                    text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Collapse
                    title="Sécurité"
                    text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les vayageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standrads sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </section>
            <Footer />
        </div>
    )
}

export default About 