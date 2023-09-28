import arrowLeft from "../../assets/icons/arrow-left.svg"
import arrowRight from "../../assets/icons/arrow-right.svg"
import { useState } from "react"
import "../../main.scss"

function Carousel({imgs}) {
    const [isArrow , setIsArrow]= useState(1)

    function clickLeft() {
        (isArrow === 1) ? setIsArrow(isArrow + (imgs.length-1)) : setIsArrow(isArrow - 1)
    }

    function clickRight() {
        (isArrow === imgs.length) ? setIsArrow(isArrow - (imgs.length-1)) : setIsArrow(isArrow + 1)
    }
    
    return (
        <div className="kasa-carousel">
            <img className="kasa-carousel-img" src={imgs[isArrow-1]} alt="lodging's pictures" />
            { imgs.length > 1 ? (
                <div className="kasa-carousel-nav">
                    <div className="kasa-carousel-nav-arrows">
                        <img className="kasa-carousel-nav-arrows-arrow" src={arrowLeft} alt="left navigation arrow" onClick={()=> clickLeft()}/>
                        {/* {console.log(imgs.length)} */}
                        <img className="kasa-carousel-nav-arrows-arrow" src={arrowRight} alt="right navigation arrow" onClick={() => clickRight()}/>
                    </div>
                    <p className="kasa-carousel-nav-text">{isArrow}/{imgs.length}</p>
                </div>
            ):null }
            {/* {console.log(imgs[isArrow-1])} */}
            
           
        </div>
    )
}

export default Carousel