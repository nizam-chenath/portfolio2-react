import React from 'react'
import Card from './Card';
import ResumeData from './ResumeData'
import "./Card.css"

function Resume() {
   let card = ResumeData.map((resumeItem)=>{


         return(
                 <Card 
                 cardContent ={{
                     imgSrc: resumeItem.imgSrc,
                     name: resumeItem.name,
                     discription: resumeItem.discription,
                     email: resumeItem.email,
                 }}/>
         )
    });
    return (
        <div>
            <h1 style={{
                display: 'flex',
                 justifyContent:'center',
                  alignItems:'center',
                   color:'white',
                   marginTop:'100px'
                   }}>What is my profession..?</h1>
            <div className="card-container"> {card}</div>
       
        </div>
    )
}

export default Resume
