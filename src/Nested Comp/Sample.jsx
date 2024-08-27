import React from 'react'
import TestComp from './TestComp'

const Mango=()=>{
    return(
    <h2>Mangoes are sweet</h2>
    )
}

const Grapes=()=>{
    return(
        <p>Grapes are sour</p>
    )
}

function Sample() {
    return (
        <div>Sample
            <Mango />
            <Grapes />
            <TestComp />
        </div>
        
    )
}

export default Sample

