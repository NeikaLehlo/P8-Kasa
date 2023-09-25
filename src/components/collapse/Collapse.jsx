import { useState } from 'react'
import arrow from "../../assets/icons/arrow.svg"
import "../../main.scss"

function Collapse( {title, text}) {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="kasa-collapse-div">
            <div className="kasa-collapse-title" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <img className={isOpen? "kasa-collapse-arrow" : "kasa-collapse-arrow-close"} src={arrow} alt="arrow to open/close the collapse" />
            </div>
            <div className={isOpen? "kasa-collapse-text" : "kasa-collapse-text-hidden"}>
            { typeof text === "string" && (
                <p>{text}</p>
            ) 
            }
            {Array.isArray(text) && (
                text.map((element, index)=>(
                    <p key={element + index}>{element}</p>    
                )
            ))}
            </div>       
        </div>
    ) 
}

export default Collapse