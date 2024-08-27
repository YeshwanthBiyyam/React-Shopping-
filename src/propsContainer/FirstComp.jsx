import React from "react";

const FirstComp=(props)=>{
    const{model,year,color,dealer}=props.myCar
    return(
        <div>
            <div>{model}</div>
            <div>{year}</div>
            <div>{color}</div>
            <div>{dealer}</div>
        </div>
    )
}
export default FirstComp