import React from 'react'
import { useState } from 'react'

const ClickEvent=()=> {

const [number, setNumber] =useState(0)

const increment=()=>{
    setNumber(number+1)
}

const decrement=()=>{
    if(number>1)
    setNumber(number-1)
}

const reset=()=>{
   
    setNumber(0)
}
    return (
        <div><h1>{number}</h1>
            
            
       <h1> <button onClick={increment}>Increment</button> </h1> 
       
       <h1> <button onClick={decrement}>Decrement</button> </h1> 
        
        <h1> <button onClick={reset}>Reset</button> </h1>
        
        </div>
    )
}

export default ClickEvent
