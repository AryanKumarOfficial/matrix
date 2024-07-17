import React from "react";
import "../styles/navbar.css"
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h1>
                <NavLink to={"/"}>Matrix Color Changer</NavLink>
            </h1>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navbar;