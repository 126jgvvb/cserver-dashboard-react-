import React from "react";
//[{name,classname,text},{}]

export const CreateDivChildren=({divNo,styl,classes,children_for_each})=>{
let cnt=0;
return(
    cnt<divNo-1 && children_for_each.map(children=>{
                    return(
                       <div className={`${classes[cnt]} flex items-center justify-center py-2`}>
                        {children}
                        { ++cnt}
                       </div>    
                )
                    })
                
                ); 
}


//using this one
export const DivElement=({clas,onClick,children})=>{
                        return(
                           <div onClick={onClick} className={clas}>
                            {children}
                           </div>    
                    ) 
}