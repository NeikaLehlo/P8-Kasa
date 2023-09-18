import logo from '../../assets/icons/logo-kasa-white.svg'
import "../../main.scss"

function Footer() {
    return (
        <div className="kasa-footer">
            <img className="kasa-footer-img" src={logo} alt="logo-Kasa"/>
            <p className="kasa-footer-p">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
