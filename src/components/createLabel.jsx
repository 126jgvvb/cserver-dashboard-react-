import React from "react";
//[{name,classname,text},{}]

export const CreateLabel=({labelNo,texts,handler})=>{
return(
    texts.length>0 && texts.map(text=>{
        return( <label  onClick={handler}>{text}</label>  ) })
                )   
}