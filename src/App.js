import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from './components/Card';
import Cards from './components/Cards';
import LoadingPage from './components/LoadingPage';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import {createContext} from "react";

const MyContext=createContext();
 function  App() { 
   
const url = 'https://course-api.com/react-tours-project';
   
const [loading,setLoading]=useState(true);
const [tours,setTours]=useState([]);
 const fetchTours=async()=>{
  setLoading(true)
  try {
    const response = await fetch(url)
    const tours = await response.json()
    setLoading(false)
    setTours(tours)
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
}
useEffect(()=>{
  fetchTours();
},[])

const clickHandle=()=>{
  fetchTours();
}
 
   if(loading){
     return(
       <LoadingPage/>
     )
   }
   if(tours.length===0){
     return(
       <div className="container">
         <h1 className="text-center mt-5">No Tours left</h1>
         <button className="btn btn-primary " onClick={clickHandle}>refresh</button>
       </div>
     )
   }
   const deleteTour=(id)=>{
    const newTours= tours.filter(tour=>tour.id!=id)
    setTours(newTours);
   }

   return(

    <div>
      <h1 className="text-center mt-5">Our Tours</h1>
      <MyContext.Provider value={deleteTour}>
      <Cards tours={tours}/>

      </MyContext.Provider>

    </div>
   )
  

 
  } 
  export {MyContext};
  export default App;