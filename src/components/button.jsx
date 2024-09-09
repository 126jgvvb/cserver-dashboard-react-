import React from "react";
//[{name,classname,text},{}]

export const Button=({attrs})=>{
    return(
        <button className={attrs.clas}  id={attrs.id} onClick={attrs.onClick}>
           {attrs.text} </button>
    )}
   

