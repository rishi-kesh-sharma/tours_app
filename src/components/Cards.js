import React from "react";
import Card from "./Card"
import "../App.css"

    const Cards=(props)=>{ 
    
    return(
        <div className="main-container">
            {
            
                props.tours.map((tour,index)=>{ 
                    return <Card key={tour.id} tour={tour}/>
                })
            }
        </div>
      
    )
};
export default Cards;



 
     
    

 