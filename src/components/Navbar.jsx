import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div id="navbar">
            <Link className="navLink" to={"/"}>Home</Link><br/>
            <Link className="navLink" to={"/cart"}>Cart</Link>
        </div>
    )
}

export default Navbar