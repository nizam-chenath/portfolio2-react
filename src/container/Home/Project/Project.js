import React, { useState } from 'react'
import './Project.css';
import pro1 from '../../../Assets/Home/pro1.png';
import pro2 from '../../../Assets/Home/pro2.jpg';
import pro3 from '../../../Assets/Home/pro3.gif';

function Project() {
   let [change, setChange] = useState(1)

   const prevFn =()=>{
       if(change === 1){
           setChange(3)
       }
       else{

           setChange(change-1)
       }
   }
   const nextFn =()=>{
       if(change === 3){
           setChange(1)
       }
       else{

           setChange(change+1)
       }
   }
    
    return (
        <div>
            <div className="container">
                <h1>Projects</h1>
                <div className="project-section">
                    <button className="prev-btn" onClick={prevFn}>Previous</button>
                    <div >{change === 1 && <img src={pro1} alt="loading1" />}</div>
                    <div >{change === 2 && <img src={pro2} alt="loading2" />}</div>
                    <div >{change === 3 && <img src={pro3} alt="loading3" />}</div>
                    
                    <button className="next-btn" onClick={nextFn}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Project
