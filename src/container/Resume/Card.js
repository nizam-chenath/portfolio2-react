import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <img src={props.cardContent.imgSrc}/>
            <h2 >{props.cardContent.name}</h2>
            <h6>{props.cardContent.discription}</h6>
            <p>Email : {props.cardContent.email}</p>

        </div>
    )
}

export default Card
