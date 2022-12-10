// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../App.css"
import {useContext} from "react";
import {MyContext} from "../App" 

const Card=(props)=>{
    const deleteTour=useContext(MyContext);
    const {id,image,info,name,price}=props.tour;
    const clickHandle=(e)=>{

        deleteTour(id) 
    }
    return(
        <div className=" container">
            <div className="image-container">
                <img src={image} className="image"/>
            </div>
            <div className="heading-container">
                <span className="name text-primary">{name}</span>
                <span className="price text-primary">${price}</span>
            </div>
            <div className="info-container">
                <p className="info">
                   {info}
                </p>
            </div>
            <div className="btn-container">
                <button className=" btn btn-primary" onClick={clickHandle} >Not Interested</button>
            </div>
        </div>
          
         
    )
}
export default Card