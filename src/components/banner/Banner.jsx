import "../../main.scss"

function Banner({img , title}) {
    return (
        <div className="kasa-banner">
            <img className="kasa-banner-img" src={img} alt="photo banner"/>
            {
                !title ? "" : (<h1 className="kasa-banner-title">{title}</h1>)
            }
        </div>
    )
}

export default Banner