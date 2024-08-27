
import React from 'react'
import { useState, useEffect } from 'react'

const StateMgm=()=>{
    const [city, setCity] = useState("HYD");
useEffect(()=>{
    if(city === "HYD"){
        setCity("Vizag")
    }
    else{
        setCity("DELHI")
    }

}, [city])

    return(
        <div>
          <h1> I live in {city}</h1> 
        </div>
    )
}

export default StateMgm
