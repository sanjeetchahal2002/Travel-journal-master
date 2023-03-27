import React from "react"
import img from "./images/globe.png"
export default function Navbar(){
    return(
        <div className="navCon">
            <div className="logoCon">
                <img src = {img} className="logoImg"/>
                <span className="logoText">my travel journal.</span>
            </div>
        </div>
    )
}