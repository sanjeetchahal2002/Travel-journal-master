import React from "react";
import img from "./images/marker.png"
export default function rightCard(props){
    return(
        <div className="rightInner">
            <div className="div1">
                <img src = {img} className="marker"></img>
                <span>{props.location.toUpperCase()}</span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <div className="div2">
                <h1>{props.title}</h1>
            </div>
            <div className="div3">
                <p>{props.description}</p>
            </div>
            <div className="div4">
                <p>{props.description}</p>
            </div>
        </div>
    )
}