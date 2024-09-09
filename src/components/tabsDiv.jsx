import React from "react"
import { useDispatch} from "react-redux";
import { DivElement } from "./createDivChildren";
import { setProperty } from "C:/Users/SAVANA/react/spaceserver/src/redux/actions";

var activeTabState1='tab-active';
var activeTabState2='tab-inactive';

function ToggleTabs(){
    if(activeTabState1==='tab-inactive'){
    (activeTabState1='tab-active');
    (activeTabState2='tab-inactive');
    }
    else{
        (activeTabState1='tab-inactive');
        (activeTabState2='tab-active');
    }
    
}

export const TabDiv=({data})=>{
    const dispatch=useDispatch();                                                              
    const updateProperty=(property,value)=>{
        dispatch(setProperty(property,value));
    }

    if(data.title==='uploads'||data.title==='IO' ){
    return(
       <DivElement clas={"tabDiv bg-subTitle mt-12 mb-5 justify-center mr-8 flex md:ml-[30%] md:w-[60%]"}>
        <DivElement clas={`${activeTabState1} mr-12  rounded-[9px]`} onClick={(Event)=>{ToggleTabs(); updateProperty('title','uploads')}} ><label>Backup Analysis</label></DivElement>
        <DivElement clas={`${activeTabState2} mr-12  rounded-[9px]`} onClick={(Event)=>{ ToggleTabs(); updateProperty('title','IO')}}><label>upload section</label> </DivElement>
        </DivElement>
    )}
    else if(data.title==='Admin'){
        return(
            <DivElement clas={"adminDetailsH bg-subTitle mt-12 mb-5 mr-12 md:ml-[30%] md:w-[60%]"}><label>admin details</label></DivElement>
        )
    }
    else if(data.title==='Behavior'){
        return(
            <DivElement clas={"behaviorHeaderH bg-subTitle mt-12 mb-5 mr-12 ml-12 md:ml-[30%] md:w-[60%]"}><label>File view</label></DivElement>
        )
    }
}