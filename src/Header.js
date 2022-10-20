import React from "react"
import NavBar from "./components/NavBar"

function Header () {

    return (
        <header id="header">
            <img src="logoico.ico" alt="" className="logo"/>
            <h1 className="titulo"> Sin Generación </h1>
            <NavBar/>
        </header>
    )
}

export default Header