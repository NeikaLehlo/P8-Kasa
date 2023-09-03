import React from "react"
import Header from "../../components/Header/Header"
import "../../main.scss"

function Error() {
    return (
        <div className="kasa-error">
            <Header />
            <h1>Error 404</h1>
        </div>
    )
}

export default Error