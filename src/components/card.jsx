import React from "react";
import { DivElement } from "./createDivChildren";
//[{name,classname,text},{}]

export const Card=({layoutClas,cardClas,array_of_objects})=>{
    return(
        <DivElement clas={layoutClas}>
            <DivElement clas={cardClas}>
                {
                    array_of_objects.length>0 && array_of_objects.map(element=>{
                        switch(element.tagName){
                            case 'label': return(<label>{element.text}</label>)
                            case  'input':return( <input  className={" lg:ml-[-199px]  ml-[-174px] w-[60%] sm:mt-[-87px] sm:ml-[-164px] h-[10%] mt-[48px] md:mt-[-85px]  md:ml-[-130px] md:w-[40%] absolute text-black  border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "} type={element.type} name={element.name} placeholder={element.placeholder} onChange={element.callback}></input>)
                            case 'button': return(<button className={`${element.className} w-[60%] sm:ml-[15%]  lg:w-[20%] lg:ml-[15%]`} id={element.id} onClick={element.onClick}>{element.text}</button> )
                            default: return( <label>No children found</label>)
                        }
                    })
                }
            </DivElement>
        </DivElement>
    )
}

