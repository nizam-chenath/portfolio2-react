import React from 'react'
import Card from './Card';
import ResumeData from './ResumeData'

function Resume() {
   let card = ResumeData.map((resumeItem)=>{


         return(
                 <Card 
                 cardContent ={{
                     imgSrc: resumeItem.imgSrc,
                     name: resumeItem.name,
                     email: resumeItem.email,
                 }}/>
         )
    });
    return (
        <div>
            <h1>Card</h1>
            {card}
        </div>
    )
}

export default Resume
