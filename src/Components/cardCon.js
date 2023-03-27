import React from "react";
import dataArr from "./data"
import Card from "./Card"
export default function cardCon(){
    const newArr = dataArr.map((item) => {
       return(
        <Card
        id = {item.id}
        {...item}
    />
       )
    })
    return(
        <div className="cardCon">
            {newArr}
        </div>
    )
}