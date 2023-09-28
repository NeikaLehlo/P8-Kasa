import starActive from "../../assets/icons/star-active.svg";
import starInactive from "../../assets/icons/star-inactive.svg";
import "../../main.scss"

function Rating({rate}) {
    const range = [1, 2, 3, 4, 5]

    return (
    <div className="kasa-rating">
        {range.map((rangeStar)=>
            rate >= rangeStar ? (
                <img className="kasa-rating-star" key={rangeStar.toString()} src={starActive} alt="star active"></img>
            ) : <img className="kasa-rating-star" key={rangeStar.toString()} src={starInactive} alt="star inactive"></img>
        )}
    </div>
    )
}

export default Rating