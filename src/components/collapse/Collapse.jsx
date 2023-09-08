import { useState } from 'react'
import arrowUp from "../../assets/icons/arrow-up.svg"
import arrowDown from "../../assets/icons/arrow-down.svg"
import "../../main.scss"


function Collapse( {title, text}) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="kasa-collapse-div">
            <div className="kasa-collapse-title">
                <h2>{title}</h2>
                <img className="kasa-collapse-arrow" src={arrowDown} alt="arrow to close the collapse" onClick={() => setIsOpen(false)} />
            </div>
            <p className="kasa-collapse-text">{text}</p>
        </div>
    ) : (
        <div className="kasa-collapse-div">
            <div className="kasa-collapse-title">
                <h2>{title}</h2>
                <img className="kasa-collapse-arrow" src={arrowUp} alt="arrow to close the collapse" onClick={() => setIsOpen(true)} />
            </div>
        </div>
    )

}

export default Collapse