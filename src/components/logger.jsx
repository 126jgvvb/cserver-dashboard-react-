//import React, { Children } from "react";

export const Logger=({logData})=>{
if(logData===undefined) return;
    return ( 
    <div className="loggerDiv fixed mt-12 ml-14 justify-center md:ml-16 md:w-[90%]">
        <div className="console w-[100%] ml-0">
        {
            logData.logchildren.length>0 && logData.logchildren.map(item=>{
                return( 
                <div>
               <label>{item.message}</label>
                </div>
            )})
         }

        </div>
    </div>
    )
}
