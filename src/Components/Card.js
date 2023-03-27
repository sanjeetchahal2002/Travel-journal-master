import React from 'react'
import LeftCard from './leftCard'
import RightCard from './rightCard'
export default function Card(props){
    return(
        <div className="card">
            <div className="left">
                <LeftCard
                    {...props}
                />
            </div>
            <div className="right">
                <RightCard
                        {...props}
                    />
            </div>
        </div>
    )
}