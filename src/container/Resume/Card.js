import React from 'react'

function Card(props) {
    return (
        <div>
            <img src={props.cardContent.imgSrc}/>
            <h2 >{props.cardContent.name}</h2>
            <p>Email : {props.cardContent.email}</p>
        </div>
    )
}

export default Card
